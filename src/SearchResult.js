import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './SearchResult.css';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import Time from './Time';
import { Link } from 'react-router-dom';
export default function SearchResult() {
    const location = useLocation();
    const results = location.state.results;
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 5;
    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
    const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);
    const pageNumbers = Math.ceil(results.length / resultsPerPage);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    
    //const key = 'AIzaSyD3GG7Qq1XgRMAcjPejT9spgnR4RZ9xzbU';
    const [markers, setMarkers] = useState([]);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyD3GG7Qq1XgRMAcjPejT9spgnR4RZ9xzbU',
      });
    
    useEffect(() => {
        const newMarkers = results.map((result) => ({
            id: result.id,
            position: { lat: result.latitude, lng: result.longitude },
        }));
        setMarkers(newMarkers);
    }, [results]);
   
    const GoogleMapWrapper = () => {
        const firstMarker = markers[0];
        const defaultCenter = firstMarker ? firstMarker.position : { lat: 10.800690024582897, lng: 106.46248397676052 };
    
        return isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ height: '1006px', width: '100%' }}
            zoom={10}
            center={defaultCenter}
          >
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                icon={{
                  url: 'Maker-map.svg',
                  scaledSize: new window.google.maps.Size(24, 40),
                }}
              />
            ))}
          </GoogleMap>
        ) : null;
      };
    return (
        <div className='mx-center section-wrap pt-5 '>
            <h3 className='salon-number'>Over {results.length} salons</h3>
            <div className='result__container--flex'>
                <div className='result__col--left'>
                    {currentResults.map(result => (
                        
                        <div key={result.id} className='result__container'  >

                            <img className="result_image" src={result.thumbnail} />
                            <div className='result__container--child'>
                                <div className='result__container--header'>
                                    <img className='result_profile_image' src={result.avatarimg} />
                                    <Link to = '/salondetail'  className='result_salonname--a'>
                                        <h2 className='result_salonname'>{result.name}</h2>
                                    </Link>
                                </div>
                                <div className='result__container--activity'>
                                    <img alt='' className='salon-rating' src='rate.svg' />
                                    <div className='time-activity-result'><Time /></div>
                                </div>
                                <p className='result_location'>{result.address}</p>
                                <p className='result_content m-0'>Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
                                <Link to = '/salondetail'>
                                <button className='result__btn--book_now'>Book Now</button>
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='result__col--right'>
                    <div className="map-search">
                        <GoogleMapWrapper
                        
                        />
                    </div>
                </div>

            </div>
            <div className='panigation-container'>
                <button className='btn-panigation' disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                    &lt;
                </button>
                {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={pageNumber === currentPage ? 'panigations-active' : 'number-panigations'}
                    >
                        {pageNumber}
                    </button>
                ))}
                <button className='btn-panigation' disabled={currentPage === pageNumbers} onClick={() => handlePageChange(currentPage + 1)}>
                    &gt;
                </button>
            </div>
        </div>
    )
        ;
}
