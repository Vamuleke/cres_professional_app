import Axios from "axios"
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL,PROFIL_SAVE_REQUEST, PROFIL_SAVE_SUCCESS, PROFIL_SAVE_FAIL, USER_SIGN_OUT } from '../constant/constantUser'
const signin = (email, password) => async (dispatch) => {
    dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } })
    try {
        const { data } = await Axios.post('/api/users/signin', { email, password })
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: data })
        //utilisation des cookies
        localStorage.setItem("userInfo",JSON.stringify(data))
       
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })
    }
}
 const UpdateProfil = (user)=> async (dispatch)=>{

        try {
           dispatch({type:PROFIL_SAVE_REQUEST, payload: user})
            const {data} = await Axios.put("/api/admin/profile/create/"+user._id,user
            )
            dispatch({type: PROFIL_SAVE_SUCCESS,payload: data})
            
        } catch (error) {
            dispatch({type:PROFIL_SAVE_FAIL,payload: error.message}) 
        }
    }

const signout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
    dispatch({ type: USER_SIGN_OUT })

}
export {signin,signout,UpdateProfil}