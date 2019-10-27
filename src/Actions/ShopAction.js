import {
    GET_DEPARTMENT, GET_DEPARTMENT_S, GET_CATEGORY, GET_ITEMS, GET_ITEMS_SUCCESS, SELECTED_PRODUCT, ADD_TO_CART,
    GENERATE_ID, GET_USER_ID, GET_ATTRIBUTES, GET_COLOR_ATR, GET_SIZE_ATR, GET_ITEMS_COUNT, GET_ITEMS_NUMBER, GET_TOTAL_AMOUNT
    , GET_QUANTITY, EMPTY_CART, SEARCH_TEXT, GET_SEARCH_PARAMS, GET_SEARCH
} from './types'
import { ToastAndroid } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { storeCartID, getCartID, getID } from '../Helper';



export const userDecoded = (data) => {
    console.log('doneeeeee55555')
    return {
        type: GET_USER_ID,
        payload: data
    }

}
export const getDepartment = () => {

    return (dispatch) => {
        dispatch({ type: GET_DEPARTMENT })
        fetch('https://mobilebackend.turing.com/departments', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                dispatch({
                    type: GET_DEPARTMENT_S,
                    payload: responseJson
                })
                //                console.log(responseJson[0]['name'])

            })
            .catch((error) => {
                console.log(error)
            });
    }
}

export const GetCategories = (id, color) => dispatch => {
    return new Promise((resolve, reject) => {
        //console.log(id)
        fetch(`https://mobilebackend.turing.com/categories/inDepartment/${id.department_id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {
                //console.log(responseJson)
                dispatch({
                    type: GET_CATEGORY,
                    payload: responseJson,
                    department: id,
                    depColor: color
                })
                resolve(true);

                //console.log(responseJson[0]['name'])

            })
            .catch((error) => {
                console.log(error)
                reject(false)
            });
    }
    );
}

export const GetAllItems = (d_id = 0, c_id = 0, items) => dispatch => {
    console.log("hi")
    const api = d_id == 0 ? `https://mobilebackend.turing.com/products/inCategory/${c_id}` : `https://mobilebackend.turing.com/products/inDepartment/${d_id}`
    const index = d_id == 0 ? c_id : 0;


    dispatch({ type: GET_ITEMS, payload: [] })
    fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    })
        .then((response) => response.json())
        .then((responseJson) => {
            items[index] = responseJson.rows
            console.log(responseJson)
            dispatch({
                type: GET_ITEMS_SUCCESS,
                payload: items,


            })

            //console.log(responseJson[0]['name'])

        })
        .catch((error) => {
            console.log(error)

        });
}

export const SelectProduct = (product) => dispatch => {
    const api = `https://mobilebackend.turing.com/products/${product}/details`
    fetch(api, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },

    })
        .then((response) => response.json())
        .then((responseJson) => {

            console.log("product details", responseJson)
            dispatch({ type: SELECTED_PRODUCT, payload: responseJson[0] })
            Actions.productDetails();
            //console.log(responseJson[0]['name'])

        })
        .catch((error) => {
            console.log(error)

        });
}
export const GetAttributes = (product_id) => dispatch => {
    return new Promise((resolve, reject) => {

        const api = `https://mobilebackend.turing.com/attributes/inProduct/${product_id}`
        fetch(api, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log("product attributes", responseJson)
                dispatch({ type: GET_ATTRIBUTES, payload: responseJson })
                resolve(true);

            })
            .catch((error) => {
                console.log(error)
                reject(false);
            });
    });
}

export const GenerateCart = (user_id) => dispatch => {


    return new Promise((resolve, reject) => {
        const api = `https://mobilebackend.turing.com/shoppingcart/generateUniqueId`
        fetch(api, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

        })
            .then((response) => response.json())
            .then((responseJson) => {

                console.log("unique id", responseJson)
                storeCartID(responseJson.cart_id, user_id)
                dispatch({ type: GENERATE_ID, payload: responseJson.cart_id })
                resolve(responseJson.cart_id);
                // return responseJson.cart_id 

            })
            .catch((error) => {
                console.log(error)
                reject(false)

            });
    });




}
export const AddToCart = (cart_id, product_id, attributes) => dispatch => {
    fetch('https://mobilebackend.turing.com/shoppingcart/add', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            cart_id: cart_id, product_id: product_id, attributes: attributes
        })
    })
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.error) {
                console.log('add item to cart error', responseJson.error)
            }
            else {
                //storeData(responseJson.accessToken)
                dispatch({ type: ADD_TO_CART, payload: responseJson })
                dispatch({ type: GET_COLOR_ATR, payload: '' })
                dispatch({ type: GET_SIZE_ATR, payload: '' })

                console.log('added to card', responseJson);
                return (ToastAndroid.showWithGravityAndOffset(
                    'Order added to cart',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50,
                )
                )
            }
        })
        .catch((error) => {
            console.log(error)

        });
}
export const getColorAtr = (atr) => {
    console.log("getcolor", atr)
    return {
        type: GET_COLOR_ATR,
        payload: atr
    }
}
export const getSizeAtr = (atr) => {
    console.log("getsize", atr)
    return {
        type: GET_SIZE_ATR,
        payload: atr
    }
}
export const getItems = () => dispatch => {
    getID().then((data) => {
        getCartID(data.customer_id).then((data) => {
            const api = `https://mobilebackend.turing.com/shoppingcart/${data}`
            fetch(api, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

            })
                .then((response) => response.json())
                .then((responseJson) => {

                    dispatch({ type: GET_ITEMS_COUNT, payload: responseJson })


                })
                .catch((error) => {
                    console.log(error)

                });
        })
    })


}
export const getItemsNumber = (c) => {
    return {
        type: GET_ITEMS_NUMBER,
        payload: c
    }
}
export const getTotalAmount = () => dispatch => {
    getID().then((data) => {
        getCartID(data.customer_id).then((data) => {
            const api = `https://mobilebackend.turing.com/shoppingcart/totalAmount/${data}`
            fetch(api, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },

            })
                .then((response) => response.json())
                .then((responseJson) => {

                    dispatch({ type: GET_TOTAL_AMOUNT, payload: responseJson })


                })
                .catch((error) => {
                    console.log(error)

                });
        })
    })

}
export const updateQuantity = (item_id, quantity) => dispatch => {
    console.log("item_id", item_id, quantity)
    return new Promise((resolve, reject) => {

        const api = `https://mobilebackend.turing.com/shoppingcart/update/${item_id}`
        fetch(api, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quantity: quantity
            })

        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error) {
                    console.log('update fialed', responseJson.error)
                }
                else {
                    console.log('update suc', responseJson)
                    dispatch({ type: GET_QUANTITY, payload: responseJson })
                    resolve(true)
                }
            })
            .catch((error) => {
                console.log(error)
                reject(false)
            });
    })
}

export const DeleteCart = () => dispatch => {

    getID().then((data) => {
        getCartID(data.customer_id).then((data) => {
            return new Promise((resolve, reject) => {
                const api = `https://mobilebackend.turing.com/shoppingcart/empty/${data}`
                fetch(api, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        cart_id: data
                    })

                })
                    .then((response) => response.json())
                    .then((responseJson) => {
                        if (responseJson.error) {
                            console.log('delete fialed', responseJson.error)
                        }
                        else {
                            console.log('delete complete', responseJson)
                            dispatch({ type: EMPTY_CART, payload: responseJson })
                            resolve(true)
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                        reject(false)
                    });
            })
        })

    })
}
export const SearchItemsAction = (query_string, all_words = 'on', page = 1, limit = 20, description_length = 200) => dispatch => {

    console.log("params", encodeURIComponent(query_string), encodeURIComponent(all_words), encodeURIComponent(page), encodeURIComponent(limit), encodeURIComponent(description_length))
    return new Promise((resolve, reject) => {
        const api = `https://mobilebackend.turing.com/products/search?query_string=${encodeURIComponent(query_string)}&all_words=${encodeURIComponent(all_words)}&page=${encodeURIComponent(page)}&limit=${encodeURIComponent(limit)}&description_length=${encodeURIComponent(description_length)}`
        fetch(api, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            // params: {
            //     "query_string": query_string,
            //     "all_words": all_words,
            //     "page": page,
            //     "limit": limit,
            //     "description_length": description_length
            // }

        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('search results', responseJson)

                dispatch({ type: GET_SEARCH, payload: responseJson })
                resolve(true)


            })

            .catch((error) => {
                console.log(error)
                reject(false)

            });
    })

}
export const searchTextChange = (text) => {
    return {
        type: SEARCH_TEXT,
        payload: text
    }
}

