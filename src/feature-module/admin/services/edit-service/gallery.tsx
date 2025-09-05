import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

type GalleryItem = File | { url: string };
type G = { files: GalleryItem[] };

type Props = {
  value: G;
  onChange: (patch: Partial<G>) => void;
  prevTab: () => void;
  nextTab: () => void;
  userRole: string | null;
  onUpdate: () => void;
  saving?: boolean;
};

const ACCEPTED = ['image/jpeg', 'image/png'];
const MAX_FILES = 12;
const MAX_SIZE_MB = 8;

const Gallery: React.FC<Props> = ({
  value,
  onChange,
  prevTab,
  nextTab,
  userRole,
  onUpdate,
  saving,
}) => {
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [filePreviews, setFilePreviews] = useState<string[]>([]);

  // Generate previews when files change
  useEffect(() => {
    const urls = value.files.map((f) =>
      f instanceof File ? URL.createObjectURL(f) : f.url
    );
    setFilePreviews(urls);

    return () => {
      urls.forEach((url, idx) => {
        if (value.files[idx] instanceof File) {
          URL.revokeObjectURL(url);
        }
      });
    };
  }, [value.files]);

  const validateFiles = (files: File[]): File[] => {
    const accepted: File[] = [];
    for (const f of files) {
      if (!ACCEPTED.includes(f.type)) {
        setError('Only JPEG and PNG are supported.');
        continue;
      }
      if (f.size > MAX_SIZE_MB * 1024 * 1024) {
        setError(`Each file must be <= ${MAX_SIZE_MB}MB.`);
        continue;
      }
      accepted.push(f);
    }
    if (accepted.length) setError(null);
    return accepted;
  };

  const addFiles = (files: FileList | null) => {
    if (!files?.length) return;
    const arr = validateFiles(Array.from(files));
    if (!arr.length) return;

    onChange({
      files: [...value.files, ...arr].slice(0, MAX_FILES),
    });

    if (inputRef.current) inputRef.current.value = '';
  };

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer?.files?.length) {
      addFiles(e.dataTransfer.files);
    }
  };

  const onBrowseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const deleteImage = (index: number) => {
    onChange({
      files: value.files.filter((_, i) => i !== index),
    });
  };

  const setDefault = (index: number) => {
    if (index === 0) return;
    const next = [...value.files];
    const [chosen] = next.splice(index, 1);
    next.unshift(chosen);
    onChange({ files: next });
  };

  return (
    <>
      <div
        className="addition-service card-section"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
      >
        <div className="heading-service">
          <h4>Gallery</h4>
        </div>

        <div className="form-uploads mb-4">
          <div className="form-uploads-path">
            <img src="/assets/img/icons/upload-icon.svg" alt="img" />
            <div className="file-browse">
              <h6>Drag &amp; drop images or </h6>
              <div className="file-browse-path">
                <input
                  ref={inputRef}
                  type="file"
                  accept={ACCEPTED.join(',')}
                  multiple
                  onChange={(e) => addFiles(e.target.files)}
                />
                <Link to="#" onClick={onBrowseClick}>
                  Browse
                </Link>
              </div>
            </div>
            <h5>
              Supported formats: JPEG, PNG • Max {MAX_FILES} files • ≤{' '}
              {MAX_SIZE_MB}MB each
            </h5>
            {error && <div className="text-danger mt-2">{error}</div>}
          </div>
        </div>

        <div className="file-preview">
          <label>Select Default Image</label>
          {value.files.length === 0 ? (
            <div className="text-muted">No images yet. Add some above.</div>
          ) : (
            <ul className="gallery-selected-img">
              {value.files.map((item, index) => {
                const src = filePreviews[index];
                return (
                  <li key={index}>
                    <div className="img-preview">
                      <img src={src} alt={`Service Image ${index + 1}`} />
                      <Link
                        to="#"
                        className="remove-gallery"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteImage(index);
                        }}
                        title="Remove"
                      >
                        <Icon.Trash2 style={{ width: 16, height: 16 }} />
                      </Link>
                    </div>
                    <label className="custom_check" title="Set as default">
                      <input
                        type="radio"
                        name="gallery_default"
                        checked={index === 0}
                        onChange={() => setDefault(index)}
                      />
                      <span className="checkmark" />
                    </label>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="bottom-btn">
        <div className="field-btns">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onUpdate}
            style={{ marginRight: '10px' }}
            disabled={saving}
          >
            {saving ? 'Updating...' : 'Update'}
          </button>

          <button
            className="btn btn-prev prev_btn"
            type="button"
            onClick={prevTab}
          >
            <i className="fas fa-arrow-left" /> Prev
          </button>

          {userRole === 'A1' && (
            <button
              className="btn btn-primary next_btn"
              type="button"
              onClick={nextTab}
            >
              Next <i className="fas fa-arrow-right" />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
