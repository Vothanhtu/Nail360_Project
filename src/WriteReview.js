import React, { useState, useEffect } from 'react';
import './WriteReview.css';
import { Link } from 'react-router-dom';
import Time from './Time.js'
import { FaRegStar, FaStar } from 'react-icons/fa';
export default function WriteReview() {
    const newestReview = [
        {
            reviewAvatar: 'reviewAvatar1.svg',
            reviewName: 'Charlotte Martin',
            ratingStar: 'ratingStar.svg',
            reviewHeadline: "Lorem Ipsum is simply dummy text of the printing",
            reviewDay: "1 day ago",
            reviewText: "The Pacific Grove Chamber of Commerce ould like to thank eLab Communications and Mr. Will Elkadi for all the efforts.",
            reviewLike: "reviewLike.svg"
        },
        {
            reviewAvatar: 'reviewAvatar2.svg',
            reviewName: 'Amelia Martin',
            ratingStar: 'ratingStar.svg',
            reviewHeadline: "Lorem Ipsum is simply dummy text of the printing",
            reviewDay: "2 day ago",
            reviewText: "The Pacific Grove Chamber of Commerce ould like to thank eLab Communications and Mr. Will Elkadi for all the efforts.",
            reviewLike: "reviewLike.svg"
        },
        {
            reviewAvatar: 'reviewAvatar1.svg',
            reviewName: 'Johan Martin',
            ratingStar: 'ratingStar.svg',
            reviewHeadline: "Lorem Ipsum is simply dummy text of the printing",
            reviewDay: "3 day ago",
            reviewText: "The Pacific Grove Chamber of Commerce ould like to thank eLab Communications and Mr. Will Elkadi for all the efforts.",
            reviewLike: "reviewLike.svg"
        },
        {
            reviewAvatar: 'reviewAvatar2.svg',
            reviewName: 'Olivia Emma',
            ratingStar: 'ratingStar.svg',
            reviewHeadline: "Lorem Ipsum is simply dummy text of the printing",
            reviewDay: "4 day ago",
            reviewText: "The Pacific Grove Chamber of Commerce ould like to thank eLab Communications and Mr. Will Elkadi for all the efforts.",
            reviewLike: "reviewLike.svg"
        }
    ]
    const [images, setImages] = useState(Array.from({ length: 5 }, () => null));

    const handleImageChange = (event, index) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]);
        setImages(newImages);
    };

    const handleDeleteImage = (index) => {
        const newImages = [...images];
        newImages[index] = null;
        setImages(newImages);
    };


    //Tạo ngôi sao
    const [isStarClick, setIsStarClick] = useState([false, false, false, false, false]);

    const handleStarClick = (index) => {
        const newStarStates = [...isStarClick];
        newStarStates[index] = !newStarStates[index];
        setIsStarClick(newStarStates);
    }

    // Set state cho đóng mở cửa
    const [isOpen, setIsOpen] = useState(false);
    const startTime = 6;
    const endTime = 22;

    useEffect(() => {
        const now = new Date();
        const currentHour = now.getHours();

        if (currentHour >= startTime && currentHour <= endTime) {
        setIsOpen(true);
        } else{
        setIsOpen(false);
        }
    }, []);
    return (
        <div className="review-container mx-center section-wrap p-5rem">
            <div className="review-container__header">
                <img alt='avatar-salon' className='avt-salon-detail ' src='avt1.svg' />
                <div className='block-detail'>
                    <div className='flex-salon'>
                        <h2 className="salon-name flex-salon ">
                            LatherSalonaspen
                        </h2>
                        <p className="activity-time">
                            <Time/>
                        </p>
                    </div>
                    <div className='btn-salon'>
                        <img alt='salon-rating' className='salon-rating' src='rate.svg' />
                        <div className='btn-salon-container'>
                            <button className="btn-salon-booking btn-w">
                                Book Now
                            </button>
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

            <div className="review-container__content">
                <div className="form-review-wrapper ">
                    <div className='form-review form-review-flex'>
                        <label for="rating" class="rw-rating font-title">
                            Select Your Rate
                        </label>
                        <div className='pt-1rem'>
                            {isStarClick.map((star, index) =>
                                star ? (

                                    <FaRegStar className='color-star-before' onClick={() => handleStarClick(index)}></FaRegStar>

                                ) :
                                    (

                                        <FaStar className='color-star-after' onClick={() => handleStarClick(index)}></FaStar>

                                    )
                            )}
                        </div>

                        <label for="addheadline" class="rw-addheadline font-title pt-1rem pb-1rem">
                            Add a Headline
                        </label>
                        <input id='addheadline' className='ip-addheadline ps-4' type="text" placeholder="What's most important to know?" />

                        <label for="writereview" class="rw-writereview font-title pt-1rem pb-1rem">
                            Add a Writen Review
                        </label>
                        <input id='writereview' className='ip-writereview ps-4' type="text" placeholder="What did you like or dislike about service/ products?" />

                        <label for="addtech" class="rw-addtech font-title pt-1rem pb-1rem">
                            + Add Techs/ Services for Reviews
                        </label>
                        <input id='addtech' className='ip-addtech ps-4' type="text" placeholder="" />

                        <div className='image-upload-container'>
                            {images.map((selectedImage, index) => (
                                <div key={index}>
                                    {selectedImage ? (
                                        <div className='rw-image-container'>
                                            <img src={selectedImage} alt="Selected Image" className='rw-image__render' />
                                            <p className='rw-close-image' onClick={() => handleDeleteImage(index)}>x</p>
                                        </div>
                                    ) : (
                                        <label htmlFor={`imageUpload${index}`} className='lb-image-upload'>
                                            <input id={`imageUpload${index}`} type="file" accept="image/*" onChange={(event) => handleImageChange(event, index)} style={{ display: 'none' }} />
                                            <div className="uploadPhoto uploadPhoto-flex">
                                                <svg aria-hidden="true" data-prefix="fal" class="rw-fa-cloud-upload" data-icon="cloud-upload" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" ><path fill="currentColor" d="M312.5 168.5c-4.7-4.7-12.3-4.7-17 0l-98.3 98.3c-4.7 4.7-4.7 12.3 0 17l5.7 5.7c4.7 4.7 12.3 4.7 17 0l68.2-68.2V372c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12V221.3l68.2 68.2c4.7 4.7 12.3 4.7 17 0l5.7-5.7c4.7-4.7 4.7-12.3 0-17l-98.5-98.3zm259.2 70.3c2.8-9.9 4.3-20.2 4.3-30.8 0-61.9-50.1-112-112-112-16.7 0-32.9 3.6-48 10.8-31.6-45-84.3-74.8-144-74.8-94.4 0-171.7 74.5-175.8 168.2C39.2 220.2 0 274.3 0 336c0 79.6 64.4 144 144 144h368c70.7 0 128-57.2 128-128 0-47-25.8-90.8-68.3-113.2zM512 448H144c-61.9 0-112-50.1-112-112 0-56.8 42.2-103.7 97-111-.7-5.6-1-11.3-1-17 0-79.5 64.5-144 144-144 60.3 0 111.9 37 133.4 89.6C420 137.9 440.8 128 464 128c44.2 0 80 35.8 80 80 0 18.5-6.3 35.6-16.9 49.2C573 264.4 608 304.1 608 352c0 53-43 96-96 96z" class=""></path></svg>
                                                <p>Upload Photo/Videos</p>
                                            </div>
                                        </label>
                                    )}
                                </div>
                            ))}
                        </div>
                        <button className='btn-post-review mt-4'> Post Review</button>
                    </div>
                </div>

                <div className="list-review">
                    <div className="newreview-header flex-row jc-space-between">
                        <h1 className="review-title">Newest Review</h1>
                        <Link to='/listreview' className='no-underline'>
                        <p>View All ➝ </p>
                        </Link>
                    </div>
                    <div className="newreview-list">
                        {
                            newestReview.map((item, index) => (
                                <div key={index} className='review-item-container p-2 flex-col'>
                                    <div className="review-item-header flex-row">
                                        <img className='avt-review' src={item.reviewAvatar} alt="Avatar User Review" />
                                        <div className="content-header flex-col">
                                            <div className="content-header-top flex-row jc-space-between">
                                                <h2>{item.reviewName}</h2>
                                                <p>{item.reviewDay}</p>
                                            </div>
                                            <div className="content-header-bottom flex-row jc-space-between">
                                                <img src={item.ratingStar} alt="" />
                                                <img src={item.reviewLike} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-body flex-col">
                                        <h2>{item.reviewHeadline}</h2>
                                        <p>{item.reviewText}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    
        </div>
    )
}
