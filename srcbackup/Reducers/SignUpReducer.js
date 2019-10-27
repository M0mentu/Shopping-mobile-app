import {
    FIRST_NAME_CHANGED, LAST_NAME_CHANGED, EMAIL_CHANGED_SIGNUP,
    PASSWORD_CHANGED_SIGNUP, PASSWORD_RETYPE_CHANGED, DATE_DAY_CHANGED,
    DATE_MONTH_CHANGED, DATE_YEAR_CHANGED, GENDER_CHANGED, TERMS_CHANGED,
    SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL
} from '../Actions/types';
const INITIAL_STATE = {
    firstName: '', lastName: '', email: '', password: '', passwordRetype: '',
    day: '', month: '', year: '', gender: 'Male', terms: '', error: '', loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FIRST_NAME_CHANGED:
            return { ...state, firstName: action.payload }

        case LAST_NAME_CHANGED:
            return { ...state, lastName: action.payload }

        case EMAIL_CHANGED_SIGNUP:
            return { ...state, email: action.payload }

        case PASSWORD_CHANGED_SIGNUP:
            return { ...state, password: action.payload }

        case PASSWORD_RETYPE_CHANGED:
            return { ...state, passwordRetype: action.payload }

        case DATE_DAY_CHANGED:
            return { ...state, day: action.payload }

        case DATE_MONTH_CHANGED:
            return { ...state, month: action.payload }

        case DATE_YEAR_CHANGED:
            return { ...state, year: action.payload }

        case GENDER_CHANGED:
            return { ...state, gender: action.payload }

        case TERMS_CHANGED:
            return { ...state, terms: action.payload }

        case SIGN_UP:
            return { ...state, error: '', loading: true }

        case SIGN_UP_SUCCESS:
            return { ...state, error: '', loading: false }

        case SIGN_UP_FAIL:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
    }
}
