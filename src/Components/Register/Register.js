import React from 'react';
import Button from '@restart/ui/esm/Button';
import loginImage from '../../Images/Mobile_login.svg'
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Register = () => {

const {handleUsingEmail,handleEmailChange, handlePasswordChange, error} = useAuth()


    return (
        <div>
            <div className='container mt-5 mb-5'>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2' >

				{/* Register Form Image */}
				<div className='col'>
					<img src={loginImage} className='login-form-image mt-4' alt="" />
				</div>

				{/* Register Form */}

				<div className='col'>
					<div className='w-75'>
						<p className='text-center fs-4 fw-bold'>Register</p>
                        <Form.Floating className="mb-3">
								<Form.Control 
								id="floatingInputCustom"
								type="text"
								placeholder="John Doe"
								/>
								<label htmlFor="floatingInputCustom">Name</label>
							</Form.Floating>
													
							<Form.Floating className="mb-3">
								<Form.Control 
                                onBlur={handleEmailChange}
								id="email"
								type="email"
								placeholder="name@example.com"
                                required
								/>
								<label htmlFor="floatingInputCustom">Email address</label>
							</Form.Floating>
							<Form.Floating>
								<Form.Control
								onBlur={handlePasswordChange}
								id="password"
								type="password"
								placeholder="Password"
                                required
								/>
								<label htmlFor="floatingPasswordCustom">Password</label>
								<p className='text-danger mt-2'>{error}</p>

								<Button onClick={handleUsingEmail} className='btn btn-primary w-100 mt-3 fs-5 fw-bold'>Register</Button>
							</Form.Floating>
							<p className='text-center mt-4 mb-4'>------------------ OR ------------------ </p>
							<div className='text-center'>
								<button  className=' login-with-google btn' title='Google Login'>
								<i className="fab fa-google fs-3 p-2 login-google-icon"></i>
								</button>
								<button  className=' login-with-google btn m-2' title='Github Login'>
								<i className="fab fa-github fs-3 p-2 mx-1 text-primary"></i>
								</button> <br />
                                <Link className='text-center' to='/login'>Already Have Account?</Link>

							</div>
							
					</div>
				</div>
			</div>
		</div>
  
        </div>
    );
};

export default Register;