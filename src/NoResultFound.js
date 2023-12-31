import React from 'react'
import './NoResultFound.css'
import { Link } from 'react-router-dom'
export default function NoResultFound() {
  return (
    <div className=' mx-center section-wrap no-result__container '>
      <div className='display-flex w-500'>
            <img className='no-result__image' src="no_result_found.svg" alt="" />
            <h1 className='no_result__title'>No Result Found</h1>
            <p className='no_result__content'>We've reached more than 10,000 salons</p>
            <p className='no_result__content'>We did not find any salon for your search.</p>
            <Link to = '/'>
            <button className='btn__search-again'>Search Again</button>
            </Link>
      </div>
    </div>
  )
}
