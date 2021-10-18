import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('./ambuServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);


    return (
        <div>
            <div className='container'>
                <div className='service-related-info w-75'>
                    <p>Emergency medical services are a type of emergency service dedicated to providing out-of-hospital acute medical care, transport to definitive care, and other medical transport to patients with illnesses and injuries which prevent the patient from transporting themselves. Emergency medical services may also be locally known as a paramedic service, a first aid squad, emergency squad, rescue squad, ambulance squad, ambulance service, ambulance corps, or life squad. If you get very sick or badly hurt and need help right away, you should use emergency medical services. </p>
                </div>
                <div>
                    <input className='search-input' type="text" />
                    <button className='search-btn'>Search</button>
                </div>
                <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 services-card'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default Services;