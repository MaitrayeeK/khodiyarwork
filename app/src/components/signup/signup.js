import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
// import styles from './signup.scss';
import image from '../../images/comman.jpg';

const Signup = props => {
	const navigate = useNavigate()
    const [data, setData] = useState({ email: "", password: "", fname: "", lname: "" })

	const onclick = (e) => {
		if (e.target.name === 'btn-login') {
			navigate("/")
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
										<label for="exampleInputFirstName" class="form-label">First Name</label>
										<input type="email" class="form-control" id="exampleInputFirstName" name='fname' onChange={onChange} />
									</div>
									<div class="mb-3">
										<label for="exampleInputLastName" class="form-label">Last Name</label>
										<input type="email" class="form-control" id="exampleInputLastName" name='lname' onChange={onChange} />
									</div>
									<div class="mb-3">
										<label for="exampleInputEmail1" class="form-label">Email address</label>
										<input type="email" class="form-control" id="exampleInputEmail1" name='email' onChange={onChange} />
									</div>
									<div class="mb-3">
										<label for="exampleInputPassword1" class="form-label">Password</label>
										<input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={onChange}/>
									</div>
									<div class='mb-3 text-center'>
										<button type="submit" class="btn btn-primary mb-3">Submit</button>
										<br/>
										<label class="form-label">Already have an account ?</label> <button type="button" class="btn mx-2" name='btn-login' onClick={onclick}>Login</button>
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
// class signup extends React.Component {
//   render() {
//     return <div>This is a component called signup.</div>;
//   }
// }

const signupPropTypes = {
	// always use prop types!
};

Signup.propTypes = signupPropTypes;

export default Signup;
