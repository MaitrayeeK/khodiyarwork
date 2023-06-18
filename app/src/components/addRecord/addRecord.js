import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// import styles from './addRecord.scss';

const AddRecord = props => {
	const navigate = useNavigate()

	const [data, setData] = useState({ saleno: "", saledate: "", party: "", item: "", qty: "", rate: "", amount: "", discount: "", disamount: "", netamount: "", cgst: "", sgst: "", tds: "", roundoff: "", totalamt: "",})

	const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

	const handleSubmit = async (e) => { }

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
				<form onSubmit={handleSubmit}>
					<div class='row'>
						<div class="col-md-4">
							<div class="m-2">
								<label for="saleno" class="form-label">Sale no.</label>
								<input type="text" class="form-control" id="saleno" name="saleno" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="saledate" class="form-label">Sale date</label>
								<input type="text" class="form-control" id="saledate" name="saledate" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-2">
								<label for="party" class="form-label">Party</label>
								<input type="text" class="form-control" id="party" name="party" />
							</div>
						</div>
						<div class="col-md-6">
							<div class="m-2">
								<label for="item" class="form-label">Item</label>
								<input type="text" class="form-control" id="item" name="item" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="qty" class="form-label">Quantity</label>
								<input type="text" class="form-control" id="qty" name="qty" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="rate" class="form-label">Rate</label>
								<input type="text" class="form-control" id="rate" name="rate" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="amount" class="form-label">Amount</label>
								<input type="text" class="form-control" id="amount" name="amount" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="discount" class="form-label">Discount</label>
								<input type="text" class="form-control" id="discount" name="discount" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="disamount" class="form-label">Discount amount</label>
								<input type="text" class="form-control" id="disamount" name="disamount" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="netamount" class="form-label">Net amount</label>
								<input type="text" class="form-control" id="netamount" name="netamount" />
							</div>
						</div>

						<div class="col-md-4">
							<div class="m-2">
								<label for="cgst" class="form-label">CGST</label>
								<input type="text" class="form-control" id="cgst" name="cgst" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="sgst" class="form-label">SGST</label>
								<input type="text" class="form-control" id="sgst" name="sgst" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="tds" class="form-label">TDS</label>
								<input type="text" class="form-control" id="tds" name="tds" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="roundoff" class="form-label">Round off</label>
								<input type="text" class="form-control" id="roundoff" name="roundoff" />
							</div>
						</div>
						<div class="col-md-4">
							<div class="m-2">
								<label for="totalamt" class="form-label">Total amount</label>
								<input type="text" class="form-control" id="totalamt" name="totalamt" />
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
