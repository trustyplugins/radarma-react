import React, { useState } from 'react'
import SettingsSidebar from '../common/settingssidebar'
import { Link } from 'react-router-dom'
import { TagsInput } from 'react-tag-input-component';

const SeoSettings = () => {
  const [tags] = useState(['Test']);
  return (

    <div className="page-wrapper page-settings">

      <SettingsSidebar />
      {/* SEO Settings */}
      <div className="row">
        <div className="content-table">
          <div className="content-page-header ">
            <h5>SEO Settings</h5>
          </div>
          <ul className="nav seo-list">
            <li>
              <Link to="#" className="active" data-bs-toggle="tab" data-bs-target="#site">Site Meta</Link>
            </li>
            <li>
              <Link to="#" data-bs-toggle="tab" data-bs-target="#ogmeta">Og Meta</Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="site">
              <form>
                <div className="form-group">
                  <label>Meta Title</label>
                  <input type="text" className="form-control" placeholder="Enter Meta Title" />
                </div>
                <div className="form-group">
                  <label>Site Description</label>
                  <textarea className="form-control" placeholder="Enter Site Description" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Keywords</label>
                  <TagsInput
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
               // @ts-expect-error
                    className="input-tags form-control"
                    tags={tags}
                    value={tags}
                  />
                </div>
                <div className="col-lg-12">
                  <div className="btn-path">
                    <Link to="#" className="btn btn-cancel me-3">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="tab-pane fade" id="ogmeta">
              <form>
                <div className="form-group">
                  <label>Meta Titles</label>
                  <input type="text" className="form-control" placeholder="Enter Meta Title" />
                </div>
                <div className="form-group">
                  <label>Site Description</label>
                  <textarea className="form-control" placeholder="Enter Site Description" defaultValue={""} />
                </div>
                <div className="form-group">
                  <label>Keywords</label>
                  <TagsInput
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    className="input-tags form-control"
                    tags={tags}
                    value={tags}
                  />
                </div>
                <div className="col-lg-12">
                  <div className="btn-path">
                    <Link to="#" className="btn btn-cancel me-3">Cancel</Link>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /SEO Settings */}
    </div>

  )
}

export default SeoSettings