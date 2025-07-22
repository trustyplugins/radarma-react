import FullCalendar from '@fullcalendar/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dayGridPlugin from '@fullcalendar/daygrid';
import { Dropdown } from 'primereact/dropdown';
import ImageWithBasePath from '../../../core/img/ImageWithBasePath';
import * as Icon from 'react-feather';
import SettingsSidebar from '../common/settingssidebar';

const CalendarSetting = () => {
  const events = [{ title: 'Meeting', start: new Date() }];
  const [selectedValue, setSelectedValue] = useState(null);
  const value = [{ name: 'A - Z' }, { name: 'Most Helpful' }];
  return (
    <>
      <div className="page-wrapper ">
  <div className="content w-100 ps-0 pt-0">
  <SettingsSidebar />
    <div className="row">
      <div className="content-table">
        <div className="col-lg-12">
          <div className="content-page-header calendar-set-grp">
            <h5>Calendar</h5>
            <div className="filter-sorting">
              <ul>
                <li>
                  <Link to="#" className="filter-sets">
                    <Icon.Filter className="react-feather-custom me-2" />
                    Filter
                  </Link>
                </li>
                <li>
                  <span>
                    <ImageWithBasePath
                      src="assets/admin/img/icons/sort.svg"
                      className="me-2"
                      alt="img"
                    />
                  </span>
                  <div className="review-sort">
                  <Dropdown
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.value)}
                    options={value}
                    optionLabel="name"
                    placeholder="A - Z"
                    className="select"
                  />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12">
          <div className="card bg-white">
            <div className="card-body">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                weekends={false}
                events={events}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default CalendarSetting
