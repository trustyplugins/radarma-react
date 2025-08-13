import React, { useState } from 'react';
import ServiceInformation from './serviceInformation';
import Availability from './availability';
import Location from './location';
import Gallery from './gallery';
import EditSeo from './seo';
import supabase from '../../../../supabaseClient';
type AdditionalRow = { id: number; additionalService: string; price: number; duration: string };
type Info = {
  title: string;
  masterCategory: { name: string } | null;
  category: { name: string } | null;
  subCategory: { name: string } | null;
  description: string;
  additionalEnabled: boolean;
  additional: AdditionalRow[];
  videoUrl: string;
};

type Slot = { id: number; from: string; to: string; slots: string };
type PerDay = {
  monday: Slot[]; tuesday: Slot[]; wednesday: Slot[]; thursday: Slot[];
  friday: Slot[]; saturday: Slot[]; sunday: Slot[];
};
type AvailabilityT = { all: Slot[]; perDay: PerDay };

type LocationT = {
  address?: string;
  lat?: number;
  lng?: number;
};

type GalleryT = {
  files: (File | { url: string })[]; // support File (new) and existing urls if editing
};

type SeoT = {
  slug: string;              // unique constraint in DB recommended
  metaTitle?: string;
  metaDescription?: string;
};

type AddServiceForm = {
  info: Info;
  availability: AvailabilityT;
  location: LocationT;
  gallery: GalleryT;
  seo: SeoT;
};
const emptySlot: Slot = { id: 1, from: '00:00:00', to: '00:00:00', slots: '' };
const initialForm: AddServiceForm = {
  info: {
    title: '',
    masterCategory: null,
    category: null,
    subCategory: null,
    description: '',
    additionalEnabled: true,
    additional: [{ id: 1, additionalService: '', price: 0, duration: '' }],
    videoUrl: '',
  },
  availability: {
    all: [ { ...emptySlot } ],
    perDay: {
      monday:    [ { ...emptySlot } ],
      tuesday:   [ { ...emptySlot } ],
      wednesday: [ { ...emptySlot } ],
      thursday:  [ { ...emptySlot } ],
      friday:    [ { ...emptySlot } ],
      saturday:  [ { ...emptySlot } ],
      sunday:    [ { ...emptySlot } ],
    },
  },
  location: {},
  gallery: { files: [] },
  seo: { slug: '' },
};


const AddService = () => {
  const [TabChange, setTabChange] = useState(true);
  const [TabChange1, setTabChange1] = useState(false);
  const [TabChange2, setTabChange2] = useState(false);
  const [TabChange3, setTabChange3] = useState(false);
  const [TabChange4, setTabChange4] = useState(false);
  const [PageChange, setPageChange] = useState('information');
  const [form, setForm] = useState<AddServiceForm>(initialForm);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const availabilityTab = () => {
    setPageChange('booking');
    setTabChange1(true);
    setTabChange(false);
    setTabChange2(false);
    setTabChange3(false);
    setTabChange4(false);
  };
  const serviceTab = () => {
    setPageChange('information');
    setTabChange1(false);
    setTabChange2(false);
    setTabChange3(false);
    setTabChange4(false);
    setTabChange(true);
  };
  const locationTab = () => {
    setPageChange('location');
    setTabChange2(true);
    setTabChange1(false);
    setTabChange(false);
    setTabChange3(false);
    setTabChange4(false);
  };

  const galleryTab = () => {
    setPageChange('gallery');
    setTabChange3(true);
    setTabChange2(false);
    setTabChange1(false);
    setTabChange4(false);
    setTabChange(false);
  };

  const seoTab = () => {
    setPageChange('seo');
    setTabChange4(true);
    setTabChange3(false);
    setTabChange2(false);
    setTabChange1(false);
    setTabChange(false);
  };
  // ---- helpers passed to children to update slices ----
  const updateInfo = (patch: Partial<Info>) =>
    setForm(prev => ({ ...prev, info: { ...prev.info, ...patch } }));

  const updateAvailability = (patch: Partial<AvailabilityT>) =>
    setForm(prev => ({ ...prev, availability: { ...prev.availability, ...patch } }));

  const updateLocation = (patch: Partial<LocationT>) =>
    setForm(prev => ({ ...prev, location: { ...prev.location, ...patch } }));

  const updateGallery = (updater: (g: GalleryT) => GalleryT) =>
    setForm(prev => ({ ...prev, gallery: updater(prev.gallery) }));

  const updateSeo = (patch: Partial<SeoT>) =>
    setForm(prev => ({ ...prev, seo: { ...prev.seo, ...patch } }));

  // ---- uploader for gallery files (optional) ----
  async function uploadGalleryFiles(files: GalleryT['files']): Promise<string[]> {
    const urls: string[] = [];

    for (const f of files) {
      if (f instanceof File) {
        const ext = f.name.split('.').pop() || 'bin';
        const path = `services/${crypto.randomUUID()}.${ext}`;
        const { error } = await supabase.storage.from('Service Gallery').upload(path, f, {
          cacheControl: '3600',
          upsert: false,
        });
        if (error) throw error;

        const { data } = supabase.storage.from('Service Gallery').getPublicUrl(path);
        urls.push(data.publicUrl);
      } else if ('url' in f) {
        urls.push(f.url);
      }
    }
    return urls;
  }


  // ---- final save (called from SEO step) ----
  const handleSave = async () => {
    setSaving(true);
    setErrorMsg(null);
  
    try {
      // validations
      if (!form.info.title?.trim()) throw new Error('Title is required.');
      if (!form.seo.slug?.trim()) throw new Error('Slug is required.');
  
      // Auth (recommended so RLS passes)
      const { data: { user }, error: userErr } = await supabase.auth.getUser();
      if (userErr) throw userErr;
      if (!user) throw new Error('You must be signed in to save.');
  
      // upload gallery
      const galleryUrls = await uploadGalleryFiles(form.gallery.files);
  
      // normalize availability: copy "all" to any empty day
      const fillAvailability = () => {
        const all = form.availability.all ?? [];
        const per = { ...form.availability.perDay };
        (Object.keys(per) as (keyof typeof per)[]).forEach((k) => {
          if (!Array.isArray(per[k]) || per[k].length === 0) {
            per[k] = all.map((s, i) => ({ ...s, id: i + 1 }));
          }
        });
        return { all, perDay: per };
      };
  
      const payload = {
        user_id: user.id,
  
        // information
        title: form.info.title,
        description: form.info.description || null,
        master_category: form.info.masterCategory?.name ?? null,
        category: form.info.category?.name ?? null,
        sub_category: form.info.subCategory?.name ?? null,
        additional_enabled: !!form.info.additionalEnabled,
        additional: form.info.additional?.length ? form.info.additional : [],
        video_url: form.info.videoUrl || null,
        price: form.info.price ?? null,
  
        // availability
        availability: fillAvailability(),
  
        // location
        address: form.location.address || null,
        lat: form.location.lat ?? null,
        lng: form.location.lng ?? null,
  
        // gallery
        gallery_urls: galleryUrls,
  
        // seo
        slug: form.seo.slug,
        meta_title: form.seo.metaTitle || null,
        meta_description: form.seo.metaDescription || null,
        meta_keywords: form.seo.metaKeywords ?? [],
  
        status: 'draft',
      };
  
      const { data, error } = await supabase
        .from('listings')           // 👈 new table
        .insert(payload)
        .select()
        .single();
  
      if (error) throw error;
  
      setForm(initialForm);
      alert('Listing saved successfully!');
      // navigate(`/listings/${data.slug}`) if you like
    } catch (e: any) {
      console.error(e);
      setErrorMsg(e.message ?? 'Failed to save listing.');
    } finally {
      setSaving(false);
    }
  };
  
  

  console.log(form);
  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="progressbar-card">
                <ul id="progress-head">
                  <li className="active">
                    Add Services - Service Information
                  </li>
                  <li>Add Services - Availablity</li>
                  <li>Add Services - Location</li>
                  <li>Add Services - Gallery</li>
                  <li>Add Services - SEO</li>
                </ul>
                <ul id="progressbar">
                  <li className={TabChange ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-check-circle" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Information</h6>
                    </div>
                  </li>
                  <li className={TabChange1 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-clock" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Availability</h6>
                    </div>
                  </li>
                  <li className={TabChange2 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-map" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Location</h6>
                    </div>
                  </li>
                  <li className={TabChange3 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-images" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>Gallery</h6>
                    </div>
                  </li>
                  <li className={TabChange4 ? 'active' : ''}>
                    <div className="multi-step-icon">
                      <span>
                        <i className="far fa-chart-bar" />
                      </span>
                    </div>
                    <div className="multi-step-info">
                      <h6>SEO</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="row"><div className="col-lg-12 m-auto">
              <div className="alert alert-danger">{errorMsg}</div>
            </div></div>
          )}



          <div className="row">
            <div className="col-lg-12 m-auto">
              {PageChange === 'information' ? (
                <ServiceInformation
                  value={form.info}
                  onChange={(patch) => setForm(p => ({ ...p, info: { ...p.info, ...patch } }))}
                  nextTab={availabilityTab}
                />

              ) : PageChange === 'booking' ? (
                <Availability
                  value={form.availability}
                  onChange={(patch) =>
                    setForm((p) => ({ ...p, availability: { ...p.availability, ...patch } }))
                  }
                  prevTab={serviceTab}
                  nextTab={locationTab}
                />

              ) : PageChange === 'location' ? (
                <Location
                value={form.location} // { address?: string; lat?: number; lng?: number }
                onChange={(patch) => setForm(p => ({ ...p, location: { ...p.location, ...patch } }))}
                prevTab={availabilityTab}
                nextTab={galleryTab}
              />
              
              ) : PageChange === 'gallery' ? (
                <Gallery
                value={form.gallery}                 // { files: (File | {url:string})[] }
                onChange={(updater) => setForm(p => ({ ...p, gallery: updater(p.gallery) }))}
                prevTab={locationTab}
                nextTab={seoTab}
              />
              
              ) : (
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                <EditSeo
                value={form.seo}
                onChange={updateSeo}
                prevTab={galleryTab}
                onSave={handleSave}
                saving={saving}
              />
              
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
