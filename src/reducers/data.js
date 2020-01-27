import { dummyData } from '../data/Data';
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
} from './types';

const initialState = {
  currentProduct: dummyData.content[0],
  allProds: dummyData,
  compare: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CUR_PROD:
      return {
        ...state,
        currentProduct: state.allProds.content.filter(
          prod => prod.plan.id === payload
        )[0],
        loading: false
      };
    case ADD_TO_COMPARE:
      return {
        ...state,
        compare: [
          state.allProds.content.filter(prod => prod.plan.id === payload)[0],
          ...state.compare
        ]
      };
    case REMOVE_TO_COMPARE:
      return {
        ...state,
        compare: state.compare.filter(prod => prod.plan.id !== payload)
      };
    case CLEAN_COMPARE:
      return {
        ...state,
        compare: [],
        loading: false
      };
    case FILTER_IP:
      return {
        ...state,
        allProds: {
          ...state.allProds,
          content: dummyData.content.filter(prod =>
            prod.plan.insuranceProviderName
              .toLowerCase()
              .includes(payload.toLowerCase())
          )
        }
      };
    case FILTER_AREAID:
      return {
        ...state,
        allProds: {
          content: dummyData.content.filter(prod =>
            prod.plan.planEligibility.serviceAreaIds[0]
              .toLowerCase()
              .includes(payload.toLowerCase())
          )
        }
      };
    case SORT_BY_PREMIUM:
      return {
        ...state,
        allProds: {
          content: dummyData.content
            .slice()
            .sort((a, b) =>
              a.totalAmount.amount < b.totalAmount.amount ? 1 : -1
            )
        }
      };
    case SORT_BY_CREATED:
      return {
        ...state,
        allProds: {
          content: dummyData.content
            .slice()
            .sort((a, b) => (a.plan.createdAt > b.plan.createdAt ? 1 : -1))
        }
      };
    case REMOVE_SORT:
      return {
        ...state,
        allProds: {
          content: dummyData.content.slice()
        }
      };
    default:
      return state;
  }
}
