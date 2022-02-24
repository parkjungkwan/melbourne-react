import React, {useState} from 'react' 
import Layout from '../containers/Layout';
import axios  from 'axios';
import { useLinkClickHandler } from 'react-router-dom';
export default function Bmi(){

    const [inputs, setInputs] = useState({
        name: '', height: 0.0, weight: 0.0
    })
    const [name, setName] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        /**const {value, name } = e.target;
        setInputs({
            ...inputs, [name]: value
        })*/
        alert(`입력한 이름 ${document.getElementById("name").value}`)
        setName(document.getElementById("name").value)
        
    }
    const handleClick = (e) => {
        e.preventDefault()
        alert(` 사용자이름: ${inputs["name"]}`)
        /*
        axios.get(`http://localhost:8080/member/bmi/김길동/180.5/80.5`)
            .then((res)=>{
                alert(`답장이 도착했습니다 [내용] ${JSON.stringify(res.data)}`)
            })*/
    }


    return (<Layout>
        <form>
        <h1>Bmi폼</h1>
   
    
    <div>
    <label><b>Username</b></label>
    <input type="text" id="name" onChange={handleChange} /><br />

    <label htmlFor=""><b>height</b></label>
    <input type="text" onChange={handleChange} /><br />

    <label htmlFor=""><b>weight</b></label>
    <input type="text" onChange={handleChange} /><br />
    <button onClick={handleClick}>BMI 체크</button>
    </div> 
    </form>
   
    </Layout>)
}
