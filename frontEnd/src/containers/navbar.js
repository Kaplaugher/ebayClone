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
    NavDropdown
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
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                      <img id="brand" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/2000px-EBay_logo.svg.png" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form center id="form">
                        <FormGroup>
                            <FormControl type="text" id="searchbar" placeholder="Search"/>
                        </FormGroup>
                        {' '}
                        <Button type="submit">Submit</Button>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({FetchWeather: GetWeather}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(Navbar);

export default Navbar1;
