import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavBar=()=>(
    <div className="navbar">
        <Link to="/" className="link-home">Home</Link>
    </div>
)

export default withRouter(NavBar);

