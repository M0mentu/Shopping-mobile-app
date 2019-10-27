import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import SignUp from './SignUpReducer';
import ShopReducer from './ShopReducer'

export default combineReducers({
   auth: AuthReducer,
   signup: SignUp,
   myshop:ShopReducer,
});