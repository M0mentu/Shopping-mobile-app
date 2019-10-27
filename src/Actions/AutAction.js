import {
  LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, EMAIL_CHANGED, PASSWORD_CHANGED,
  FORGET_EMAIL, FORGET_EMAIL_CHANGE, FORGET_EMAIL_SUCCESS, FORGET_EMAIL_FAIL, UPDATE_NAME, FIRST_NAME_AUTH_C, LAST_NAME_AUTH_C
  , GET_USER_DATA, ADDRESS1_AUTH_C, ADDRESS2_AUTH_C, CITY_AUTH_C, REGION_AUTH_C,
  POSTAL_CODE_AUTH_C, COUNTRY_AUTH_C, UPDATE_USER_ADDRESS_AUTH, CREDIT_INPUT, UPDATE_CREDIT, GET_REGIONS, UPDATE_SHIP_PLANS, GET_SHIP_PLANS
  , MAKE_ORDER,GET_ITEMS_NUMBER
} from './types';
import { Actions, ActionConst } from 'react-native-router-flux';
import email from 'react-native-email'

import { storeData, getData, getID, getUserKey, getCartID, removeCartID } from '../Helper';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text

  };
}
export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
}

export const LoginUser = ({ email, password }) => {
  console.log(email, password)
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })
    fetch('https://mobilebackend.turing.com/customers/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email, password: password
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        if (responseJson.error) {
          loginUserFail(dispatch, responseJson.error)
        }
        else {
          console.log("user", responseJson)
          storeData(responseJson.accessToken)
          loginUserSuccess(dispatch, responseJson)
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

}


const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  alert("Logged success");

  Actions.shopmain({ type: 'reset' });

}

const loginUserFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_USER_FAIL,
    payload: error
  });
  alert("Logged fail");

}
//==========================================================
export const forgetEmailChange = (text) => {
  return {
    type: FORGET_EMAIL_CHANGE,
    payload: text
  };
}
export const forgetEmail = (text) => {
  return (dispatch) => {
    dispatch({ type: FORGET_EMAIL })

    const to = [text]
    forgetEmailSuccess(dispatch) // string or array of email addresses
    email(to, {
      // Optional additional arguments
      //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      bcc: 'ebicgamer@rocketmail.com', // string or array of email addresses
      subject: 'Show how to use',
      body: 'Some body right here'
    }).catch((error) => { forgetEmailfail(dispatch, error) })

  }
}
export const forgetEmailSuccess = () => {
  alert("email success")
  return {
    type: FORGET_EMAIL_SUCCESS,
  };

}
export const forgetEmailfail = (text) => {
  alert("email fail")
  return {
    type: FORGET_EMAIL_FAIL,
    payload: text
  };
}
//========================get user data=========================
export const GetUserData = () => dispatch => {
  console.log("the mighty ")

  getUserKey().then((key) => {
    console.log("the mighty key", key)
    return new Promise((resolve, reject) => {
      const api = `https://mobilebackend.turing.com/customer`
      fetch(api, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "USER-KEY": key
        },


      })
        .then((response) => response.json())
        .then((responseJson) => {

          console.log("get user data", responseJson)
          let x = responseJson.name.split(" ");
          dispatch({
            type: GET_USER_DATA,
            payload: responseJson,
            firstname: x[0],
            lastname: x[1],
            dayphone: responseJson.day_phone,
            evephone: responseJson.eve_phone,
            mobilephone: responseJson.mob_phone,
            creditcard: responseJson.credit_card,
            addressone: responseJson.address_1,
            addresstwo: responseJson.address_2,
            city: responseJson.city,
            region: responseJson.region,
            postalcode: responseJson.postal_code,
            country: responseJson.country,
            shippingregionid: responseJson.shipping_region_id


          })
          resolve(true);
          // return responseJson.cart_id 

        })
        .catch((error) => {
          console.log(error)
          reject(false)

        });

    });
  })
}
//========================update name===========================
export const firstNameUpdate = (text) => {
  return {
    type: FIRST_NAME_AUTH_C,
    payload: text
  }
}
export const addressOneUpdate = (text) => {
  return {
    type: ADDRESS1_AUTH_C,
    payload: text
  }
}

export const addressTwoUpdate = (text) => {
  return {
    type: ADDRESS2_AUTH_C,
    payload: text
  }
}

export const cityUpdate = (text) => {
  return {
    type: CITY_AUTH_C,
    payload: text
  }
}

export const regionUpdate = (text) => {
  return {
    type: REGION_AUTH_C,
    payload: text
  }
}

export const postalUpdate = (text) => {
  return {
    type: POSTAL_CODE_AUTH_C,
    payload: text
  }
}

export const lastNameUpdate = (text) => {
  return {
    type: LAST_NAME_AUTH_C,
    payload: text
  }
}

export const countryUpdate = (text) => {
  return {
    type: COUNTRY_AUTH_C,
    payload: text
  }
}
export const updateName = (name, user) => dispatch => {
  console.log("user keyyyyyyyyyyyyyyyyyyyyyy", name, user)
  return new Promise((resolve, reject) => {
    getUserKey().then((key) => {
      console.log("user key", key)

      const api = `https://mobilebackend.turing.com/customer`
      fetch(api, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "USER-KEY": key
        },
        body: JSON.stringify({
          name: name, email: user.email, day_phone: user.day_phone, eve_phone: user.eve_phone, mob_phone: user.mob_phone
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            console.log('update fialed', responseJson.error)
          }
          else {
            console.log('update suc', responseJson)
            let x = responseJson.name.split(" ")
            dispatch({ type: UPDATE_NAME, payload: responseJson, firstname: x[0], lastname: x[1] })
            resolve(true)
          }
        })
        .catch((error) => {
          console.log(error)
          reject(false)
        });
    })
  })
}
export const updateAddress = (user) => dispatch => {
  console.log("user keyyyyyyyyyyyyyyyyyyyyyy", name, user)
  return new Promise((resolve, reject) => {

    getUserKey().then((key) => {
      console.log("user key", key)

      const api = `https://mobilebackend.turing.com/customers/address`
      fetch(api, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "USER-KEY": key
        },
        body: JSON.stringify({
          address_1: user.addressOne, address_2: user.addressTwo, city: user.city, region: user.region, postal_code: user.postalCode, country: user.Country, shipping_region_id: 1
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            console.log('update address fail', responseJson.error)
          }
          else {
            console.log('update address success', responseJson)
            let x = responseJson.name.split(" ")
            dispatch({ type: UPDATE_NAME, payload: responseJson })
            resolve(true)
          }
        })
        .catch((error) => {
          console.log(error)
          reject(false)
        });
    })
  })
}
//====================================================================
export const CreditCardInput = (text) => {
  return {
    type: CREDIT_INPUT,
    payload: text
  }
}
export const updateCreditCard = (creditCard) => dispatch => {
  return new Promise((resolve, reject) => {

    getUserKey().then((key) => {
      console.log("user key", key)

      const api = `https://mobilebackend.turing.com/customers/creditCard`
      fetch(api, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "USER-KEY": key
        },
        body: JSON.stringify({
          credit_card: creditCard
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.error) {
            console.log('update Credit card fail', responseJson.error)
          }
          else {
            console.log('update Credit card success', responseJson)
            dispatch({ type: UPDATE_CREDIT, payload: responseJson })
            resolve(true)
          }
        })
        .catch((error) => {
          console.log(error)
          reject(false)
        });
    })
  })
}
export const GetRegions = () => dispatch => {



  return new Promise((resolve, reject) => {
    const api = `https://mobilebackend.turing.com/shipping/regions`
    fetch(api, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },


    })
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("regions", responseJson)

        dispatch({
          type: GET_REGIONS,
          payload: responseJson,



        })
        resolve(true);
        // return responseJson.cart_id 

      })
      .catch((error) => {
        console.log(error)
        reject(false)

      });

  });

}
export const GetShipPlans = (region_id) => dispatch => {
  return new Promise((resolve, reject) => {

    const api = `https://mobilebackend.turing.com/shipping/regions/${region_id}`
    fetch(api, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {

        console.log("shippppppppp", responseJson)

        dispatch({
          type: GET_SHIP_PLANS,
          payload: responseJson,
        })
        resolve(responseJson);
        // return responseJson.cart_id 

      })
      .catch((error) => {
        console.log(error)
        reject(false)

      });

  });
}
export const UpdateShipPlans = (text) => {
  return {
    type: UPDATE_SHIP_PLANS,
    payload: text
  }
}
export const makeOrder = (shipping_id, ) => dispatch => {
  getUserKey().then((key) => {
    getID().then((data) => {
      getCartID(data.customer_id).then((data) => {

        return new Promise((resolve, reject) => {

          fetch('https://mobilebackend.turing.com/orders  ', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              "USER-KEY": key
            },
            body: JSON.stringify({
              cart_id: data, shipping_id: shipping_id, tax_id: 1
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson)
              if (responseJson.error) {
                console.log("order fail", responseJson.error)
              }
              else {
                console.log("order success", responseJson)
                dispatch({
                  type: MAKE_ORDER,
                  payload: responseJson
                })
                getID().then((data) => {
                  removeCartID(data.customer_id)
                  dispatch({
                    type: GET_ITEMS_NUMBER,
                    payload: 0
                  })
                  Actions.terms()
                  resolve(responseJson);
                })





              }
            })
            .catch((error) => {
              console.log(error)
              reject(false)

            });
        })
      })

    })
  })
}
