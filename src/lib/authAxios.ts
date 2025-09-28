import axios from 'axios'
import {formInputProps , loginFormProps} from "../types/types"
const SERVER_URL = "http://localhost:9000";

// @desc  Create New User - Register Page
export const createUser = (user:formInputProps) => {
  const url = `${SERVER_URL}/user`;

  console.log("Before Sending: " , user)
  console.log( 'URL : ' , url)
  return axios.post(url, user)
};

// @desc  Check User - Login Page
export const checkUser = (user:loginFormProps) => {
  const url = `${SERVER_URL}/user`;
    return axios.post(url, user)
;};

// @desc  Forget Password - Forgot Pass Page
export const checkIdByUserName = (username : string) => {
  const url = `${SERVER_URL}/user/${username}`
  return axios.get(url)
}

// @desc  Assigning New Password - ReAssign Pass Page
export const updateUserPass = ( password : string , token : string) => {
  const url = `${SERVER_URL}/user`
  return axios.post(url , password , {
    headers : {
      "Authorization" : token
    }
  } )
}