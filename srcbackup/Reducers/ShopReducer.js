
import {
    GET_DEPARTMENT, GET_DEPARTMENT_S, SELECTED_DEPARTMENT, GET_CATEGORY, GET_ITEMS, GET_ITEMS_SUCCESS, SELECTED_PRODUCT, ADD_TO_CART,
    GENERATE_ID, GET_USER_ID, GET_ATTRIBUTES, GET_COLOR_ATR, GET_SIZE_ATR, GET_ITEMS_COUNT, GET_ITEMS_NUMBER, GET_TOTAL_AMOUNT,EMPTY_CART,
    GET_QUANTITY,
} from '../Actions/types';
const INITIAL_STATE = {
    departments: '', loading: true, selectedDepartment: 0,
    categories: '', departmentColor: '', items: [], itemsLoading: true, product: '', cartId: '', cartItems: '',
    user_data: '', attributes: '', colorAtr: '', sizeAtr: '', cartCount: 0, totalAmount: 0, quantity: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_DEPARTMENT:
            return { ...state, loading: true };

        case GET_DEPARTMENT_S:
            return { ...state, loading: false, departments: action.payload };

        // case SELECTED_DEPARTMENT:
        //     return { ...state, selectedDepartment: action.payload }

        case GET_CATEGORY:
            return { ...state, categories: action.payload, selectedDepartment: action.department, departmentColor: action.depColor }

        case GET_ITEMS_SUCCESS:
            console.log("state", state)
            return { ...state, items: action.payload, itemsLoading: false }

        case GET_ITEMS:
            return { ...state, items: action.payload, itemsLoading: true }

        case SELECTED_PRODUCT:
            return { ...state, product: action.payload }

        case GENERATE_ID:
            return { ...state, cartId: action.payload }

        case ADD_TO_CART:
            return { ...state, cartItems: action.payload }

        case GET_USER_ID:
            return { ...state, user_data: action.payload }

        case GET_ATTRIBUTES:
            return { ...state, attributes: action.payload }

        case GET_COLOR_ATR:
            return { ...state, colorAtr: action.payload }

        case GET_SIZE_ATR:
            return { ...state, sizeAtr: action.payload }

        case GET_ITEMS_COUNT:
            return { ...state, cartItems: action.payload }

        case GET_ITEMS_NUMBER:
            return { ...state, cartCount: action.payload }

        case GET_TOTAL_AMOUNT:
            return { ...state, totalAmount: action.payload }

        case GET_QUANTITY:
            return { ...state, quantity: action.payload }
        case EMPTY_CART:
            return { ...state }
        default:
            return state
    }

}



