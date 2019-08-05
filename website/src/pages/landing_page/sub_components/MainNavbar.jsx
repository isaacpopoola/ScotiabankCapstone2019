import React from 'react';
import logo_desktop from '../../../assets/logos/Scotiabank-Workmark-Logo_HEX_E.png';
import logo_tablet from '../../../assets/logos/scotiabank-logo-red-tablet.png';
import logo_mobile from '../../../assets/logos/Scotiabank-FlyingS-Icon_HEX.png';
import $ from 'jquery';
import {
    Navbar,
    Nav
} from 'react-bootstrap';
import { ScrollspyNav } from 'react-scrollspy-nav';

class MainNavbar extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false,
            viewChange: 0
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount() {
        if (window.outerWidth < 768) {

            $('#logos').empty();
            $('#logos').prepend(`<img id = 'mobile' src=${logo_mobile} width='46.65px' height='51.7px' className = 'd-inline-block align-top mobile' alt="" style={{margin: '0.5rem'}}/>`);

        } else if (window.outerWidth < 992) {
            $('#logos').empty();
            $('#logos').prepend(`<img id = 'tablet' src=${logo_tablet} width='128.5px' height='33px' className = 'd-inline-block align-center tablet' alt="" style={{margin: '1.5rem'}} />`);
        } else if (window.outerWidth >= 992) {
            $('#logos').empty();
            $('#logos').prepend(`<img id = 'desktop' src=${logo_desktop} width='290px' height='80px' className = 'd-inline-block align-top desktop' alt=""/>`);
        }

    }


    render() {
        //console.log(this.props);

        const changeLogo = () => {
            console.log(window.outerWidth);
            if (window.outerWidth < 768) {

                $('#logos').empty();
                $('#logos').prepend(`<img id = 'mobile' src=${logo_mobile} width='46.65px' height='51.7px' className = 'd-inline-block align-top mobile' alt="" style={{margin: '0.5rem'}}/>`);

            } else if (window.outerWidth < 992) {
                $('#logos').empty();
                $('#logos').prepend(`<img id = 'tablet' src=${logo_tablet} width='128.5px' height='33px' className = 'd-inline-block align-center tablet' alt="" style={{margin: '1.5rem'}} />`);
            } else if (window.outerWidth >= 992) {
                $('#logos').empty();
                $('#logos').prepend(`<img id = 'desktop' src=${logo_desktop} width='290px' height='80px' className = 'd-inline-block align-top desktop' alt=""/>`);
            }

        }


        window.onresize = changeLogo;
        window.onLoad = changeLogo;
        const { navCollapsed } = this.state;




        return (
            <div id='the-navbar' >
                <Navbar fixed='top' collapseOnSelect expand='lg' bg='light' variant='light'>
                    <Navbar.Brand id='logos' href='/' onLoad={changeLogo()} />
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto' navbar>
                                <Nav.Link href='#home'>Home</Nav.Link>
                                <Nav.Link href='#about'>About</Nav.Link>
                                <Nav.Link href='#opportunities'>Opportunities</Nav.Link>
                                <Nav.Link href='#recruiting-team'>Our Team</Nav.Link>
                                <Nav.Link href='#blogs'>Blogs</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        );
    }

};

export default MainNavbar