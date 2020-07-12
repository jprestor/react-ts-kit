import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { State } from '../../reducers/types';
import { FetchData, Dispatch } from '../../actions/types';

// То что вернет mapStateToProps
interface MapStateToPropsReturn {
  loading: boolean;
  error: Error | null;
}

type MapStateToProps = (state: State) => MapStateToPropsReturn;

interface MapDispatchToProps {
  fetchData: FetchData;
}

interface Props extends MapStateToPropsReturn {
  fetchData: ThunkDispatch<any, any, AnyAction>;
  // ThunkDispatch<IStoreState, IExtraDispatchArguments, AnyAction>
}

export { Props, MapStateToProps, MapDispatchToProps };
