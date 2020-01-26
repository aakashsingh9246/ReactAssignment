import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner';

const CompareProducts = ({ compare, loading }) => {
  return compare.length <= 1 ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className={`compare-grid${compare.length} my-1 p-2`}>
        {compare.map((currElement, index) => (
          <Fragment key={index}>
            <div className={`compare-prod${index} bg-white p-2`}>
              <h2 className='text-primary'>{currElement.plan.planName} </h2>
              <p>
                Premium : {currElement.totalAmount.amountBreakUps[0].amount}
              </p>
              <div>Sum Insured : {currElement.sumInsured}</div>
              <div>
                <div className='text-primary text-center lead'>
                  Medical Features{' '}
                </div>
                {currElement.plan.planBenefitCategories.MedicalFeatures &&
                  currElement.plan.planBenefitCategories.MedicalFeatures.map(
                    benefit => (
                      <p className='p-1' key={benefit.benefitId}>
                        {' '}
                        {benefit.benefitName} - {benefit.benefitValue}
                      </p>
                    )
                  )}
              </div>
              <div>
                <div className='text-primary text-center lead'>
                  Travel Features{' '}
                </div>
                {currElement.plan.planBenefitCategories.TravelFeatures &&
                  currElement.plan.planBenefitCategories.TravelFeatures.map(
                    benefit => (
                      <p className='p-1' key={benefit.benefitId}>
                        {' '}
                        {benefit.benefitName} - {benefit.benefitValue}
                      </p>
                    )
                  )}
              </div>
              <div className='lead'>Sum Insured : {currElement.sumInsured}</div>
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

CompareProducts.propTypes = {
  compare: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  compare: state.data.compare
});

export default connect(mapStateToProps, {})(CompareProducts);
