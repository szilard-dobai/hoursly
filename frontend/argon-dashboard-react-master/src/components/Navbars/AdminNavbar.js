/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

class AdminNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      imgComp: (sessionStorage.getItem('picture') === 'null' || sessionStorage.getItem('picture') === null || sessionStorage.getItem('picture') === '') ? (
        <img
          alt="..."
          className="rounded-circle"
          src={require('../../assets/img/generic_profile_picture.jpeg')}
        />
      ) : (<img
        alt="..."
        className="rounded-circle"
        src={`data:image/jpeg;base64,${sessionStorage.getItem('picture')}`}
      />)
    }
  }

  render() {
    return (
      <>
        <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
          <Container fluid>
            <Link
              className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
              to={this.props.location.pathname}
            >
              {this.props.brandText}
            </Link>
            <Nav className="align-items-center d-none d-md-flex" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle className="pr-0" nav>
                  <Media className="align-items-center">
                    <span className="avatar avatar-sm rounded-circle">
                      {this.state.imgComp}
                    </span>
                    <Media className="ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm font-weight-bold">
                        {sessionStorage.getItem('first_name')[0].toUpperCase() + sessionStorage.getItem('first_name').slice(1)}
                        {' '}
                        {sessionStorage.getItem('last_name')[0].toUpperCase() + sessionStorage.getItem('last_name').slice(1)}
                      </span>
                    </Media>
                  </Media>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-arrow" right>
                  <DropdownItem className="noti-title" header tag="div">
                    <h6 className="text-overflow m-0">Welcome!</h6>
                  </DropdownItem>
                  <DropdownItem to="/user/dashboard" tag={Link}>
                    <i className="ni ni-circle-08" />
                    <span>Dashboard</span>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem to="/auth/login" tag={Link}>
                    <i className="ni ni-user-run" />
                    <span>Logout</span>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default AdminNavbar;
