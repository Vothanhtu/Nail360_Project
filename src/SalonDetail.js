import React, { useEffect, useState } from 'react';
import './SalonDetail.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import SalonBooking from './SalonBooking';
import ReactPaginate from 'react-paginate';
import Map from './Map';
import Time from './Time';
import AddService from './AddService';
import MaryPatricia from './MaryPatricia';
import BookingDetail from './BookingDetail';
export default function SalonDetail() {
  const imageDetail = [
    [
      {
        src: 'salonService.svg',
        title: 'Nail Extension',
        rate: 'rate.svg',
        altText: 'Slide 1',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 1,
      },
      {
        src: 'salonService2.svg',
        title: 'Nail Art',
        rate: 'rate.svg',
        altText: 'Slide 2',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 2,
      },
      {
        src: 'salonService3.svg',
        title: 'Manicure',
        rate: 'rate.svg',
        altText: 'Slide 3',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 3,
      },
      {
        src: 'salonService3.svg',
        title: 'Pedicure',
        rate: 'rate.svg',
        altText: 'Slide 4',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 4,
      },
      {
        src: 'salonService.svg',
        title: 'Nail Trim',
        rate: 'rate.svg',
        altText: 'Slide 5',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 5,
      },
      {
        src: 'salonService2.svg',
        title: 'Acrylic Manicure',
        rate: 'rate.svg',
        altText: 'Slide 6',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 6,
      },
      {
        src: 'salonService.svg',
        title: 'Nail Extension',
        rate: 'rate.svg',
        altText: 'Slide 7',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 7,
      },
      {
        src: 'salonService2.svg',
        title: 'Nail Art',
        rate: 'rate.svg',
        altText: 'Slide 8',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 8,
      },
      {
        src: 'salonService3.svg',
        title: 'Manicure',
        rate: 'rate.svg',
        altText: 'Slide 9',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 9,
      },
      {
        src: 'salonService3.svg',
        title: 'Pedicure',
        rate: 'rate.svg',
        altText: 'Slide 10',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 10,
      },
      {
        src: 'salonService.svg',
        title: 'Nail Trim',
        rate: 'rate.svg',
        altText: 'Slide 11',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 11,
      },
      {
        src: 'salonService2.svg',
        title: 'Acrylic Manicure',
        rate: 'rate.svg',
        altText: 'Slide 12',
        text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry.',
        key: 12,
      }
    ]
  ];
  const [showAll, setShowAll] = useState(false);

  // Xử lý phần Add Photo
  const [showPopupAddPhoto, setShowPopupAddPhoto] = useState(false);

  const handleAddPhotoClick = () => {
    setShowPopupAddPhoto(true);
  };

  const handleClosePopupClick = () => {
    setShowPopupAddPhoto(false);
    // Đóng ké cái show all ảnh
    setShowAllPhoto(false);
  };

  //Xử lý lấy ảnh lên
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgSrc = event.target.result;
      const newImage = { id: allImage.length + 1, url: imgSrc };
      setAllImage([...allImage, newImage]);
      setImageSrc(imgSrc);
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopupAddPhoto(false);
    setImageSrc(null);
  };

  // Show all photo in album
  const [showAllPhoto, setShowAllPhoto] = useState(false);
  const [allImage, setAllImage] = useState([
    // { id: 1, url: 'imageDetail3.svg' },
    // { id: 2, url: 'imageDetail3.svg' },
    // { id: 3, url: 'imageDetail5.svg' },
    // { id: 4, url: 'imageDetail7.svg' },
    // { id: 5, url: 'imageDetail3.svg' },
    // { id: 6, url: 'imageDetail3.svg' },
    // { id: 7, url: 'imageDetail5.svg' },
    // { id: 8, url: 'imageDetail7.svg' },
    // { id: 9, url: 'imageDetail7.svg' },
    // { id: 10, url: 'imageDetail3.svg' },
    // { id: 11, url: 'imageDetail3.svg' },
    // { id: 12, url: 'imageDetail5.svg' },
    // { id: 13, url: 'imageDetail7.svg' },
    // { id: 14, url: 'imageDetail3.svg' },
    // { id: 15, url: 'imageDetail3.svg' },
    // { id: 16, url: 'imageDetail5.svg' },
    // { id: 17, url: 'imageDetail7.svg' },
    // { id: 18, url: 'imageDetail7.svg' },
    // { id: 19, url: 'imageDetail3.svg' },
    // { id: 20, url: 'imageDetail3.svg' },
    // { id: 21, url: 'imageDetail5.svg' },
    // { id: 22, url: 'imageDetail7.svg' },
    // { id: 23, url: 'imageDetail3.svg' },
    // { id: 24, url: 'imageDetail3.svg' },
    // { id: 25, url: 'imageDetail5.svg' },
    // { id: 26, url: 'imageDetail7.svg' },
    // { id: 27, url: 'imageDetail7.svg' },
    // { id: 28, url: 'imageDetail3.svg' },
    // { id: 29, url: 'imageDetail3.svg' },
    // { id: 30, url: 'imageDetail5.svg' },
    // { id: 31, url: 'imageDetail7.svg' },
    // { id: 32, url: 'imageDetail3.svg' },
    // { id: 33, url: 'imageDetail3.svg' },
    // { id: 34, url: 'imageDetail5.svg' },
    // { id: 35, url: 'imageDetail7.svg' },
    // { id: 36, url: 'imageDetail7.svg' },
  ]);
  const togglePopup = () => {
    setShowAllPhoto(!showAllPhoto);
  }

  //Scroll
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {

    function handelToggleModal() {
      const imgGrid = document.querySelector('.image-grid');
      function handleScroll() {
        const scrollTop = document.querySelector('.image-grid').scrollTop
        if (scrollTop >= 100)
          setScrolled(true)
        else {
          setScrolled(false)
        }
      }
      if (imgGrid)
        imgGrid.addEventListener('scroll', handleScroll);

      return () => {
        imgGrid.removeEventListener('scroll', handleScroll);
      };
    }
    handelToggleModal();
  }, [showAllPhoto]);


  // Show image when click in album
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? allImage.length - 1 : prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === allImage.length - 1 ? 0 : prevIndex + 1;
    });
  };


  //Xử lý phân trang

  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  const PER_PAGE = 18;
  const offset = currentPage * PER_PAGE;
  const currentPageData = allImage.slice(offset, offset + PER_PAGE);

  // Xử lý phần Booking
  const [showSalonBooking, setShowSalonBooking] = useState(false);
  const [showAddService, setShowAddService] = useState(false)
  const [showMaryPatricia, setShowMaryPatricia] = useState(false)
  const [showBookingDetail ,setShowBookingDetail] = useState(false)
  const handleBookingClick = () => {
    setShowSalonBooking(true);
  }
  const handleCloseBookingPopup = () => {
    setShowSalonBooking(false);
    setShowAddService(false);
    setShowMaryPatricia(false);
    setShowBookingDetail(false)
  };
  const handleSubmitBookingPopup = () => {
    setShowSalonBooking(false);
    setShowAddService(true);
  };
  const handleNextServicePopup = () =>{
    setShowAddService(false);
    setShowMaryPatricia(true);
  }
  const handleBookingDetailPopup = () =>{
    setShowMaryPatricia(false);
    setShowBookingDetail(true)
  }
  const key = 'AIzaSyD3GG7Qq1XgRMAcjPejT9spgnR4RZ9xzbU';
  return (
    <div className='salon-container'>
      <div className="salon-detail-wrapper  mx-center section-wrap p-5rem">
        <div className="salon-detail">

          <div className='salon-detail-container '>
            <img alt='avatar-salon' className='avt-salon-detail ' src='avt1.svg' />

            <div className='block-detail'>
              <div className='flex-salon'>
                <h2 className="salon-name ">
                  LatherSalonaspen
                </h2>
                <div className='salon-detail__activity--time'><Time/></div>
              </div>
              <div className='btn-salon'>
                <img alt='salon-rating' className='salon-rating' src='rate.svg' />
                <div className='btn-salon-container'>

                  <button className="btn-salon-booking btn-w" onClick={handleBookingClick}>
                    Book Now
                  </button>
                  
                  {showSalonBooking && <div className="dimmed"></div>}
                  {showSalonBooking && <SalonBooking handleCloseBookingPopup={handleCloseBookingPopup}  handleSubmitBookingPopup={handleSubmitBookingPopup}/>}
                  {showAddService && <div className="dimmed"></div>}
                  {showAddService && <AddService handleCloseBookingPopup={handleCloseBookingPopup} handleNextServicePopup={handleNextServicePopup}/>}
                  {showMaryPatricia && <div className="dimmed"></div>}
                  {showMaryPatricia && <MaryPatricia handleCloseBookingPopup={handleCloseBookingPopup} handleBookingDetailPopup={handleBookingDetailPopup}/>}
                  {showBookingDetail && <div className="dimmed"></div>}
                  {showBookingDetail && <BookingDetail handleCloseBookingPopup={handleCloseBookingPopup} />}
                  <Link to="/writereview">
                    <button className="btn-salon-review btn-w">Write a Review</button>
                  </Link>
                  <button className="btn-salon__add-photo btn-w" onClick={handleAddPhotoClick}>+ Add Photo</button>
                  {showPopupAddPhoto && <div className="dimmed"></div>}
                  {showPopupAddPhoto && (
                    <div className="popup popup-flex">

                      <div className="popup-header">
                        <h2>Add Photo & Video</h2>
                        <svg onClick={handleClosePopupClick} className='popup-close-btn' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                      </div>

                      <div className="popup-content">
                        <div className='popup-content__browsefiles'>
                          {imageSrc ? (
                            <img src={imageSrc} className='popup-content__browsefiles-image' />
                          ) : (
                            <>
                              <div className='file-upload-container'>
                                <svg aria-hidden="true" data-prefix="fal" className="fa-cloud-upload" data-icon="cloud-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z" className=""></path></svg>
                                <p>Drag and Drop here</p>
                                <p>Or</p>
                                <label htmlFor="file-upload" className="custom-file-upload">
                                  Browse Files
                                  <input id="file-upload" type="file" name="photo" onChange={handleFileUpload} />
                                </label>
                              </div>
                            </>
                          )}
                        </div>

                        <div className='popup-content__tag pt-1rem'>
                          <input type="text" name="tag" placeholder="Tag" />
                        </div>
                        <div className='popup-content__description pt-1rem'>
                          <input type="text" name="description" placeholder="Write description" />
                        </div>
                      </div>
                      <button className='btn-submit__addphoto ' onClick={handleSubmit}>Submit</button>
                    </div>
                  )}
                  <button className="btn-salon__share btn__nocolor">
                    <svg aria-hidden="true" data-prefix="fal" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-share-alt icon-share"><path fill="currentColor" d="M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64" class=""></path></svg>
                    Share
                  </button>
                  <button className="btn-salon__save btn__nocolor">
                    <svg aria-hidden="true" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-heart icon-heart"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" class=""></path></svg>
                    Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SALON PICTURE */}
        <div className="salon-picture">
          <div class="salon-picture-container">
            <img src="imageDetail3.svg" alt="Image 1" />
            <img src="imageDetail1.svg" alt="Image 1" />
            <img src="imageDetail5.svg" alt="Image 1" />
            <img src="imageDetail5.svg" alt="Image 1" />
            <img src="imageDetail2.svg" alt="Image 2" />
            <img src="imageDetail5.svg" alt="Image 1" />
            <img src="imageDetail7.svg" alt="Image 1" />
            <img src="imageDetail7.svg" alt="Image 1" />
            <img src="imageDetail1.svg" alt="Image 1" />
          </div>
          <button className='btn-show-all-photo' onClick={togglePopup}>
            <svg aria-hidden="true" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-table"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z" class=""></path></svg>
            Show all Photo
          </button>
          {showAllPhoto && <div className="dimmed"></div>}
          {
            showAllPhoto && (
              <div className={scrolled ? "popup__show-all-image mx-center section-wrap top-0" : "popup__show-all-image mx-center section-wrap "}>

                <div className="show-all-image-header">
                  <h3>Show all Photos</h3>
                  <div className='btn-show-all-image-header'>
                    <button className="btn-salon__share btn__nocolor me-3">
                      <svg aria-hidden="true" data-prefix="fal" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-share-alt icon-share"><path fill="currentColor" d="M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64" class=""></path></svg>
                      Share
                    </button>
                    <button className="btn-salon__save btn__nocolor me-3">
                      <svg aria-hidden="true" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-heart icon-heart"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" class=""></path></svg>
                      Save
                    </button >
                    <button className="btn-salon__sort btn__nocolor">
                      Sort by: All
                    </button>
                  </div>
                  <svg onClick={handleClosePopupClick} className='close__show-all-photo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                </div>

                <div className="image-grid">
                  {currentPageData.map((image, index) => (
                    <img
                      className="image__show-all"
                      key={image.id}
                      src={image.url}
                      alt="Image"
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>
                <ReactPaginate
                  previousLabel={'<'}
                  nextLabel={'>'}
                  pageCount={Math.ceil(allImage.length / PER_PAGE)}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  previousLinkClassName={'pagination__link'}
                  nextLinkClassName={'pagination__link'}
                  disabledClassName={'pagination__link--disabled'}
                  activeClassName={'pagination__link--active'}
                />

                {selectedImageIndex !== null && <div className="dimmed"></div>}
                {selectedImageIndex !== null && (


                  <div className="selected-image">
                    <div className="selected-image__header">
                      <h3>20/40</h3>
                      <div className='btn-salon-wrapper'>
                        <button className="btn-salon__share btn__nocolor">
                          <svg aria-hidden="true" data-prefix="fal" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-share-alt icon-share"><path fill="currentColor" d="M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64" class=""></path></svg>
                          Share
                        </button>
                        <button className="btn-salon__save btn__nocolor">
                          <svg aria-hidden="true" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-heart icon-heart"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" class=""></path></svg>
                          Save
                        </button >
                      </div>
                      <svg onClick={() => setSelectedImageIndex(null)} className='close__show-all-photo' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>

                    </div>
                    <svg onClick={handleNextClick} aria-hidden="true" data-prefix="fal" data-icon="arrow-circle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-arrow-circle-right arrow-cirle "><path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm12.5 92.5l115.1 115c4.7 4.7 4.7 12.3 0 17l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-6.9-6.9c-4.7-4.7-4.7-12.5.2-17.1l85.6-82.5H140c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12h190.3l-85.6-82.5c-4.8-4.7-4.9-12.4-.2-17.1l6.9-6.9c4.8-4.7 12.4-4.7 17.1 0z" class=""></path></svg>
                    <svg onClick={handlePrevClick} aria-hidden="true" data-prefix="fal" data-icon="arrow-circle-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-arrow-circle-left arrow-cirle"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zM256 472c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm-12.5-92.5l-115.1-115c-4.7-4.7-4.7-12.3 0-17l115.1-115c4.7-4.7 12.3-4.7 17 0l6.9 6.9c4.7 4.7 4.7 12.5-.2 17.1L181.7 239H372c6.6 0 12 5.4 12 12v10c0 6.6-5.4 12-12 12H181.7l85.6 82.5c4.8 4.7 4.9 12.4.2 17.1l-6.9 6.9c-4.8 4.7-12.4 4.7-17.1 0z" class=""></path></svg>
                    <img
                      className="popup__image"
                      src={allImage[selectedImageIndex].url}
                      alt="Selected Image"
                    />
                    <div className="customer-complain">
                      <div className="customer-complain-header">
                        <img src="reviewAvatar1.svg" alt="" />
                        <div className='customer-detail'>
                          <h2>Johan Martin</h2>
                          <img src="ratingStar.svg" alt="" />
                          <p>1/1/2023</p>
                        </div>
                        <div className='btn-user'>
                          <button className="btn-salon__save btn__nocolor">
                            <svg aria-hidden="true" data-prefix="fal" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="fa-heart icon-heart"><path fill="currentColor" d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z" class=""></path></svg>
                            Like
                          </button >
                          <button className="btn-salon__share btn__nocolor">
                            <svg aria-hidden="true" data-prefix="fal" data-icon="share-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="fa-share-alt icon-share"><path fill="currentColor" d="M448 416c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-12.965 2.576-25.327 7.235-36.61l-95.45-59.657C150.199 339.525 124.558 352 96 352c-53.019 0-96-42.981-96-96s42.981-96 96-96c28.558 0 54.199 12.475 71.784 32.267l95.45-59.657C258.576 121.327 256 108.965 256 96c0-53.019 42.981-96 96-96s96 42.981 96 96-42.981 96-96 96c-28.558 0-54.199-12.475-71.784-32.267l-95.451 59.656c9.661 23.396 9.641 49.87 0 73.22l95.451 59.656C297.801 332.475 323.442 320 352 320c53.019 0 96 42.981 96 96zM352 32c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64M96 192c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64m256 160c-35.29 0-64 28.71-64 64s28.71 64 64 64 64-28.71 64-64-28.71-64-64-64" class=""></path></svg>
                            Share
                          </button>
                        </div>
                      </div>
                      <div className="customer-complain-content">
                        <p>The Pacific Grove Chamber of Commerce ould like to thank eLab Communications and Mr. Will Elkadi for all
                          the efforts.</p>
                        <div className="tag-container">
                          <button className='tag' >Tags 1</button>
                          <button className='tag'>Tags 2</button>
                          <button className='tag'>Tags 3</button>
                          <button className='tag'>Tags 5</button>
                        </div>
                      </div>

                    </div>
                  </div>

                )}
              </div>
            )
          }
        </div>
      </div>

      <div className=' section-wrap mx-center salon-ctn-bg'>
        <h1 className='title-service-salon'>Services</h1>
        <div className='salon-container-bottom'>
          {/* COLUMN LEFT */}
          <div className="salon-service flex-2">
            {imageDetail[0].slice(0, showAll ? imageDetail[0].length : 6).map((item) => (
              <div key={item.key} className="image-item">
                <LazyLoad height={100}>
                  <img src={item.src} alt={item.altText} />
                </LazyLoad>
                <div className='image-item__content'>
                  <div className='content-top'>
                    <p>{item.title}</p>
                    <img src="image123.svg" alt="" />
                  </div>
                  <div className="text">{item.text}</div>
                  <div className='content-bottom'>
                    <img src={item.rate} alt="Rating service salon" />
                    <button className='btn-quick-book'>Quick book</button>
                  </div>
                </div>
              </div>
            ))}

          </div>
          {/* COLUMN RIGHT */}
          <div className="salon-booking flex-1">
            <div className='salon-booking-wrapper'>
              <h1 className='title-booking'>Location & Hours</h1>

              {/* <img className='map-booking' src="map.svg" alt="" /> */}
              <div className="map-booking">
              <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `247px` }} />}
            containerElement={<div className='containermap' />}
            mapElement={<div style={{ height: `247px` }} />}
          />
              </div>

              <div className="salon-booking__content1">
                <img src="icon-salon-direction.svg" alt="" />
                <p>7400 Hazard Ave Westminster, CA 92683</p>
                <button>Direction</button>
              </div>
              <div className="salon-booking__content2">
                <img src="icon-salon-call.svg" alt="" />
                <p>613-555-0184</p>
                <button>Call</button>
              </div>

              <div className="booking-price">
                <p className='price-title'>Price: </p>
                <p className='price'>149$</p>
              </div>

              <div className="booking-activity-time">
                <Time/>
              </div>

              <p className="booking-website">
                www.lathersalonaspen.com.au
              </p>

              <div className="booking-social">
                <p>Social media</p>
                <img src="icon-social-fb.svg" alt="" />
                <img src="icon-social-ig.svg" alt="" />
                <img src="icon-social-tw.svg" alt="" />
              </div>
              <Link to ="/">
              <button className='btn-booking-now'>Book Now</button>
              </Link>
            </div>
          </div>

        </div>
        {!showAll && (
          <p className='btn-showall' onClick={() => setShowAll(true)}>ViewAll ➝</p>
        )}
      </div>
    </div>
  )
}

