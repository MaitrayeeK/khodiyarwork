import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import styles from './login.scss';
import image from '../../images/comman.jpg';

const Login = props => {

	const navigate = useNavigate()
	const [data, setData] = useState({ email: "", password: ""})

	const onclick = (e) => {
		if (e.target.name === 'btn-forgetpassword') {
			navigate("/forgetpassword")
		}
		if (e.target.name === 'btn-signup') {
			navigate("/signup")
		}
	}

	const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

	const handleSubmit = async (e) => { }
	
	return (

		<div>
			<div>
				<div class="card mt-4 mx-5 mb-2">
					<div class="row g-0">
						<div class="col-md-6">
							<img src={image} class="img-fluid rounded-start" alt="..." height='400px' />
						</div>
						<div class="d-grid col-md-6 align-items-center">
							<div class="card-body">
								<form onSubmit={handleSubmit}>
									<div class="mb-3">
										<label for="exampleInputEmail1" class="form-label">Email address</label>
										<input type="email" class="form-control" id="exampleInputEmail1" name="email" onChange={onChange} />
									</div>
									<div class="mb-3">
										<label for="exampleInputPassword1" class="form-label">Password</label>
										<input type="password" class="form-control" id="exampleInputPassword1" name="password" onChange={onChange} />
									</div>
									<div class='mb-3'>
										<button type="button" class="btn" name='btn-forgetpassword' onClick={onclick}>Forget Password</button>
									</div>
									<div class='text-center'>
										<button type="submit" class="btn btn-primary mb-3">Submit</button>
									</div>
									<div class='mb-3 text-center'>
										<label class="form-label">Don't have an account ?</label>
										<button type="button" class="btn mx-2" name='btn-signup' onClick={onclick}>Signup</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class login extends React.Component {
//   render() {
//     return <div>This is a component called login.</div>;
//   }
// }

const loginPropTypes = {
	// always use prop types!
};

Login.propTypes = loginPropTypes;

export default Login;
