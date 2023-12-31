import React, { useState, useEffect} from 'react'
import {Row, Col} from 'reactstrap'
import PeopleCard from './PeopleCard'
import './PeopleCard.css';
import Navigation from './Navigation';
import SearchResult from './SearchResult';
export default function MainArea(props){
  const [showAll, setShowAll]= useState(false)
  // const [people, setPeople] = useState([
  //   {
  //     avatar: "avt1.svg",
  //     rate: "rate.svg",
  //     title: "Lathersalonaspen",
  //     description: "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card1.svg"
  //   },
  //   {
  //     avatar: "avt2.svg",
  //     rate: "rate.svg",
  //     title : "Warren Tricomi",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card2.svg"
  //   },
  //   {
  //     avatar: "avt3.svg",
  //     rate: "rate.svg",
  //     title : "Hawai'i",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card3.svg"
  //   },
  //   {
  //     avatar: "avt4.svg",
  //     rate: "rate.svg",
  //     title : "Ceron Hair Studio",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card4.svg"
  //   },
  //   {
  //     avatar: "avt4.svg",
  //     rate: "rate.svg",
  //     title : "Ceron Hair Studio",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card4.svg"
  //   },
  //   {
  //     avatar: "avt4.svg",
  //     rate: "rate.svg",
  //     title : "Hihi Studio",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card5.svg"
  //   },
  //   {
  //     avatar: "avt4.svg",
  //     rate: "rate.svg",
  //     title : "Mina Hair Studio",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card6.svg"
  //   },
  //   {
  //     avatar: "avt4.svg",
  //     rate: "rate.svg",
  //     title : "New York Hair Studio",
  //     description : "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
  //     image: "Card7.svg"
  //   }
  // ]);
  // Xử lý phần search
  const componentUpdate = () => {
    props.componentUpdate();
  }
  let peopleCards = props.data.slice(0, showAll ? props.data.length : 12).map((person, index) => (
    <Col xs="12" sm="6" lg="4" xl="3" key={index}>
      <PeopleCard person={person} componentUpdate={componentUpdate} />
    </Col>
  ));
    return (
      <div className='section-wrap px-2rem px-sm-3rem px-md-5rem mx-center'>
        <h1 className='title-1'>Top Rated Salons in <span className='usa-color'>USA</span></h1>
        <Row>
        {peopleCards}
        </Row>
        <div className=' title-small'>
        {!showAll && (
          <p className='title-small' onClick={() => setShowAll(true)}>View all ➞</p>
        )}
        </div>
      </div>

    )
}
