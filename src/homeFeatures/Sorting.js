import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { sortByPremium, sortByCreate, removeSort } from '../actions/action';
import { connect } from 'react-redux';

const Sorting = ({ sortByPremium, sortByCreate, removeSort }) => {
  const [hideInput, setHideInput] = useState(true);
  const [premium, setPremium] = useState(false);
  const [created, setCreated] = useState(false);

  return (
    <Fragment>
      <div className='my-2 sorting btn' onClick={e => setHideInput(!hideInput)}>
        Sorting
      </div>
      {!hideInput && (
        <Fragment>
          <div className='form my-1 sortcheck'>
            <p>
              <input
                type='checkbox'
                name='premium'
                checked={premium}
                value={premium}
                onChange={e => {
                  setPremium(!premium);
                  premium ? removeSort() : sortByPremium();
                }}
              />{' '}
              Premium Amount
            </p>

            <p>
              <input
                type='checkbox'
                name='created'
                checked={created}
                value={created}
                onChange={e => {
                  setCreated(!created);
                  created ? removeSort() : sortByCreate();
                }}
              />{' '}
              Created By
            </p>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Sorting.propTypes = {
  sortByPremium: PropTypes.func.isRequired,
  sortByCreate: PropTypes.func.isRequired,
  removeSort: PropTypes.func.isRequired
};

export default connect(null, { sortByPremium, sortByCreate, removeSort })(
  Sorting
);
