import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, RouterProvider, BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import SearchResult from './SearchResult';
import HomePage from './HomePage';
import SalonDetail from './SalonDetail';
import WriteReview from './WriteReview';
import ListReview from './ListReview';
import Nail360api from './Nail360api';
import NoResultFound from './NoResultFound';
import data from './data.json' 
const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [tokenLogin, setTokenLogin] = useState(undefined);
  useEffect(() => {
    const tokenValue = localStorage.getItem('token');
    if (tokenValue) {

      let decodeToken = atob(tokenValue);
      let parseToken = JSON.parse(decodeToken);
    }
    //const tokenValue =  tokenLogin
    if (tokenValue) {
      setIsLogin(!isLogin);
    }
  }, []);
  // function getToken(token){
  //   setToken(token);
  // }
  // function setToken(token){
  //   setTokenLogin(token.token);
  //   componentUpdate();
  // }
  function componentUpdate() {
    // const tokenValue =  tokenLogin
    const tokenValue = localStorage.getItem('token');
    if (tokenValue) {
      setIsLogin(!isLogin);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setIsLogin(false);
  }

  //Search
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //   <Route path="/" element={<HomePage handleLogout={handleLogout} componentUpdate={componentUpdate} isLogin={isLogin} />}>
  //   <Route path="/search" element={<SearchResult />} />
  //     {/* ... etc. */}
  //   </Route>
  //   )
  //   );

  const currentURL = window.location.pathname;
  console.log(currentURL)
  return (
    <>

<Router>
<div className="header App">
        <Navigation componentUpdate={componentUpdate}
          // getTokenFromApp={getToken} 
          handleLogout={handleLogout}
          isLogin={isLogin} 
          data = {data}
/>
 </div>



      <Routes>
        <Route path="/" element={<HomePage handleLogout={handleLogout} componentUpdate={componentUpdate} isLogin={isLogin} />} />
        <Route path="/search-result"  element={<SearchResult />} />
        <Route path="/nail"  element={<Nail360api />} />
        <Route path="/salondetail" element={<SalonDetail />} />
        <Route path="/writereview" element={<WriteReview/>} />
        <Route path="/listreview" element={<ListReview/>} />
        <Route path="*" element={<NoResultFound/>} />
      </Routes>

    
      <Footer />
      </Router>
    </>
  );
}
export default App;
