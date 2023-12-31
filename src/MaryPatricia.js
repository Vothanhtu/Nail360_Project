import React, { useState, useEffect } from 'react';
import './MaryPatricia.css';
import moment from 'moment';
export default function MaryPatricia({ handleCloseBookingPopup, handleBookingDetailPopup }) {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null)
  const [currentHour, setCurrentHour] = useState(moment().startOf('hour'));
  const [selectedHour, setSelectedHour] = useState(null);
  // Date
  const displayDates = () => {
    const dates = [];
    for (let i = 1; i <= 8; i++) {
      const date = moment(currentDate).add(i, 'days');
      dates.push(date);
    }
    return dates;
  };
  // Time
  const displayHours = () => {
    const hours = [];
    for (let i = 1; i <= 4; i++) {
      const hour = moment(currentHour).add(i * 30, 'minutes');
      hours.push(hour);
    }
    console.log(hours)
    return hours;
  };

  //Handle
  const handlePrev = () => {
    setCurrentDate(prevDate => moment(prevDate).subtract(1, 'day'));
  };

  const handleNext = () => {
    setCurrentDate(prevDate => moment(prevDate).add(1, 'day'));
  };

  const handleDateClick = date => {
    console.log('Selected Date:', date.format('MM/YYYY'));
    setSelectedDate(date.format('MMMM, YYYY'));
    setSelectedDay(date);
  };

  const handlePrevHour = () => {
    setCurrentHour(prevHour => moment(prevHour).subtract(30, 'minutes'));
  };

  const handleNextHour = () => {
    setCurrentHour(prevHour => moment(prevHour).add(30, 'minutes'));
  };

  // Khi click vào giờ nào đó
  const handleHourClick = hour => {
    setSelectedHour(hour);
    console.log(selectedHour);
  };
  // Control khi load page lần đầu
  useEffect(() => {
    setSelectedDate(moment().format('MMMM, YYYY'));
  }, []);

  const technicianList = [
    'Anyone',
    'Dorothy Lisa',
    'Nancy karen',
    'Betty Helen',
    'Technician-1',
    'Technician-2',
    'Technician-3',
    'Technician-4'
  ];
  const [selectedTechnician, setSelectedTechnician] = useState('');
  const handleTechnicianSelect = (technician) => {
    setSelectedTechnician(technician);
  };
  return (
    <div className='mary-patricia__container'>
      <div className='mary-patricia__wraper'>
        <div className='mary-patricia__container--header'>
          <div></div>
          <h2>Mary Patricia</h2>
          <svg onClick={handleCloseBookingPopup} className='close-popup__mary-patricia' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        </div>
        <h4 className='name__service'>Service 1</h4>
        <div className='datepicker-container'>
          <h2 className='month-year'>{selectedDate}</h2>
          <div className='datepicker-content'>
            <button className='btn-date--prev' onClick={handlePrev} >&lt;</button>
            <div className='datepicker-items'>
              {displayDates().map(date => (
                <div key={date.format('DD/MM/YYYY')} onClick={() => handleDateClick(date)}
                  className={`date-item ${date.isSame(selectedDay, 'day') ? 'selected-date' : ''}`}
                >
                  {date.format('dd DD').replace(date.format('dd'), date.format('dd').toUpperCase())}
                </div>
              ))}
            </div>
            <button className='btn-date--next' onClick={handleNext} >&gt;</button>
          </div>
        </div>
        <div className='timepicker-container'>
          <div className='timepicker-content'>
            <button className='btn-time--prev' onClick={handlePrevHour} >&lt;</button>
            <div className='timepicker-items'>
              {displayHours().map(hour => (
                <div
                  key={hour.format('HH:mm')}
                  onClick={() => handleHourClick(hour)}
                  className={selectedHour && hour.isSame(selectedHour) ? 'hour-item selected-hour' : 'hour-item'}
                >
                  {hour.format('HH:mm A')}
                </div>
              ))}

            </div>
            <button className='btn-time--next' onClick={handleNextHour} >&gt;</button>
          </div>
        </div>
        <div className='technician-container'>
          <h4>Select Nail Technician</h4>
          <div className='technician--name'>
            {technicianList.map((technician, index) => (
              <div key={index}>
                <label style={{display:'flex', gap: '10px'}} htmlFor={`technician-${index}`}>
                  <input
                    type="radio"
                    id={`technician-${index}`}
                    name="technician"
                    value={technician}
                    checked={selectedTechnician === technician}
                    onChange={() => handleTechnicianSelect(technician)}
                  />
                  {technician}
                </label>
              </div>
            ))}
          </div>
        </div>
        <button className='btn-save' onClick={handleBookingDetailPopup}>Save</button>
      </div>

    </div>
  );
}