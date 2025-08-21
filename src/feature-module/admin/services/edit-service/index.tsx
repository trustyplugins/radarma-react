import React, { useEffect, useState } from "react";
import { useParams,useNavigate} from "react-router-dom";
import supabase from "../../../../supabaseClient";

import ServiceInformation from "./serviceInformation";
import Availability from "./availability";
import Location from "./location";
import Gallery from "./gallery";
import EditSeo from "./seo";
// ---- same types you defined for AddService ----
type AdditionalRow = { id: number; additionalService: string; price: number; duration: string,speciality:boolean };
type Option = { id: number; name: string };
type TagOption = { id: number; name: string };

type Info = {
  title: string;
  masterCategory: Option | null;
  category: Option[];
  mainCategory: Option[];
  subCategory: Option[];
  tags: TagOption[];
  subTags: TagOption[];
  description: string;
  additionalEnabled: boolean;
  additional: AdditionalRow[];
  videoUrl: string;
};

type Slot = { id: number; from: string; to: string; slots: string };
type PerDay = {
  monday: Slot[]; tuesday: Slot[]; wednesday: Slot[];
  thursday: Slot[]; friday: Slot[]; saturday: Slot[]; sunday: Slot[];
};
type AvailabilityT = { all: Slot[]; perDay: PerDay };

type LocationT = { address?: string; lat?: number; lng?: number };
type GalleryT = { files: (File | { url: string })[] };
type SeoT = { slug: string; metaTitle?: string; metaDescription?: string;metaKeywords?: string[]; };

type ServiceForm = {
  info: Info;
  availability: AvailabilityT;
  location: LocationT;
  gallery: GalleryT;
  seo: SeoT;
};

const EditService = () => {
  const { id } = useParams<{ id: string }>(); // e.g. /edit-services/[id]
  const [form, setForm] = useState<ServiceForm | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  // ---- Tab UI states ----
  const [PageChange, setPageChange] = useState<"information" | "booking" | "location" | "gallery" | "seo">("information");

  // ---- Load existing listing ----
  useEffect(() => {
    const fetchListing = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }
      const [
        cityRes,
        sectorsRes,
        mainCatsRes,
        subCatsRes,
        tagsRes,
        subTagsRes,
      ] = await Promise.all([
        data.city_id
          ? supabase.from("cities").select("id, category").eq("id", data.city_id).single()
          : Promise.resolve({ data: null }),
        data.sector_ids?.length
          ? supabase.from("sectors").select("id, category").in("id", data.sector_ids)
          : Promise.resolve({ data: [] }),
        data.main_category_ids?.length
          ? supabase.from("main_categories").select("id, category").in("id", data.main_category_ids)
          : Promise.resolve({ data: [] }),
        data.sub_category_ids?.length
          ? supabase.from("sub_categories").select("id, category").in("id", data.sub_category_ids)
          : Promise.resolve({ data: [] }),
        data.tag_ids?.length
          ? supabase.from("tags").select("id, category").in("id", data.tag_ids)
          : Promise.resolve({ data: [] }),
        data.sub_tag_ids?.length
          ? supabase.from("sub_tags").select("id, category").in("id", data.sub_tag_ids)
          : Promise.resolve({ data: [] }),
      ]);
      console.log(data);
      // Map DB → Form
      const mapped: ServiceForm = {
        info: {
          title: data.title,
          masterCategory: cityRes.data
            ? { id: cityRes.data.id, name: cityRes.data.category }
            : null,
          category: sectorsRes.data?.map((c) => ({ id: c.id, name: c.category })) || [],
          mainCategory: mainCatsRes.data?.map((c) => ({ id: c.id, name: c.category })) || [],
          subCategory: subCatsRes.data?.map((c) => ({ id: c.id, name: c.category })) || [],
          tags: tagsRes.data?.map((t) => ({ id: t.id, name: t.category })) || [],
          subTags: subTagsRes.data?.map((st) => ({ id: st.id, name: st.category })) || [],
          description: data.description || "",
          additionalEnabled: data.additional_enabled,
          additional: data.additional || [],
          videoUrl: data.video_url || "",
        },
        availability: data.availability || { all: [], perDay: { monday: [], tuesday: [], wednesday: [], thursday: [], friday: [], saturday: [], sunday: [] } },
        location: { address: data.address, lat: data.lat, lng: data.lng },
        gallery: { files: (data.gallery_urls || []).map((url: string) => ({ url })) },
        seo: { slug: data.slug, metaTitle: data.meta_title || "", metaDescription: data.meta_description || "",metaKeywords: data.meta_keywords || "" }
      };
      setForm(mapped);
      setLoading(false);
    };

    if (id) fetchListing();
  }, [id]);

  // ---- Save updates ----
  const handleUpdate = async () => {
    if (!form) return;
    setSaving(true);

    const payload = {
      title: form.info.title,
      description: form.info.description,
      city_id: form.info.masterCategory?.id ?? null,
      sector_ids: form.info.category.map(c => c.id),
      main_category_ids: form.info.mainCategory.map(c => c.id),
      sub_category_ids: form.info.subCategory.map(c => c.id),
      tag_ids: form.info.tags.map(c => c.id),
      sub_tag_ids: form.info.subTags.map(c => c.id),
      additional_enabled: form.info.additionalEnabled,
      additional: form.info.additional,
      video_url: form.info.videoUrl,
      availability: form.availability,
      address: form.location.address,
      lat: form.location.lat,
      lng: form.location.lng,
      gallery_urls: form.gallery.files.map(f => ("url" in f ? f.url : "")),
      slug: form.seo.slug,
      meta_title: form.seo.metaTitle,
      meta_description: form.seo.metaDescription,
      meta_keywords:form.seo.metaKeywords,
    };

    const { error } = await supabase
      .from("listings")
      .update(payload)
      .eq("id", id);

    setSaving(false);
    if (error) {
      console.error(error);
      alert("Failed to update Listing.");
    } else {
      alert("Listing updated successfully!");
      navigate("/services/all-services");
    }
  };

  if (loading || !form) return <p>Loading...</p>;
  //console.log(form);
  return (
    <div className="page-wrapper">
      <div className="content">
        {/* --- Same tab UI as AddService --- */}
        {PageChange === "information" ? (
          <ServiceInformation value={form.info} onChange={(patch) => setForm(p => ({ ...p!, info: { ...p!.info, ...patch } }))} nextTab={() => setPageChange("booking")} />
        ) : PageChange === "booking" ? (
          <Availability value={form.availability} onChange={(patch) => setForm(p => ({ ...p!, availability: { ...p!.availability, ...patch } }))} prevTab={() => setPageChange("information")} nextTab={() => setPageChange("location")} />
        ) : PageChange === "location" ? (
          <Location value={form.location} onChange={(patch) => setForm(p => ({ ...p!, location: { ...p!.location, ...patch } }))} prevTab={() => setPageChange("booking")} nextTab={() => setPageChange("gallery")} />
        ) : PageChange === "gallery" ? (
          <Gallery value={form.gallery} onChange={(updater) => setForm(p => ({ ...p!, gallery: updater(p!.gallery) }))} prevTab={() => setPageChange("location")} nextTab={() => setPageChange("seo")} />
        ) : (
          <EditSeo value={form.seo} onChange={(patch) => setForm(p => ({ ...p!, seo: { ...p!.seo, ...patch } }))} prevTab={() => setPageChange("gallery")} onSave={handleUpdate} saving={saving} />
        )}
      </div>
    </div>
  );
};

export default EditService;
