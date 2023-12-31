import React, { useState } from 'react';
import './AddService.css';
export default function AddService({handleCloseBookingPopup,handleNextServicePopup}) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showNailExtension, setShowNailExtension] = useState(false);
    const [showNailArt, setShowNailArt] = useState(false);
    const [showManicure, setShowManicure] = useState(false);
    const options = [
        {
            name_service: "Service 1",
            id: "1",
            detail: "Detail",
            time_service: "30 Min",
            price_service: "$150"
        },
        {
            name_service: "Service 2",
            id: "2",
            detail: "Detail",
            time_service: "30 Min",
            price_service: "$150"
        },
        {
            name_service: "Service 3",
            id: "3",
            detail: "Detail",
            time_service: "30 Min",
            price_service: "$150"
        },
        {
            name_service: "Service 4",
            id: "4",
            detail: "Detail",
            time_service: "30 Min",
            price_service: "$150"
        },
    ];
    return (
                <div className='add-service__container '>
                    <div className='add-service--header'>
                        <div></div>
                        <h1 className='add-service__container--tilte '>Add Services</h1>
                        <svg onClick={handleCloseBookingPopup} className='close-popup__add-service' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                    <div className="add-service__container--header overflow">
                        <div className="nail-extension">
                            <div className='nail-extension__header--flex'>
                                <h3 className='name-service'>Nail Extension</h3>
                                <button className='btn__drop-down' onClick={() => setShowNailExtension(!showNailExtension)}>
                                    <h3>Start at</h3> <svg aria-hidden="true" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-up fa-w-10 fa-7x"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" class=""></path></svg>
                                </button>
                            </div>
                            {showNailExtension && (
                                <div className="nail-extension__options">
                                    {
                                        options.map((option) => (
                                            <div key={option.id} className="nail-extension__options--child">
                                                <div className='options__child--flex'>
                                                    <input
                                                        type="checkbox"
                                                        id={option.id}
                                                        name={option.name}
                                                    //checked={option.id === selectedOption}
                                                    //onChange={(event) => setSelectedOption(event.target.value)}
                                                    //disabled={option.id !== selectedOption}
                                                    />
                                                    <div className='option__flex--container'>
                                                        <div className='option__flex--top'>
                                                            <label htmlFor={option.id}>{option.name_service}</label>
                                                            <h3>{option.price_service}</h3>
                                                        </div>
                                                        <div className='option__flex--bottom'>
                                                            <h3>{option.detail}</h3>
                                                            <p>{option.time_service}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='line-height--bottom' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div className="nail-extension">
                            <div className='nail-extension__header--flex'>
                                <h3 className='name-service'>Nail Extension</h3>
                                <button className='btn__drop-down' onClick={() => setShowNailArt(!showNailArt)}>
                                    <h3>Start at</h3> <svg aria-hidden="true" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-up fa-w-10 fa-7x"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" class=""></path></svg>
                                </button>
                            </div>
                            {showNailArt && (
                                <div className="nail-extension__options">
                                    {
                                        options.map((option) => (
                                            <div key={option.id} className="nail-extension__options--child">
                                                <div className='options__child--flex'>
                                                    <input
                                                        type="checkbox"
                                                        id={option.id}
                                                        name={option.name}
                                                    //checked={option.id === selectedOption}
                                                    //onChange={(event) => setSelectedOption(event.target.value)}
                                                    //disabled={option.id !== selectedOption}
                                                    />
                                                    <div className='option__flex--container'>
                                                        <div className='option__flex--top'>
                                                            <label htmlFor={option.id}>{option.name_service}</label>
                                                            <h3>{option.price_service}</h3>
                                                        </div>
                                                        <div className='option__flex--bottom'>
                                                            <h3>{option.detail}</h3>
                                                            <p>{option.time_service}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='line-height--bottom' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                        <div className="nail-extension">
                            <div className='nail-extension__header--flex'>
                                <h3 className='name-service'>Nail Extension</h3>
                                <button className='btn__drop-down' onClick={() => setShowManicure(!showManicure)}>
                                    <h3>Start at</h3> <svg aria-hidden="true" data-prefix="fas" data-icon="caret-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-caret-up fa-w-10 fa-7x"><path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z" class=""></path></svg>
                                </button>
                            </div>
                            {showManicure && (
                                <div className="nail-extension__options">
                                    {
                                        options.map((option) => (
                                            <div key={option.id} className="nail-extension__options--child">
                                                <div className='options__child--flex'>
                                                    <input
                                                        type="checkbox"
                                                        id={option.id}
                                                        name={option.name}
                                                    //checked={option.id === selectedOption}
                                                    //onChange={(event) => setSelectedOption(event.target.value)}
                                                    //disabled={option.id !== selectedOption}
                                                    />
                                                    <div className='option__flex--container'>
                                                        <div className='option__flex--top'>
                                                            <label htmlFor={option.id}>{option.name_service}</label>
                                                            <h3>{option.price_service}</h3>
                                                        </div>
                                                        <div className='option__flex--bottom'>
                                                            <h3>{option.detail}</h3>
                                                            <p>{option.time_service}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className='line-height--bottom' />
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                    <button onClick={handleNextServicePopup} className='btn-next'>Next</button>
                </div>
    )
}
