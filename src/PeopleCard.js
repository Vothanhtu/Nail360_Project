import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, CardSubtitle, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

//Login page import
import LoginPage from './LoginPage';
import './LoginPage.css';
import { Link } from 'react-router-dom';

export default class PeopleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showLogin: false,
      isCardClicked: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);

  }
  toggleModal() {
    this.setState({ showModal: !this.state.showModal });

  }
  toggleLogin() {
    this.setState({ showLogin: !this.state.showLogin });
    this.setState({ showModal: !this.state.showModal });
  }
  closePopup = () => {
    this.setState({ showLogin: false });
    this.props.componentUpdate();

  };
  toggleCardClicked = () => {
    this.setState(prevState => ({
      isCardClicked: !prevState.isCardClicked
    }));
    setTimeout(() => {
      this.setState({ isCardClicked: false });
    }, 1000);
  }

  render() {
    const { showLogin } = this.state;
    return (
      <div>
        <Row>
          <Col>
            <Card onClick={this.toggleCardClicked} className={this.state.isCardClicked ? 'card-clicked' : ''} >
              <FaHeart className='heart-icon' onClick={this.toggleModal} />
              <LazyLoad height={200}>
                <img className='people-image' alt="Thumbnail" src={this.props.person.thumbnail} ></img>
              </LazyLoad>
              <CardBody >
                <div className='container-cardbody'>
                  <LazyLoad height={50}>
                    <img className='people-avatar' alt="avatar-salon" src={this.props.person.avatarimg} />
                  </LazyLoad>
                  <div className='avt-title'>
                    <CardTitle tag="h5">{this.props.person.name}</CardTitle>
                    <img className='rate-image' alt="Sample" src={this.props.person.rate} />
                  </div>
                </div>
                <CardText className='card-text-justify fs-14px mt-1 mb-1'>
                  Lorem Ipsum is simply dummy text of the printing  typesetting industry.
                </CardText>
                <div className="btn-container__subtitle">
                  <h6 className="card-subtitle mb-2 text-muted">5 miles drive</h6>
                  <Link to="/salondetail">
                    <button className="people-card-btn">Book now</button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Thông báo</ModalHeader>
          <ModalBody>
            Bạn cần đăng nhập để tiếp tục
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleLogin} style={{ backgroundColor: '#D3427A' }}>Đăng nhập</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Hủy</Button>
          </ModalFooter>
        </Modal>
        {showLogin && <LoginPage closePopup={this.closePopup} />}
      </div>
    );
  }
}
