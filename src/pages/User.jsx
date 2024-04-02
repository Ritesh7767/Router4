import React, { useEffect, useState } from 'react'
import axios from "axios"
import './User.css'

const User = () => {

    let [result, setResult] = useState()
    useEffect(() => {

        (
            async () => {
                let response = await axios("https://reqres.in/api/users?page=1")
                setResult(response)
            } 
        )()
    }, [])

  return (
    <div className='userContainer'>

        {result?.data?.data?.map(ele => {
            let {id, email, first_name, last_name, avatar} = ele
            return (
                <div>
                    <h2>{`${first_name} ${last_name}`}</h2>
                    <p>{email}</p>
                    <img src={avatar}/>         
                </div>
            )
        })}
    </div>
  )
}

export default User