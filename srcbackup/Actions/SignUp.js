import {
    FIRST_NAME_CHANGED, LAST_NAME_CHANGED, EMAIL_CHANGED_SIGNUP,
    PASSWORD_CHANGED_SIGNUP, PASSWORD_RETYPE_CHANGED, DATE_DAY_CHANGED,
    DATE_MONTH_CHANGED, DATE_YEAR_CHANGED, GENDER_CHANGED, TERMS_CHANGED,
    SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL
} from './types';

export const firstNameChanged = (text) => {
    return {
        type: FIRST_NAME_CHANGED,
        payload: text

    };
}
export const emailChangedSignUp = (text) => {
    return {
        type: EMAIL_CHANGED_SIGNUP,
        payload: text

    };
}
export const lastNameChanged = (text) => {
    return {
        type: LAST_NAME_CHANGED,
        payload: text
    };
}
export const passwordChangedSignUp = (text) => {
    return {
        type: PASSWORD_CHANGED_SIGNUP,
        payload: text
    };
}
export const passwordRetypeChanged = (text) => {
    return {
        type: PASSWORD_RETYPE_CHANGED,
        payload: text
    };
}
export const dateDayChanged = (text) => {
    return {
        type: DATE_DAY_CHANGED,
        payload: text
    };
}
export const dateMonthChanged = (text) => {
    return {
        type: DATE_MONTH_CHANGED,
        payload: text
    };
}
export const dateYearChanged = (text) => {
    return {
        type: DATE_YEAR_CHANGED,
        payload: text
    };
}
export const genderChanged = (text) => {
    return {
        type: GENDER_CHANGED,
        payload: text
    };
}
export const termsChanged = (text) => {

    return {
        type: TERMS_CHANGED,
        payload: text
    };

}

export const SignUpAction = (firstName, lastName,email, password, day, month, year, gender) => {
    return (dispatch) => {
        dispatch({ type: SIGN_UP })
        fetch('https://mobilebackend.turing.com/customers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: firstName + " " + lastName, email: email, password: password })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                //do something
                if (responseJson.error) {
                    SignUpFail(dispatch, responseJson.error)
                }
                else {
                    SignUpSuccess(dispatch, responseJson)
                }
                console.log(responseJson);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
const SignUpFail = (dispatch, error) => {
    dispatch({
        type: SIGN_UP_FAIL,
        payload: error
    });
    alert("signup fail");

}
const SignUpSuccess = (dispatch, responseJson) => {
    dispatch({
        type: SIGN_UP_SUCCESS,
        payload: responseJson
    });
    alert("signup success");
}


