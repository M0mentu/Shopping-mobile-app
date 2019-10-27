import {
    EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL
    , FORGET_EMAIL, FORGET_EMAIL_CHANGE, FORGET_EMAIL_SUCCESS, FORGET_EMAIL_FAIL, UPDATE_NAME, FIRST_NAME_AUTH_C, LAST_NAME_AUTH_C, GET_USER_DATA
    , ADDRESS1_AUTH_C, ADDRESS2_AUTH_C, CITY_AUTH_C, REGION_AUTH_C, POSTAL_CODE_AUTH_C,
    COUNTRY_AUTH_C, UPDATE_USER_ADDRESS_AUTH, CREDIT_INPUT, UPDATE_CREDIT, GET_REGIONS, UPDATE_SHIP_PLANS, GET_SHIP_PLANS, MAKE_ORDER
} from '../Actions/types';
const INITIAL_STATE = {
    email: '', password: '',
    firstName: '', lastName: '', dayPhone: '', evePhone: '', mobilePhone: '', creditCard: '', addressOne: '', addressTwo: '', city: '', region: 1, postalCode: '', Country: '', shippingRegionID: ''
    , error: '', loading: null, user: '', getRegions: '', shippingplan: '', shippingplans: '',orderData:'',
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER:
            return { ...state, loading: true, error: '' };

        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, error: '', user: action.payload }

        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload, password: '' }

        case FORGET_EMAIL_CHANGE:
            return { ...state, email: action.payload };

        case FORGET_EMAIL:
            return { ...state, loading: true, error: '' };

        case FORGET_EMAIL_SUCCESS:
            return { ...state, loading: false, error: '' }

        case FORGET_EMAIL_FAIL:
            return { ...state, loading: false, error: action.payload, }

        case FIRST_NAME_AUTH_C:
            return { ...state, firstName: action.payload }

        case LAST_NAME_AUTH_C:
            return { ...state, lastName: action.payload }

        case ADDRESS1_AUTH_C:
            return { ...state, addressOne: action.payload }

        case ADDRESS2_AUTH_C:
            return { ...state, addressTwo: action.payload }

        case CITY_AUTH_C:
            return { ...state, city: action.payload }

        case REGION_AUTH_C:
            return { ...state, region: action.payload }

        case POSTAL_CODE_AUTH_C:
            return { ...state, postalCode: action.payload }

        case UPDATE_USER_ADDRESS_AUTH:
            return { ...state, user: action.payload }

        case COUNTRY_AUTH_C:
            return { ...state, Country: action.payload }


        case UPDATE_NAME:
            return { ...state, firstName: action.firstname, lastName: action.lastname, user: action.payload }

        case GET_USER_DATA:
            return {
                ...state, user: action.payload,
                firstName: action.firstname,
                lastName: action.lastname,
                dayPhone: action.dayphone,
                evePhone: action.evephone,
                mobilePhone: action.mobilephone,
                creditCard: action.creditcard,
                addressOne: action.addressone,
                addressTwo: action.addresstwo,
                city: action.city,
                region: action.region,
                postalCode: action.postalcode,
                Country: action.country,
                shippingRegionID: action.shippingregionid

            }
        case CREDIT_INPUT:
            return { ...state, creditCard: action.payload }

        case UPDATE_CREDIT:
            return { ...state, user: action.payload }

        case GET_REGIONS:
            return { ...state, getRegions: action.payload }

        case UPDATE_SHIP_PLANS:
            return { ...state, shippingplan: action.payload }

        case GET_SHIP_PLANS:
            return { ...state, shippingplans: action.payload }

        case MAKE_ORDER:
            return { ...state, orderData: action.payload }

           
          
        default:
            return state
    }

}
