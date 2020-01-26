import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrProd } from '../actions/action';
import Spinner from './Spinner';
import { Link } from 'react-router-dom';

const ProductDetails = ({ match, currentProduct, setCurrProd, loading }) => {
  useEffect(() => {
    setCurrProd(match.params.id);
  }, [setCurrProd, match.params.id]);

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Home
      </Link>
      <div className='product-grid my-1'>
        <div className='product-top bg-primary p-2'>
          <h1 className='large'>{currentProduct.plan.planName}</h1>
        </div>
        <div className='product-about bg-light p-2'>
          <p>
            Insurance Providers Name :{' '}
            {currentProduct.plan.insuranceProviderName}
          </p>
          <p>Sum Insured : {currentProduct.sumInsured}</p>
        </div>
        <div className='product-med bg-white p-2'>
          <h2 className='text-primary'> Medical Features </h2>
          {currentProduct.plan.planBenefitCategories.MedicalFeatures.length >
          0 ? (
            <Fragment>
              {currentProduct.plan.planBenefitCategories.MedicalFeatures.map(
                feature => (
                  <p key={feature.benefitId}>
                    {' '}
                    {feature.benefitName} : {feature.benefitValue}
                  </p>
                )
              )}
            </Fragment>
          ) : (
            <h4>Medical Feature not found...</h4>
          )}
        </div>
        <div className='product-tra bg-white p-2'>
          <h2 className='text-primary'>Travel Features</h2>
          {currentProduct.plan.planBenefitCategories.TravelFeatures.length >
          0 ? (
            <Fragment>
              {currentProduct.plan.planBenefitCategories.TravelFeatures.map(
                feature => (
                  <p key={feature.benefitId}>
                    {' '}
                    {feature.benefitName} : {feature.benefitValue}
                  </p>
                )
              )}
            </Fragment>
          ) : (
            <h4>Travel feature not found...</h4>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProductDetails.propTypes = {
  currentProduct: PropTypes.object.isRequired,
  setCurrProd: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentProduct: state.data.currentProduct,
  loading: state.data.loading
});

export default connect(mapStateToProps, { setCurrProd })(ProductDetails);
