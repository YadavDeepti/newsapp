import React, { Component } from 'react'
import {Link} from "react-router-dom";



export class Navbar extends Component {
 

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general">Globle News</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/general" style={{textDecoration:'none', color:'#fff'}}>General</Link></li>
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/business" style={{textDecoration:'none', color:'#fff'}}>Business</Link></li>
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/sports" style={{textDecoration:'none', color:'#fff'}}>Sports</Link></li>
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/entertainment" style={{textDecoration:'none', color:'#fff'}}>Entertainment</Link></li>
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/health" style={{textDecoration:'none', color:'#fff'}}>Health</Link></li>
                    <li className="nav-item " style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/science" style={{textDecoration:'none', color:'#fff'}}>Science</Link></li>
                    <li className="nav-item "style={{ paddingLeft: 13 }}><Link className="nav-Link" to="/technology" style={{textDecoration:'none', color:'#fff'}}>Technology</Link></li>
                    
                </ul>
                </div>
            </div>
</nav>
      </div>
    )
  }
}

export default Navbar
