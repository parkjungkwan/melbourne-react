import React,{useState} from 'react'
import Layout from '../containers/Layout';
export default function Grade(){
    return <Layout><h1>Grade폼</h1>
    <form>
        <div>
            <label><b>Username</b></label>
            <input type="" /><br />

            <label htmlFor=""><b>kor score</b></label>
            <input type="" /><br />

            <label htmlFor=""><b>eng score</b></label>
            <input type="" /><br />

            <label htmlFor=""><b>math score</b></label>
            <input type="" /><br />
        </div>
    </form>
    </Layout>
}
;