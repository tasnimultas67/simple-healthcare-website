import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 mb-4 align-items-center justify-content-center text-center'>
                <div className='col mt-sm-5'>
                    <span><Link className='text-primary fs-2 text-decoration-none fw-bold'to='./home'>MEDICA</Link></span>
                </div>
                <div className='col mt-4'>
                <p className='fs-5 fw-bold mb-3'>Contact Info</p>
                    <p>+53 345 7953 32453</p>
                    <p>yourmail@gmail.com</p>
                    <p>contact@gmail.com</p>
                </div>
                <div className='col'>
                    <p className='fs-5 fw-bold mb-3'>Our Locations</p>
                    <p className='text-primary'>Miami</p>
                    <p className='mb-4'>45 Creekside Av FL 931</p>
                    <p className='text-primary'>Los Angeles</p>
                    <p>1481 Creekside Lane Avila <br /> Beach, CA 931</p>
                </div>
                <div className='col mt-3 opening-hours'>
                    <p className='fs-5 text-center fw-bold'>Opening Hours</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <p>Monday:</p>
                            <p>Thuesday</p>
                            <p>Wednesday:</p>
                            <p>Thursday</p>
                            <p>Friday:</p>
                        </div>
                        <div>
                            <p>8:00am - 9:00pm</p>
                            <p>8:00am - 9:00pm</p>
                            <p>8:00am - 9:00pm</p>
                            <p>8:00am - 9:00pm</p>
                            <p>8:00am - 7:00pm</p>
                        </div>
                    </div>
                </div>
                 
            </div>
        </div>
    );
};

export default Footer;