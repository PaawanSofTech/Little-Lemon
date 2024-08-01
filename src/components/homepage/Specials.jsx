import React from 'react';
import {specials} from '../data';
import { Link } from 'react-router-dom';

const Specials = () => {

    return (
        <section id='specials-section'>
            <div className="specials-top">
                <h2>This week's specials!</h2>
                <button className="button order-online"><Link to='/order-online'>Order online</Link></button>
            </div>
            <div className="specials">
                {specials.map(item => {
                    return (
                        <div key={item.id} className='special'>
                            <div className="special-content">
                                <img src={item.image} alt={item.alt} />
                                <div className="special-name">
                                    <h4>{item.title}</h4>
                                    <p>{item.price}</p>
                                </div>
                                <p>{item.description}</p>
                            </div>
                            <div className='order'>
                                Order a delivery <img src={require('../../icons_assets/scooter-icon.jpg')} alt='Cyclist icon' width='30px' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}



export default Specials;