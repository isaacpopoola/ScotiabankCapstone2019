import React from 'react';
import logo_desktop from '../assets/logos/Scotiabank-Workmark-Logo_HEX_E.png';
import logo_tablet from '../assets/logos/scotiabank-logo-red-tablet.png';
import logo_mobile from '../assets/logos/Scotiabank-FlyingS-Icon_HEX.png';
import { Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class MainNavbar extends React.Component {
    
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
   
    
    render() {
        //console.log(this.props);
        const { navCollapsed } = this.state;

        return (
            <div id='the_navbar'>
                <Navbar color="light" light expand="lg">
                    <Nav>

                    </Nav>
                    <NavbarBrand href='/'>
                        {/* <img id = 'desktop' src={logo_desktop} width='290px' height='80px' className = 'd-inline-block align-top' alt=""/> */}
                        <img id = 'tablet' src={logo_tablet} width='128.5px' height='33px' className = 'd-inline-block align-center' alt="" style={{margin: '1.5rem'}} />
                        {/* <img id = 'mobile' src={logo_mobile} width='46.65px' height='51.7px' className = 'd-inline-block align-top' alt="" style={{margin: '0.5rem'}}/> */}
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar/*style={{flexBasis:'100%'}}*/>
                        <Nav className='ml-auto' navbar>
                            <NavItem active>
                                <NavLink href='/' >Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>Our Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/'>Blogs</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        );

        // return (
        //     <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{padding:'1rem'}}>
        //             <a className="navbar-brand" href="/">
        //                 <img src={logo_desktop} width="20%" alt=""/>
        //             </a>
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>

        //             <div className='collapse navbar-collapse' id='navbarNav' style={{flexBasis:'100%'}}>
        //                 <div className='navbar-nav' >
        //                     <li className="nav-item active">
        //                         <a className="nav-link" href="/">Home</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/">About</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/">Our Team</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href="/">Blogs</a>
        //                     </li>
        //                 </div>
        //             </div>

                
        //     </nav>
            
        // );
    }

};

export default MainNavbar