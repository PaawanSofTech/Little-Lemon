import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../icons_assets/logo.svg';

const Navigation = () => {
    return (
        <section id='header'>
          <nav>
                <Link to='/'><img src={Logo} alt='Little Lemon logo' /></Link>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to='/bookings'>Reservations</Link></li>
                    <li><Link to='/order-online'>Order Online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;