import React from 'react';
import PropTypes from 'prop-types';
// import styles from './addRecord.scss';

const AddRecord = props => {

	return (
		<div>
			<nav class="navbar bg-body-tertiary">
				<div class="container-fluid">
					<a class="navbar-brand">KHODIYAR HAND WORK</a>
					<form class="d-flex" role="search">
						<button class="btn btn-outline-primary" type="submit">History</button>
						<button class="btn btn-outline-primary ms-2" type="submit">Logout</button>
					</form>
				</div>
			</nav>
			<div class="card m-5 p-3">
				<form>
					<div class='row'>
						<div class="col-md-4">
							<div class="m-2">
								<label for="saleno" class="form-label">Sale no.</label>
								<input type="text" class="form-control" id="saleno" aria-describedby="emailHelp" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="saledate" class="form-label">Sale date</label>
								<input type="text" class="form-control" id="saledate" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="item" class="form-label">Item</label>
								<input type="text" class="form-control" id="item" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="qty" class="form-label">Quantity</label>
								<input type="text" class="form-control" id="qty" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="rate" class="form-label">Rate</label>
								<input type="text" class="form-control" id="rate" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="amount" class="form-label">Amount</label>
								<input type="text" class="form-control" id="amount" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="discount" class="form-label">Discount</label>
								<input type="text" class="form-control" id="discount" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="disamount" class="form-label">Discount amount</label>
								<input type="text" class="form-control" id="disamount" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="tax" class="form-label">Tax</label>
								<input type="text" class="form-control" id="tax" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="cgst" class="form-label">CGST</label>
								<input type="text" class="form-control" id="cgst" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="sgst" class="form-label">SGST</label>
								<input type="text" class="form-control" id="sgst" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="totalamt" class="form-label">Total amount</label>
								<input type="text" class="form-control" id="totalamt" />
							</div>
						</div>
					</div>
					<button type="submit" class="btn btn-primary m-2">Save / Print</button>
				</form>
			</div>
		</div>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class addRecord extends React.Component {
//   render() {
//     return <div>This is a component called addRecord.</div>;
//   }
// }

const addRecordPropTypes = {
	// always use prop types!
};

AddRecord.propTypes = addRecordPropTypes;

export default AddRecord;
