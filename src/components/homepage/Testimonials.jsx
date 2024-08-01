import { testimonials } from "../data";

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h2>Testimonials</h2>
            <div className="testimonials">
                {testimonials.map(item => {
                    return (
                        <div key={item.id} className="testimonial">
                            <h5>Rating: {item.rating} <img src={require('../../icons_assets/star-rating-icon.jpg')} alt='Star icon' width='20px' /></h5>
                            <div className="profile">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                            </div>
                            <p>{item.testimonial}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials;