import { Dispatch, FetchData, AsyncFunc } from './types';
// import { Item } from '../reducers/types';

const fetchDataSuccess = (newItems: any[]) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    payload: newItems,
  };
};

const fetchDataRequest = () => {
  return 'FETCH_DATA_REQUEST';
};

const fetchDataFailure = (error: {}) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    payload: error,
  };
};

const fetchData: FetchData = (getData) => (dispatch) => {
  dispatch(fetchDataRequest());

  getData()
    .then((data) => {
      console.log(data);
      dispatch(fetchDataSuccess(data));
    })
    .catch((error) => {
      dispatch(fetchDataFailure(error));
    });
};

export { fetchData };
