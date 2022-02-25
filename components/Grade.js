import React,{useState} from 'react'
import Layout from '../containers/Layout';
export default function Grade(){
    const [inputs, setInputs] = useState({})
    const {name, korscore, engscore, mathscore} = inputs;

    const handleChange =(e)=>{
        e.preventDefault()
        const {value, name} = e.target;
        setInputs({
            ...inputs, [name]:value
        })
    }
    const handleClick =(e)=>{
        e.preventDefault()
        const gradeRequest = {name, korscore, engscore, mathscore}
        alert(`사용자이름: ${JSON.stringify(gradeRequest)}`)

    return <Layout><h1>Grade폼</h1>
    <form>
        <div>
            <label><b>Username</b></label>
            <input type="" name="name" onChange={handleChange}/><br />

            <label htmlFor=""><b>kor score</b></label>
            <input type="" name="korscore" onChange={handleChange}/><br />

            <label htmlFor=""><b>eng score</b></label>
            <input type="" name="engscore" onChange={handleChange}/><br />

            <label htmlFor=""><b>math score</b></label>
            <input type="" name="mathscore" onChange={handleChange} /><br />
            <button onClick={handleClick}>Grade 체크</button>
        </div>
    </form>
    </Layout>
    }
}
