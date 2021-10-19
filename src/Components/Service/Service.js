import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {id,service_name, image_url, company, rating, service_charge} = props.service
    return (
        <div className="col card-container">
            <div className="card h-100">
                <img src={image_url} className="card-img-top service-image" alt="..."/>
                <div className="card-body">
                    <p className="card-title fs-4 fw-bold">{service_name}</p>
                    <p className="card-text">Making plans to travel to and from dialysis can be a stress for patients and their families...<Link className='text-decoration-none' to='*'>Learn more</Link> </p>
                    <p className='d-flex justify-content-between'>
                    <span className='card-text'>Company: {company}</span>
                    <span className='card-text'>Rating: {rating}</span></p>
                    <h4 className='card-text'>Service Charge: ${service_charge}</h4>
                </div>
                <div className='text-center card-body mb-2'>
                <Link className='text-decoration-none' to={`/service/${id}`}><button className='service-button bg-primary'>Review Item</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;