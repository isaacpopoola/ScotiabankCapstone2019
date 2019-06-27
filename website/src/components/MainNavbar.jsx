import React from 'react';
import logo_desktop from '../assets/logos/Scotiabank-Workmark-Logo_HEX_E.png';
import logo_tablet from '../assets/logos/scotiabank-logo-red-tablet.png';
import logo_mobile from '../assets/logos/scotiabank-logo-red-tablet.png';
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
    DropdownItem} from 'reactstrap';

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
            <div>
                <Navbar color="light" light expand="lg">
                    <NavbarBrand href='/'>
                        <img src={logo_desktop} width="20%" alt=""/>
                    </NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar/*style={{flexBasis:'100%'}}*/>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink href='/'>Home</NavLink>
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