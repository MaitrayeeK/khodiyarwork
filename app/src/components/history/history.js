import React from 'react';
import PropTypes from 'prop-types';
// import styles from './history.scss';

const History = props => {


	return (
		<div>
			<table class="table m-3">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Sale item</th>
						<th scope="col">Item</th>
						<th scope="col">Qty</th>
						<th scope="col">Rate</th>
						<th scope="col">Amount</th>
						<th scope="col">Discount</th>
						<th scope="col">Dis amount</th>
						<th scope="col">Taxable</th>
						<th scope="col">Cgst</th>
						<th scope="col">Sgst</th>
						<th scope="col">Total amount</th>
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
		</div>
	);
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class history extends React.Component {
//   render() {
//     return <div>This is a component called history.</div>;
//   }
// }

const historyPropTypes = {
	// always use prop types!
};

History.propTypes = historyPropTypes;

export default History;
