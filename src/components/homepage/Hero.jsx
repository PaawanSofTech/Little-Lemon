import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id='hero'>
            <div className='hero-left-section'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/bookings'><button type='button' className='button reserve-button'>Reserve a table</button></Link>
            </div>
            <div>
                <img className='hero-image' src={require('../../icons_assets/restaurantfood.webp')} width='250px' alt='Resturant waiter holding food' />
            </div>
        </section>
    )
}

export default Hero;