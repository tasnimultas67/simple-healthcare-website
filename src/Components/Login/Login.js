import React from 'react';
import './Login.css'
import Button from '@restart/ui/esm/Button';
import loginImage from '../../Images/Mobile_login.svg'
import { Form } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';
import { Link, useLocation,useHistory} from 'react-router-dom';

const Login = () => {

	const {signInUsingGoogle, signInUsingGithub, error, handleEmailLogin, handlePasswordLogin, handleEmailPassLogin} = useAuth()
	const location = useLocation()
	const history =useHistory()
	const redirect_uri = location.state?.from || '/home'
	console.log('came from',location.state?.from )

	const handleGoogleLogin =()=>{
		signInUsingGoogle()
		.then(() => {
			history.push(redirect_uri)
        })
	}

	const handleGithubLogin = () =>{
		signInUsingGithub()
		.then((result) => {
			history.push(redirect_uri)
            const user = result.user
            // console.log(user)
        })
	}



    return (

		<div className='container mt-5 mb-5'>
			<div className='row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2' >

				{/* Login Form Image */}
				<div className='col'>
					<img src={loginImage} className='login-form-image' alt="" />
				</div>

				{/* Login Form */}

				<div className='col'>
					<div className='w-75'>
						<p className='text-center fs-4 fw-bold'>Log In</p>
												<Form>	
							<Form.Floating className="mb-3">
								<Form.Control onBlur={handleEmailLogin}
								id="floatingInputCustom"
								type="email"
								placeholder="name@example.com"
								required
								/>
								<label htmlFor="floatingInputCustom">Email address</label>
							</Form.Floating>
							<Form.Floating>
								<Form.Control
								onBlur={handlePasswordLogin}
								id="floatingPasswordCustom"
								type="password"
								placeholder="Password"
								required
								/>
								<label htmlFor="floatingPasswordCustom">Password</label>
								<p className='text-danger mt-2'>{error}</p>
								<Button onClick={handleEmailPassLogin} className='btn btn-primary w-100 mt-3 fs-5 fw-bold'>Log In</Button>
							</Form.Floating>
							<p className='text-center mt-4 mb-4'>------------------ OR ------------------ </p>
							<div className='text-center'>
								<button onClick={handleGoogleLogin} className=' login-with-google btn' title='Google Login'>
								<i className="fab fa-google fs-3 p-2 login-google-icon"></i>
								</button>
								<button onClick={handleGithubLogin} className=' login-with-google btn m-2' title='Github Login'>
								<i className="fab fa-github fs-3 p-2 mx-1 text-primary"></i>
								</button> <br />
								<Link className='text-center' to='/register'>New User? Create Account</Link>
							</div>

							</Form>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Login;