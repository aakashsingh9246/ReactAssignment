import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { filterOnIP, filterOnAreaId } from '../actions/action';
import { connect } from 'react-redux';

const Filter = ({ filterOnIP, filterOnAreaId }) => {
  const [hideInput, setHideInput] = useState(true);
  const [insuranceProvider, setInsuranceProvider] = useState('');
  const [serviceAreaid, setServiceAreaid] = useState('');

  return (
    <Fragment>
      <div className='my-2 filter btn' onClick={e => setHideInput(!hideInput)}>
        Filter
      </div>
      {!hideInput && (
        <div className='form form-text filterText'>
          <div className='my-1'>
            <p>
              <input
                type='text'
                placeholder='Insurance Provider'
                name='insuranceProvider'
                value={insuranceProvider}
                onChange={e => {
                  setInsuranceProvider(e.target.value);
                  filterOnIP(e.target.value);
                }}
              />
            </p>
          </div>
          <p>
            <input
              type='text'
              placeholder='Service Area Id'
              name='serviceAreaid'
              value={serviceAreaid}
              onChange={e => {
                setServiceAreaid(e.target.value);
                filterOnAreaId(e.target.value);
              }}
            />
          </p>
        </div>
      )}
    </Fragment>
  );
};

Filter.propTypes = {
  filterOnIP: PropTypes.func.isRequired,
  filterOnAreaId: PropTypes.func.isRequired
};

export default connect(null, { filterOnIP, filterOnAreaId })(Filter);
