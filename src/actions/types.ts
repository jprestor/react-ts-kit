import { Dispatch } from 'redux';

/* Actions */
type AsyncFunc = (...args: any[]) => Promise<any>;

type FetchData = (getData: AsyncFunc) => (dispatch: Dispatch<any>) => void;

export { Dispatch, FetchData, AsyncFunc, };
