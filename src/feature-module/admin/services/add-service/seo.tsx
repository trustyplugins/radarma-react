import React, { useMemo } from 'react';
import { TagsInput } from 'react-tag-input-component';

export type SeoValue = {
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[]; // optional, store as text[] or jsonb
};

type Props = {
  value: SeoValue;
  onChange: (patch: Partial<SeoValue>) => void;
  prevTab: () => void;
  onSave: () => Promise<void> | void;
  saving?: boolean;
};

const MAX_TITLE = 60;      // SEO best-practice (approx)
const MAX_DESC  = 160;     // SEO best-practice (approx)

const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 120);

const EditSeo: React.FC<Props> = ({ value, onChange, prevTab, onSave, saving }) => {
  const titleCount = value.metaTitle?.length ?? 0;
  const descCount  = value.metaDescription?.length ?? 0;

  // Optional: show a cleaned preview of the slug
  const prettySlug = useMemo(() => slugify(value.slug || ''), [value.slug]);

  return (
    <>
      <div className="addition-service card-section space-service">
        <div className="heading-service">
          <h4>SEO</h4>
        </div>

        <div className="row">
          {/* Slug */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Slug <small className="text-muted">(unique)</small></label>
              <input
                type="text"
                className="form-control"
                value={value.slug}
                onChange={(e) => onChange({ slug: slugify(e.target.value) })}
                placeholder="your-service-slug"
              />
              {value.slug && value.slug !== prettySlug && (
                <small className="text-muted d-block mt-1">
                  Suggested: <code>{prettySlug}</code>
                </small>
              )}
            </div>
          </div>

          {/* Meta Title */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Meta Title</label>
              <input
                type="text"
                className="form-control"
                value={value.metaTitle ?? ''}
                onChange={(e) => onChange({ metaTitle: e.target.value })}
                placeholder="Plumbing Service | AC Repair | ... "
                maxLength={120}
              />
              <small className={`d-block mt-1 ${titleCount > MAX_TITLE ? 'text-danger' : 'text-muted'}`}>
                {titleCount}/{MAX_TITLE} recommended
              </small>
            </div>
          </div>

          {/* Meta Keywords */}
          <div className="col-lg-12">
            <div className="form-group">
              <label>Meta Keywords <small className="text-muted">(optional)</small></label>
              <TagsInput
                value={value.metaKeywords ?? []}
                onChange={(arr) => onChange({ metaKeywords: arr })}
                name="meta-keywords"
                placeHolder="Type and press Enter"
              />
              <small className="text-muted d-block mt-1">
                Example: plumbing, pipe repair, emergency service
              </small>
            </div>
          </div>

          {/* Meta Description */}
          <div className="col-md-12">
            <div className="form-group">
              <label>Meta Description</label>
              <textarea
                className="form-control"
                rows={5}
                value={value.metaDescription ?? ''}
                onChange={(e) => onChange({ metaDescription: e.target.value })}
                placeholder="Short summary that will show in search results."
                maxLength={300}
              />
              <small className={`d-block mt-1 ${descCount > MAX_DESC ? 'text-danger' : 'text-muted'}`}>
                {descCount}/{MAX_DESC} recommended
              </small>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-btn">
        <div className="field-btns">
          <button className="btn btn-prev prev_btn" type="button" onClick={prevTab} disabled={!!saving}>
            <i className="fas fa-arrow-left" /> Prev
          </button>
          <button
            className="btn btn-primary next_btn"
            type="button"
            onClick={() => onSave()}
            disabled={!!saving || !value.slug}
            title={!value.slug ? 'Slug is required' : undefined}
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </>
  );
};

export default EditSeo;
