import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cleanCompare } from '../actions/action';
import Filter from '../homeFeatures/Filter';
import Sorting from '../homeFeatures/Sorting';

const Homepage = ({ allProds, compare, cleanCompare }) => {
  useEffect(() => {
    cleanCompare();
  }, [cleanCompare]);
  return (
    <div>
      <div className='buttons-grid'>
        <div className='back'>
          <Link
            onClick={e => {
              console.log(compare.length);
              if (compare.length <= 1) {
                e.preventDefault();
              }
            }}
            to='/compareProduct'
            className='btn btn-dark my-2'
          >
            Compare Product
          </Link>
        </div>
        <Filter />
        <Sorting />
      </div>
      <h1 className='large text-primary'>Product List</h1>
      <p className='lead'>
        <i className='fab fa-connectdevelop'></i> Browse the list of Products
      </p>
      <div className='profiles'>
        {allProds &&
          allProds.content.map(prod => (
            <ProductList key={prod.plan.id} prodData={prod} />
          ))}
      </div>
    </div>
  );
};

Homepage.propTypes = {
  allProds: PropTypes.object.isRequired,
  cleanCompare: PropTypes.func.isRequired,
  compare: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  allProds: state.data.allProds,
  compare: state.data.compare,
  loading: state.data.loading
});

export default connect(mapStateToProps, { cleanCompare })(Homepage);
