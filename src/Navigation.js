
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaUser, FaRegQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineMenu } from "react-icons/ai";
import './Navigation.css';
import LoginPage from './LoginPage';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
function Navigation(props) {

  const [showMenu, setShowMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Login
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
    setShowMenu(!showMenu);
  };
  const togglePopup = () => {
    setShowLogin(!showLogin);

  };
  const closePopup = () => {
    setShowLogin(!showLogin);
    props.componentUpdate();
  }

  // Show menu when clicked avatar
  const handleAvatarClick = () => {
    setShowMenu(!showMenu);
  }


  /* MOBILE  */

  const [isMobile, setIsMobile] = useState(window.innerWidth < 567);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 567);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // FORM SEARCH 
  // Unplash API G_ipJtws_-4P5E6A6OIRxNza259aSkz2TNbxDtJBriE
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const formRef = useRef(null);
  const navigate = useNavigate();
  // Handle Change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    const results = props.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };
  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') {
      console.log('Không tìm thấy');
      navigate('*', { state: {  } });
      return;
    }
      const results = props.data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()|| item.name.toLowerCase().startsWith(searchTerm.toLowerCase()))
       );
       console.log(searchTerm);
       console.log(results);
       navigate('/search-result', { state: { results } });
       setSearchResults([]);   
  }
  // Handle Search Click
  const handleSearchClick = () => {
    const results = props.data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    navigate('/search-result', { state: { results } });
    setSearchResults([]);
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="navbar navbar-column section-wrap mx-center navbar-menu navbar-flex margin-mobile ">
      {/* Logo */}
      <Link to="/" >
        <img className="p-xs-20px" src="Group.svg" alt="Nail 360 logo"></img>
      </Link>
     
        <form className='form-search form-search__mobile' onSubmit={handleSubmit} ref={formRef} >
          <input
            className='search-input search-input__mobile'
            type='text'
            placeholder='Search by name | Address city state or zip'
            value={searchTerm}
            onChange={  e => handleSearchChange(e) }
            
          />
          <div className='circle-icon circle-icon__mobile'>
            <FaSearch className='search-icon search-icon__mobile' onClick={handleSearchClick} />
          </div>
          {searchResults.length > 0 && (
            <div className='result-container'>
              <div className='result-container__child'>
                {searchResults.map((result) => (
                  <ul className='ul-result'>
                    <li key={result.id} onClick={handleSearchClick}>
                      {result.name}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          )}
        </form>


      {/* MOBILE */}
      {
        isMobile && (
          <div className='menu-mobile'>
            <div onClick={toggleMenu} className='mobile-btn-menu' >
              <AiOutlineMenu></AiOutlineMenu>
            </div>

          </div>
        )
      }
      {
        isMenuOpen ? (
          <div className='nav-link-mobile nav-mobile'>
            <div onClick={toggleMenu} className='mobile-btn-menu btn-menu-right'>X</div>
            <div className='btn-mobile'>

              <button className=" btn-1 button-businesses">For Businesses</button>

              <button onClick={handleLoginClick} className="btn-1  button-login">Login</button>

              <button className=" btn-1 button-signup">Sign Up</button>
            </div>


          </div>
        )
          : null
      }
      {/* Avatar */}
      <div className='nav-link nav-header'>

        {
          props.isLogin ?
            <div className='nav-login position-relative'>
              <Link to="/search">
                <button className="button-businesses">For Businesses</button>
              </Link>

              <div className='icon-wrapper p-0'>
                <svg aria-hidden="true" data-prefix="far" class="svg-inline--fa fa-comment-lines fa-message fa-w-16 fa-7x" data-icon="comment-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" ><path fill="currentColor" d="M368 168H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zm-96 96H144c-8.8 0-16 7.2-16 16v16c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-16c0-8.8-7.2-16-16-16zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z" class=""></path></svg>
                <svg aria-hidden="true" data-prefix="far" class="svg-inline--fa fa-bell fa-w-14 fa-7x fa-notification" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" ><path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z" class=""></path></svg>
              </div>
              <img className='avatar-user' src='./avatarUser.svg' onClick={handleAvatarClick} />
              {
                showMenu && (
                  <div className='menu-avatar p-3'>
                    <ul className='menu-list p-0 m-0'>
                      <li className='menu-list-item about-me-item' > <FaUser />   About Me</li>
                      <li className='menu-list-item help-item'> <FaRegQuestionCircle />   Help</li>
                      <li className='menu-list-item' onClick={props.handleLogout}> <FaSignOutAlt />   Logout</li>
                    </ul>
                  </div>
                )
              }
            </div>
            :
            <div className='nav-btn__flex'>
              <button className="button-businesses">For Businesses</button>
              <button onClick={togglePopup} className="button-login">Login</button>
              <button className="button-signup">Sign Up</button>
            </div>
        }

      </div>
      {showLogin && <div className="dimmed"></div>}
      {showLogin && <LoginPage
        // getTokenNav={ getTokenFromNav }

        closePopup={closePopup} />}

    </div>
  );
}

// && <div className="dimmed"></div>

export default Navigation;