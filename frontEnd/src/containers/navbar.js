import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    FormControl,
    Button,
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown,
    handleSelect
} from 'react-bootstrap';
// import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
// import { connect } from 'react-redux';

class Navbar1 extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleSearchSubmit() {
        console.log('form submit');
    }

    render() {
        return (
            <div className="navs">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <img id="brand" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2000px-EBay_logo.svg.png" alt=""/>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form id="form">
                            <FormGroup>
                                <FormControl type="text" id="searchbar" placeholder="Search"/>
                            </FormGroup>
                            {' '}
                            <Button type="submit">Submit</Button>
                              <Navbar.Text pullRight id="navbar-text">
                                  Welcome
                                  <Navbar.Link href="/">{}</Navbar.Link>
                              </Navbar.Text>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                <hr></hr>
                <Nav className="links text-center">

                </Nav>

                <hr></hr>
            </div>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({FetchWeather: GetWeather}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Navbar);

export default Navbar1;
