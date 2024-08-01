const About = () => {
    return (
        <section id='about'>
            <div className='about-left-section'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranian restaurant, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <img className='top about-image' src={require('../icons_assets/restaurant.webp')} alt='Resturant waiter holding food' />
                <img className='about-image' src={require('../icons_assets/mario-and-adrian.webp')} alt='Resturant waiter holding food' />
            </div>
        </section>
    )
}

export default About;