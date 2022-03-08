import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button cla
                        ssName="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
  };





















// import React from 'react';
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';




// const Navbar = (props) => {
//     return (


//         <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

//         <div className="container-fluid">
//         <Link className="navbar-brand" to="/" >{props.title}</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-Link active" aria-current="page" to="/" >Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-Link" to="/about" >{props.aboutText}</Link>
//             </li>

//             <li className="nav-item">
//               <Link className="nav-Link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
//             </li>

//           </ul>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>


//           <div className="p-3">
//             <button type="button" className="btn btn-primary m-1" onClick={props.toggleModePrimary}>Primary</button>

//             <button type="button" className="btn btn-secondary m-1" onClick={props.toggleModeSecondary}>Secondary</button>

//             <button type="button" className="btn btn-success m-1" onClick={props.toggleModeSuccess}>Success</button>

//             <button type="button" className="btn btn-danger m-1" onClick={props.toggleModeDanger}>Danger</button>

//             <button type="button" className="btn btn-warning m-1" onClick={props.toggleModeWarning}>Warning</button>

//           </div>




//           <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
//             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
//             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//           </div>


//         </div>
//         </div>

            

            
//         </nav>
        
//     );
// }

// Navbar.propTypes = {title : PropTypes.string.isRequired,
//                     aboutText : PropTypes.string.isRequired}


// Navbar.defaultProps = {
//     title : "Set Title Hear",
//     aboutText : "About Text Hear" 
// }

// export default Navbar;