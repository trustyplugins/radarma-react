import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageWithBasePath from '../../../../core/img/ImageWithBasePath';
import supabase from '../../../../supabaseClient'; // adjust path

interface Props {
  categoryData?: any; // null for Add, object for Edit
  onSave: (category: string, slug: string, imageUrl: string, featured: boolean, parentId: number | null) => void;
  onUpdate: (id: number, category: string, slug: string, imageUrl: string, featured: boolean, parentId: number | null) => void;
}

const CatogriesModal: React.FC<Props> = ({ categoryData, onSave, onUpdate }) => {
  const [category, setCategory] = useState('');
  const [slug, setSlug] = useState('');
  const [featured, setFeatured] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [parentCategories, setParentCategories] = useState<any[]>([]);
  const [parentId, setParentId] = useState<number | null>(null);
  const [removeImage, setRemoveImage] = useState(false);
  // Fetch master categories for dropdown
  const fetchParentCategories = async () => {
    const { data, error } = await supabase
      .from('cities')
      .select('id, category')
      .order('category', { ascending: true });
    if (!error && data) {
      setParentCategories(data);
    }
  };

  useEffect(() => {
    fetchParentCategories();
  }, []);


  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData.category || '');
      setSlug(categoryData.category_slug || '');
      setPreviewUrl(categoryData.image_url || ''); // existing image if editing
      setFeatured(!!categoryData.featured);
      setParentId(categoryData.parent_id || null);
      setRemoveImage(false);
    } else {
      setCategory('');
      setSlug('');
      setImageFile(null);
      setPreviewUrl('');
      setFeatured(false);
      setParentId(null);
      setRemoveImage(false);
    }
  }, [categoryData]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // preview
    }
  };
  // NEW: Remove image handler
  const handleRemoveImage = () => {
    setImageFile(null);
    setPreviewUrl('');
    setRemoveImage(true);
  };
  const uploadImage = async (): Promise<string> => {
    if (!imageFile) return previewUrl; // no new image
    const fileName = `${Date.now()}-${imageFile.name}`;
    const { data, error } = await supabase.storage
      .from('categories') // storage bucket name
      .upload(fileName, imageFile);

    if (error) {
      console.error('Image upload error:', error);
      return previewUrl;
    }

    const { data: publicUrlData } = supabase.storage
      .from('categories')
      .getPublicUrl(fileName);

    return publicUrlData?.publicUrl || previewUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !slug) return;

    const uploadedImageUrl = await uploadImage();

    if (categoryData?.id) {
      onUpdate(categoryData.id, category, slug, uploadedImageUrl, featured, parentId);
    } else {
      onSave(category, slug, uploadedImageUrl, featured, parentId);
    }

    // Close modal manually
    (document.getElementById('close-category-modal') as HTMLButtonElement)?.click();
  };

  return (
    <div className="modal fade" id="add-category" tabIndex={-1} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">
                {categoryData ? 'Edit Sector/Phase' : 'Add Sector/Phase'}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="close-category-modal"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">City</label>
                <select
                  className="form-select"
                  value={parentId || ''}
                  onChange={(e) => setParentId(e.target.value ? Number(e.target.value) : null)}
                >
                  <option value="">-- Select City --</option>
                  {parentCategories.map((mc) => (
                    <option key={mc.id} value={mc.id}>
                      {mc.category}
                    </option>
                  ))}
                </select>
              </div>
              {/* Category Name */}
              <div className="mb-3">
                <label className="form-label">Sector/Phase Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter Sector/Phase"
                  required
                />
              </div>

              {/* Category Slug */}
              <div className="mb-3">
                <label className="form-label">Slug</label>
                <input
                  type="text"
                  className="form-control"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Enter slug"
                  required
                />
              </div>

              {/* Category Image */}
              <div className="mb-3">
                <label className="form-label">Image</label>
                <div className="form-uploads">
                  <div className="form-uploads-path">
                    {previewUrl ? (
                      <>
                        <img src={previewUrl} alt="Preview" className="img-thumbnail mb-2" width={100} />
                        <div className="d-flex gap-2 mb-2" style={{ justifyContent: 'center' }}>
                          <button
                            type="button"
                            className="btn btn-outline-danger btn-sm"
                            onClick={handleRemoveImage}
                            aria-label="Remove current image"
                          >
                            Remove image
                          </button>
                        </div>
                      </>
                    ) : (
                      <ImageWithBasePath src="assets/img/icons/upload-icon.svg" alt="img" />
                    )}

                    <div className="file-browse">
                      <h6>Drag &amp; drop image or </h6>
                      <div className="file-browse-path">
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                        <Link to="#"> Browse</Link>
                      </div>
                    </div>
                    <h5>Supported formats: JPEG, PNG</h5>
                  </div>
                </div>
              </div>

              {/* Featured Option */}
              <div className="mb-4">
                <label className="form-label">Is Featured?</label>
                <ul className="custom-radiosbtn">
                  <li>
                    <label className="radiossets">
                      Yes
                      <input type="radio" name="featured" checked={featured} onChange={() => setFeatured(true)} />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                  <li>
                    <label className="radiossets">
                      No
                      <input type="radio" name="featured" checked={!featured} onChange={() => setFeatured(false)} />
                      <span className="checkmark-radio" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                {categoryData ? 'Update' : 'Add'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CatogriesModal;
