import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {service_name, image_url, company, rating, service_charge} = props.service
    return (
        <div className="service-card" >
        <div className="col">
            <div className="card">
                <img src={image_url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <p className="card-title fs-4 fw-bold">{service_name}</p>
                    <p className="card-text">Making plans to travel to and from dialysis can be a stress for patients and their families.<Link className='text-decoration-none' to='*'>Lern more..</Link> </p>
                    <p className='d-flex justify-content-between'><span>Company: {company}</span>
                    <span>Rating: {rating}</span></p>
                    <h4>Service Charge: ${service_charge}</h4>
                </div>
                <div className='text-center'>
                <Link className='text-decoration-none' to='*'><button className='btn '>Review Item</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;