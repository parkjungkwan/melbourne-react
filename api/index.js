import axios  from 'axios';
const SERVER = `http://localhost:8080`
export const memberBmi = bmiRequest => axios.post(`${SERVER}/member/bmi`)
export const memberGrade = gradeRequest => axios.post(`${SERVER}/member/grade`)
export const memberCalc = calcRequest => axios.post(`${SERVER}/member/calc`)
export const memberLogin = loginRequest => axios.post(`${SERVER}/member/login`)


            