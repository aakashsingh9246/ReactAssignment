import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCompare, removetToCompare } from '../actions/action';

const ProductList = ({ prodData, addToCompare, removetToCompare, compare }) => {
  const [current, setCurrent] = useState(false);

  const updateCompare = () => {
    current
      ? removetToCompare(prodData.plan.id)
      : compare.length >= 3
      ? alert('only 3 item can be selected')
      : addToCompare(prodData.plan.id);
  };

  return (
    <Fragment>
      {prodData && (
        <div className={`product bg-light ${current && 'selectedProd'}`}>
          <h2>{prodData.plan.planName}</h2>
          <div>{prodData.plan.insuranceProviderName}</div>
          <div>Sum Insured :{prodData.sumInsured}</div>
          <div>{prodData.totalAmount.amount}</div>
          <div>
            <Link
              to={`/productDetails/${prodData.plan.id}`}
              className='btn btn-primary'
            >
              View Product
            </Link>
          </div>

          <input
            type='checkbox'
            name='current'
            checked={current}
            value={current}
            disabled={!current && compare.length >= 3}
            onChange={e => {
              setCurrent(!current);
              updateCompare();
            }}
          />
        </div>
      )}
    </Fragment>
  );
};

ProductList.propTypes = {
  prodData: PropTypes.object.isRequired,
  addToCompare: PropTypes.func.isRequired,
  removetToCompare: PropTypes.func.isRequired,
  compare: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  compare: state.data.compare
});

export default connect(mapStateToProps, {
  addToCompare,
  removetToCompare
})(ProductList);
