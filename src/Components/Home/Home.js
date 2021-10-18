import React, { useEffect, useState } from 'react';
import './Home.css'
import { Carousel} from 'react-bootstrap';
import image1 from '../../Images/Banner Images/image-1.jpg';
import image2 from '../../Images/Banner Images/image-2.jpg';
import image3 from '../../Images/Banner Images/image-3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Person1 from '../../Images/Person Images/image1.jpg';
import Person2 from '../../Images/Person Images/image2.jpg';
import Person3 from '../../Images/Person Images/image3.jpg';
import Person4 from '../../Images/Person Images/image4.png';
// Our Services images
import Service1 from '../../Images/icons/ambulatory.webp'
import Service2 from '../../Images/icons/laboratory.webp'
import Service3 from '../../Images/icons/ambulance.webp'
import Service4 from '../../Images/icons/radiology.webp'
import Service5 from '../../Images/icons/emergencycare.webp'
import Service6 from '../../Images/icons/pharmacy.webp'
import Service from '../Service/Service';
import Services from '../Services/Services';



const Home = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./ambuServices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const slicedService = services.slice(0,6)
    console.log(slicedService)


    return (

        <div>
            {/* Carousel Section/ banner section here */}
            <div>
            <Carousel fade className='carousel-container'>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={image2}
                alt="First slide"
                />
                <Carousel.Caption className=''>
                <div>
                <h3 className='carousel-info-title'>We provide top <br /> medical services.</h3>
                <p className='carousel-info-p'>More than 300 professionals.</p>
                </div>
                <div>
                    <button className='caro-btn'>Make an Appoinment</button>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={image3}
                alt="Second slide"
                />

                <Carousel.Caption>
                <div>
                <h3 className='carousel-info-title'>We provide top <br /> medical services.</h3>
                <p className='carousel-info-p'>More than 300 professionals.</p>
                </div>
                <div>
                    <button className='caro-btn'>Make an Appoinment</button>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carousel-img"
                src={image1}
                alt="Third slide"
                />

                <Carousel.Caption>
                <div>
                <h3 className='carousel-info-title'>We provide top <br /> medical services.</h3>
                <p className='carousel-info-p'>More than 300 professionals.</p>
                </div>
                <div>
                    <button className='caro-btn'>Make an Appoinment</button>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>

        {/* Medica info section */}

        <div className='medica-info-section'>
            <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <div className='col-12 col-md-6 col-lg-4 p-3'>
                    <div className='d-flex p-1' >
                    <FontAwesomeIcon className='fs-2 m-2' icon={faClock} />
                    <div className=' m-2'>
                        <span>Monday - Friday 08:00 - 21:00</span> <br />
                        <span>Saturday and Sunday-CLOSED</span>
                    </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 o-3' >
                    <div className='d-flex p-1' >
                    <FontAwesomeIcon className='fs-2 m-2' icon={faEnvelope} />
                    <div className='m-2'>
                        <span>0080 673 729 766</span> <br />
                        <span>contact@business.com</span>
                    </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 col-lg-4 p-3' >
                    <div className='d-flex p-1' >
                    <FontAwesomeIcon className='fs-2 m-2' icon={faMapMarkerAlt} />
                    <div className='m-2'>
                        <span>Lamas Carbajal Str, no 14-18</span> <br />
                        <span>41770 Montellano</span>
                    </div>
                    </div>
                </div>
    
            </div>
            </div>
            
        </div>

        {/* Medica about us section */}

        <div className=' medica-about-us-section'>
        <div className='container mt-5'>
        <div className='row mt-3'>
            <div className='medica-about-info col-12 col-md-6 col-lg-7'>
                <div>
                    <div><h1 className='medica-about-info-title'><span className='text-primary'>Welcome </span> to <span className='bg-primary text-white'> Medica</span> Health <br /> Center</h1></div>
                </div>
                <div>
                    <p className='text-secondary fs-5 fw-lighter lh-base'>Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui. Donec nec fringilla mi. Pellentesque molestie consequat felis vitae elementum. Proin ut tempor urna.</p>
                </div>
                <div className='row'>
                    <div className='col-12 col-6 col-lg-6 fs-5 lh-lg'>
                        <ul>
                            <li>Cardiovascular Diseases</li>
                            <li>Ophthalmology</li>
                            <li>Gastroenterology</li>
                            <li>Neurology</li>
                        </ul>
                    </div>
                    <div className='col-12 col-6 col-lg-6 lh-lg fs-5'>
                        <ul>
                            <li>Neonatology</li>
                            <li>Toracic Surgery</li>
                            <li>Plastic Surgery</li>
                            <li>Ortopedy</li>
                        </ul>
                    </div>
                </div>
                <Link className='' to='*'><button className='medica-about-btn btn bg-primary text-white'>Read More</button></Link>
            </div>
            <div className='medica-about-img col-12 col-md-5 col-lg-4'>
                <img className='about-person-img' src={Person4} alt=""/>
            </div>
        </div>
        </div>
        </div>


        {/* Our Services */}

        <div className='our-services'>
            <div>
                <div className='mt-5'>
                    <h1 className='text-center fw-bold mt-5 mb-5'>Our <span className='text-primary'> Services</span></h1>
                </div>
            </div>
            <div className='container pb-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service1} alt="" />
                            <div className='m-3'>
                            <h2>Ambulatory Care</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service2} alt="" />
                            <div className='m-3'>
                            <h2>Laboratory</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service3} alt="" />
                            <div className='m-3'>
                            <h2>Ambulance Service</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service4} alt="" />
                            <div className='m-3'>
                            <h2>ARadiology</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service5} alt="" />
                            <div className='m-3'>
                            <h2>Emergency Care</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>

                    <div className='col-12 col-md-6 col-lg-4 p-2'>
                            <img className='m-3' src={Service6} alt="" />
                            <div className='m-3'>
                            <h2>Pharmacy</h2>
                            <p>Ambulatory care refers to medical services performed on an outpatient basis.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='text-center mt-4'>
                <h2 className='mt-5 mb-5 fw-bold'><span className='text-primary'>Ambulance</span> Service</h2>
            </div>
            <div className='row row-cols-12 row-cols-md-2 row-cols-lg-3 '>
                {
                    slicedService.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='text-center'>
                <Link className='text-decoration-none' to='/services'><button className='btn'>See More</button></Link>
            </div>
        </div>





        </div>
    );
};

export default Home;