import Axios from "axios"
import Cookie from "js-cookie"
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGN_OUT } from '../constant/constantUser'
const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        const { data } = await Axios.post('/api/users/signin', { email, password })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        //utilisation des cookies
        Cookie.set("userInfo", JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}

const signout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: USER_SIGN_OUT })

}
export {signin,signout}