import {
  UPDATE_CUR_PROD,
  ADD_TO_COMPARE,
  REMOVE_TO_COMPARE,
  CLEAN_COMPARE,
  FILTER_IP,
  FILTER_AREAID,
  SORT_BY_PREMIUM,
  SORT_BY_CREATED,
  REMOVE_SORT
} from '../reducers/types';

// to update the product that needs to be shown on product detail page

export const setCurrProd = id => dispatch => {
  dispatch({
    type: UPDATE_CUR_PROD,
    payload: id
  });
};

// to add product in compare array

export const addToCompare = id => dispatch => {
  dispatch({
    type: ADD_TO_COMPARE,
    payload: id
  });
};

// to remove product from compare array

export const removetToCompare = id => dispatch => {
  dispatch({
    type: REMOVE_TO_COMPARE,
    payload: id
  });
};

//clean compare

export const cleanCompare = () => dispatch => {
  dispatch({
    type: CLEAN_COMPARE
  });
};

// filter

export const filterOnIP = insProvider => dispatch => {
  dispatch({
    type: FILTER_IP,
    payload: insProvider
  });
};

export const filterOnAreaId = id => dispatch => {
  dispatch({
    type: FILTER_AREAID,
    payload: id
  });
};

// sort
export const sortByPremium = () => dispatch => {
  dispatch({
    type: SORT_BY_PREMIUM
  });
};

export const sortByCreate = () => dispatch => {
  dispatch({
    type: SORT_BY_CREATED
  });
};

export const removeSort = () => dispatch => {
  dispatch({
    type: REMOVE_SORT
  });
};
