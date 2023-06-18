import React from 'react';
import PropTypes from 'prop-types';
// import styles from './forgetpassword.scss';

const Forgetpassword = props => (
	<div>
		<div class="card m-5 mx-auto">
			<div class="card-body">
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword2" class="form-label">Confirm Password</label>
						<input type="password" class="form-control" id="exampleInputPassword2" />
					</div>
					<button type="submit" class="btn btn-primary mb-3">Reset</button>
				</form>
			</div>
		</div>
	</div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class forgetpassword extends React.Component {
//   render() {
//     return <div>This is a component called forgetpassword.</div>;
//   }
// }

const forgetpasswordPropTypes = {
	// always use prop types!
};

Forgetpassword.propTypes = forgetpasswordPropTypes;

export default Forgetpassword;
