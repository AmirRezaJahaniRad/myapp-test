import axios from 'axios'

export type formInputProps = {
  username:string;
  phonenumber : string;
  email : string;
  usercode: string;
  password : string;
  repassword : string;
  rulesCheck : boolean
}
export type loginFormProps = {
  usercode : string;
  password : string;
}
const SERVER_URL = "http://localhost:9000";

// @desc  Create New User
// @route POST http://localhost:9000/contacts
export const createUser = (user:formInputProps) => {
  const url = `${SERVER_URL}/users`;
  return axios.post(url, user);
};

// @desc  Check User
// @route POST http://localhost:9000/???
export const checkUser = (user:loginFormProps) => {
  const url = `${SERVER_URL}/`;
  return axios.post(url, user);
};