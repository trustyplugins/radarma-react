import React from 'react'
import * as Icon from 'react-feather';

const DeleteCategoriesModal: React.FC<Props> = ({ categoryData, onDelete }) => {
    const handleConfirmDelete = () => {
        if (categoryData?.id) {
            onDelete(categoryData.id);
            (document.getElementById('close-delete-modal') as HTMLButtonElement)?.click();
        }
    };
    return (
        <div className="modal fade" id="delete-category" tabIndex={-1} aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Category</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="close-delete-modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Are you sure you want to delete{' '}
                            <strong>{categoryData?.category}</strong>?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleConfirmDelete}
                        >
                            Delete
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteCategoriesModal
