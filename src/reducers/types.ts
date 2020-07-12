import { AnyAction } from 'redux';

/* State elements */

/* State */
interface State {
  data: {} | null;
  loading: boolean;
  error: Error | null;
}

export { AnyAction, State };
