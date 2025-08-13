import React from 'react';
import { TimePicker } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';

dayjs.extend(customParseFormat);

type Slot = {
  id: number;
  from: string;  // 'HH:mm:ss'
  to: string;    // 'HH:mm:ss'
  slots: string; // or number if you prefer
};

type DayKey =
  | 'all'
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export type AvailabilityValue = {
  // when "all" is used, you'll typically ignore perDay on save — or copy "all" to all days
  all: Slot[];
  perDay: Record<Exclude<DayKey, 'all'>, Slot[]>;
};

type Props = {
  value: AvailabilityValue;
  onChange: (patch: Partial<AvailabilityValue>) => void;
  prevTab: () => void;
  nextTab: () => void;
};

const fmt = 'HH:mm:ss';
const toD = (s: string) => (s ? dayjs(s, fmt) : dayjs('00:00:00', fmt));
const fromD = (d: Dayjs | null) => (d ? d.format(fmt) : '00:00:00');

const Availability: React.FC<Props> = ({ value, onChange, prevTab, nextTab }) => {
  // helpers to read/write specific tab list
  const getList = (key: DayKey): Slot[] =>
    key === 'all' ? value.all : value.perDay[key];

  const setList = (key: DayKey, list: Slot[]) => {
    if (key === 'all') onChange({ all: list });
    else onChange({ perDay: { ...value.perDay, [key]: list } });
  };

  const addRow = (key: DayKey) => {
    const list = getList(key);
    const next: Slot[] = [
      ...list,
      { id: (list[list.length - 1]?.id || 0) + 1, from: '00:00:00', to: '00:00:00', slots: '' },
    ];
    setList(key, next);
  };

  const deleteRow = (key: DayKey, id: number) => {
    const list = getList(key).filter((r) => r.id !== id);
    setList(key, list);
  };

  const changeTime = (key: DayKey, id: number, field: 'from' | 'to', d: Dayjs | null) => {
    const list = getList(key).map((r) => (r.id === id ? { ...r, [field]: fromD(d) } : r));
    setList(key, list);
  };

  const changeInput = (
    key: DayKey,
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const list = getList(key).map((r) => (r.id === id ? { ...r, [name]: value } : r));
    setList(key, list);
  };

  // Reusable block for each tab
  const SlotsBlock: React.FC<{ label: string; dayKey: DayKey }> = ({ label, dayKey }) => {
    const rows = getList(dayKey);
    return (
      <>
        <div className="hours-info">
          <h4 className="nameof-day">{label}</h4>
          {rows?.map((row) => (
            <div key={`${dayKey}-${row.id}`} className="row hours-cont">
              <div className="col-md-4">
                <div className="form-group">
                  <label>From</label>
                  <div className="form-availability-field">
                    <TimePicker
                      className="timepicker input-group-text"
                      value={toD(row.from)}
                      onChange={(d) => changeTime(dayKey, row.id, 'from', d)}
                      bordered={false}
                      format="h:mm A"
                    />
                    <span className="cus-icon">
                      <i className="fe fe-clock" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-group">
                  <label>To</label>
                  <div className="form-availability-field">
                    <TimePicker
                      className="timepicker input-group-text"
                      value={toD(row.to)}
                      onChange={(d) => changeTime(dayKey, row.id, 'to', d)}
                      bordered={false}
                      format="h:mm A"
                    />
                    <span className="cus-icon">
                      <i className="fe fe-clock" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div className="form-group">
                  <label>Slots</label>
                  <input
                    type="text"
                    className="form-control"
                    name="slots"
                    value={row.slots}
                    onChange={(e) => changeInput(dayKey, row.id, e)}
                    placeholder="Enter Slot"
                  />
                </div>
              </div>

              {row.id > 1 && (
                <div className="col-md-1">
                  <button
                    onClick={() => deleteRow(dayKey, row.id)}
                    className="btn btn-danger-outline delete-icon"
                    type="button"
                  >
                    <Icon.Trash2 className="react-feather-custom trashicon" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <Link
          to="#"
          className="link-sets add-text add-hours"
          onClick={() => addRow(dayKey)}
        >
          <i className="fe fe-plus-circle" /> Add More
        </Link>
      </>
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="available-section card-section ">
            <div className="available-heading">
              <h4>Availablity</h4>
            </div>

            <div className="timeslot-sec availablt-time-slots">
              <label className="col-form-label">Configure Time Slots</label>

              {/* Schedule Nav */}
              <div className="schedule-nav">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link active" data-bs-toggle="tab" to="#all_days">All Days</Link>
                  </li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_monday">Monday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_tuesday">Tuesday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_wednesday">Wednesday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_thursday">Thursday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_friday">Friday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_saturday">Saturday</Link></li>
                  <li className="nav-item"><Link className="nav-link" data-bs-toggle="tab" to="#slot_sunday">Sunday</Link></li>
                </ul>
              </div>
              {/* /Schedule Nav */}

              <div className="tab-content pt-0">
                <div className="tab-pane active" id="all_days">
                  <SlotsBlock label="All Days" dayKey="all" />
                </div>
                <div className="tab-pane fade" id="slot_monday">
                  <SlotsBlock label="Monday" dayKey="monday" />
                </div>
                <div className="tab-pane fade" id="slot_tuesday">
                  <SlotsBlock label="Tuesday" dayKey="tuesday" />
                </div>
                <div className="tab-pane fade" id="slot_wednesday">
                  <SlotsBlock label="Wednesday" dayKey="wednesday" />
                </div>
                <div className="tab-pane fade" id="slot_thursday">
                  <SlotsBlock label="Thursday" dayKey="thursday" />
                </div>
                <div className="tab-pane fade" id="slot_friday">
                  <SlotsBlock label="Friday" dayKey="friday" />
                </div>
                <div className="tab-pane fade" id="slot_saturday">
                  <SlotsBlock label="Saturday" dayKey="saturday" />
                </div>
                <div className="tab-pane fade" id="slot_sunday">
                  <SlotsBlock label="Sunday" dayKey="sunday" />
                </div>
              </div>
            </div>
            {/* Timeslot */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="bottom-btn">
            <div className="field-btns">
              <button className="btn btn-prev prev_btn" type="button" onClick={prevTab}>
                <i className="fas fa-arrow-left" /> Prev
              </button>
              <button className="btn btn-primary next_btn" type="button" onClick={nextTab}>
                Next <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Availability;
