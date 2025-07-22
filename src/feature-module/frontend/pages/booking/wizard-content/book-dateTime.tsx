import React, { MouseEventHandler, useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../../../core/img/ImageWithBasePath'
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
interface props {
    handleNext: MouseEventHandler;
    handlePrev?: MouseEventHandler
}
const BookDateTime = ({handlePrev,handleNext}:props) => {
    const [value, onChange] = useState(new Date());
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
      // Handle click on list item
  const handleClick = (index: number) => {
    setSelectedIndex(index); // Set the clicked item as the selected one
  };
    const timeSlot = [
      {
        slot:'07:00 - 07:30',
        noOfSlot:2,
        disable:true
      },
      {
        slot:'07:30 - 08:00',
        noOfSlot:4,
        disable:true
      },
      {
        slot:'08:00 - 08:30',
        noOfSlot:2,
        disable:true
      },
      {
        slot:'08:30 - 09:00',
        noOfSlot:3,
        disable:true
      },
      {
        slot:'09:00 - 09:30',
        noOfSlot:3,
        disable:false
      },
      {
        slot:'09:30 - 10:00',
        noOfSlot:5,
        disable:false
      },
      {
        slot:'10:00 - 10:30',
        noOfSlot:2,
        disable:false
      },
      {
        slot:'10:30 - 11:00',
        noOfSlot:1,
        disable:false
      },
      {
        slot:'11:00 - 11:30',
        noOfSlot:4,
        disable:false
      },
      {
        slot:'11:30 - 12:00',
        noOfSlot:1,
        disable:false
      },
      {
        slot:'12:00 - 12:30',
        noOfSlot:3,
        disable:false
      },
      {
        slot:'12:30 - 13:00',
        noOfSlot:2,
        disable:false
      },
      {
        slot:'13:00 - 13:30',
        noOfSlot:3,
        disable:false
      },
      {
        slot:'13:30 - 14:00',
        noOfSlot:6,
        disable:false
      },
      {
        slot:'14:00 - 14:30',
        noOfSlot:4,
        disable:false
      },
      {
        slot:'14:30 - 15:00',
        noOfSlot:1,
        disable:false
      },
      {
        slot:'15:00 - 15:30',
        noOfSlot:2,
        disable:false
      },
      {
        slot:'15:30 - 16:00',
        noOfSlot:3,
        disable:false
      },
      {
        slot:'16:00 - 16:30',
        noOfSlot:1,
        disable:false
      },
      {
        slot:'16:30 - 17:00',
        noOfSlot:5,
        disable:false
      },
      {
        slot:'17:00 - 17:30',
        noOfSlot:3,
        disable:false
      }
      
    ]
  return (
    <fieldset className="booking-content" style={{ display: 'flex' }}>
                    <div className="book-card">
                      <div className="d-flex align-items-center justify-content-between flex-wrap booking-title">
                        <div className="d-flex align-items-center mb-2">
                          <h6 className="fs-16 me-2 mb-2">
                            Select Date &amp; Time
                          </h6>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <div className="dropdown mb-2">
                            <Link
                              to="#"
                              className="bg-light-500 d-inline-flex align-items-center"
                              data-bs-toggle="dropdown"
                            >
                              <i className="ti ti-shopping-cart me-1" />
                              Cart
                              <span className="bg-primary num-count ms-1">
                                1
                              </span>
                            </Link>
                            <div className="dropdown-menu dropdown-sm p-3">
                              <h6 className="fs-13 mb-3">Added In Cart (02)</h6>
                              <div className="d-flex align-items-center p-2 bg-light rounded mb-3">
                                <span className="avatar avatar-lg">
                                  <ImageWithBasePath
                                    src="assets/img/services/addservice-05.jpg"
                                    alt="img"
                                  />
                                </span>
                                <div className="ms-2">
                                  <h6 className="mb-1">Lighting Services</h6>
                                  <p className="fs-12">
                                    <i className="ti ti-star-filled text-warning me-1" />
                                    <span className="text-gray-9">4.9</span>{" "}
                                    (255 reviews)
                                  </p>
                                </div>
                              </div>
                              <div className="mb-2 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Lighting Services
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$457</h6>
                              </div>
                              <div className="mb-2 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Outlets &amp; Wiring
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$200</h6>
                              </div>
                              <div className="mb-0 d-flex align-items-center justify-content-between">
                                <div>
                                  <h6 className="fw-medium">
                                    Switches Changes
                                  </h6>
                                  <p className="fs-10">30 Min</p>
                                </div>
                                <h6 className="fs-12 fw-medium">$100</h6>
                              </div>
                              <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                <div>
                                  <h6 className="fw-medium">Total</h6>
                                </div>
                                <h6 className="fw-medium">$757</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row g-3">
                        <div className="col-md-5">
                          <h6 className="fs-13 fw-medium mb-2">Select date</h6>
                          <div className="card border mb-0">
                            <div className="card-body p-0">
                            <Calendar
                                className='w-100 border-0'
                                onChange={()=>onChange}
                                value={value}
                                />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7">
                          <h6 className="fs-13 fw-medium mb-2">Select Time</h6>
                          <div className="row g-2">
                            {timeSlot.map((item: any, index: number)=>{
                              return(
                                <div className="col-lg-4 col-md-6" key={index}>
                                  <div className={`time-item ${item.disable? 'disable':''} ${selectedIndex === index ? 'selected' : ''}`} 
                                  onClick={() => handleClick(index)}>
                                    <h6 className="fs-12 fw-medium">
                                     {item.slot}
                                    </h6>
                                    <p className="fs-10">{item.noOfSlot} Slots</p>
                                  </div>
                                </div>
                              )
                            })}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="booking-footer d-flex align-items-center justify-content-end">
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          onClick={handlePrev}
                          className="btn btn-sm btn-light d-inline-flex align-items-center prev_btn me-2"
                        >
                          <i className="ti ti-arrow-left me-1" />
                          Prev
                        </Link>
                        <Link
                          to="#"
                          onClick={handleNext}
                          className="btn btn-sm btn-dark d-inline-flex align-items-center next_btn"
                        >
                          Next
                          <i className="ti ti-arrow-right ms-1" />
                        </Link>
                      </div>
                    </div>
                  </fieldset>
  )
}

export default BookDateTime