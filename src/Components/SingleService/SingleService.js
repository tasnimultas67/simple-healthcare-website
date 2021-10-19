import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const SingleService = () => {

    let {id} = useParams()

    const [serviceDetails, setServiceDetails] = useState([])
    const [singleService, setSingleService] = useState({});


    useEffect(() => {
        fetch("https://raw.githubusercontent.com/tasnimultas67/fake-data/main/singleservice.json")
        .then(res => res.json())
        .then(data => setServiceDetails(data.service))
    },[])



      useEffect(() => {
        const foundService = serviceDetails.find((service) => service.id === id);
        console.log(foundService)
        setSingleService(foundService)
      }, [id,serviceDetails]);



    return (
        <div className='container'>
            <div className='text-center'>
              <div>
                <p>{id}</p>
              <img className='w-50' src={singleService?.img_url} alt="" />
            <h1>{singleService?.service_name}</h1>
            <h4>Service Charge{singleService?.service_charge}</h4>
            <h4>Service Rating {singleService?.rating}</h4>
            <h4>Service Company {singleService?.company}</h4>
            <p>Service Discription{singleService?.discription}</p>
              </div>
            </div>

        </div>
    );
};

export default SingleService;