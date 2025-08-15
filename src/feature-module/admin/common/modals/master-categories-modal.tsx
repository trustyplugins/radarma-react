import React, { useState, useEffect } from 'react';
import { useSession } from '../../SessionContext';
interface Props {
  categoryData?: any; // null for Add, object for Edit
  onSave: (category: string, slug: string) => void;
  onUpdate: (id: number, category: string, slug: string) => void;
}

const MCatogriesModal: React.FC<Props> = ({ categoryData, onSave, onUpdate }) => {
  const [category, setCategory] = useState('');
  const [slug, setSlug] = useState('');
  
  useEffect(() => {
    if (categoryData) {
      setCategory(categoryData.category || '');
      setSlug(categoryData.category_slug || '');
    } else {
      setCategory('');
      setSlug('');
    }
  }, [categoryData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!category || !slug) return;

    if (categoryData?.id) {
      onUpdate(categoryData.id, category, slug);
    } else {
      onSave(category, slug);
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
                {categoryData ? 'Edit Category' : 'Add Category'}
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
                <label className="form-label">Category Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Category Slug</label>
                <input
                  type="text"
                  className="form-control"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="Enter category slug"
                  required
                />
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

export default MCatogriesModal;
