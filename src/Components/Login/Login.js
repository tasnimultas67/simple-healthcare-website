import React from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faAt, faLock } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='body'>
	<div className="section">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 className="mb-0 pb-3 "><span>Log In </span><span>Sign Up</span></h6>
			          	<input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
			          	<label for="reg-log"/>
						<div className="card-3d-wrap mx-auto">
							<div className="card-3d-wrapper">
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                                                <FontAwesomeIcon className='input-icon uil uil-at' icon={faAt} />
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                                                <FontAwesomeIcon className='input-icon uil uil-at' icon={faLock} />
											</div>
											<Link to="*" className="btn mt-4">submit</Link>
                            				<p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
                                                <FontAwesomeIcon className='input-icon uil uil-at' icon={faUserAlt} />
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
                                                <FontAwesomeIcon className='input-icon uil uil-at' icon={faAt} />
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
                                                <FontAwesomeIcon className='input-icon uil uil-at' icon={faLock} />
											</div>
											<Link to="*" className="btn mt-4">submit</Link>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
        </div>
    );
};

export default Login;