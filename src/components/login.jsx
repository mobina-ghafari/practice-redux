import { useState } from "react"
import { login , logout } from "./store"
import {useDispatch , useSelector} from 'react-redux'
const Login =() =>{
const [newUsername , setNewUsername] = useState("")
const dispatch  = useDispatch()
const selector = useSelector((state)=> state.user)
    return(
        <div className="mt-5">
            <h1>Login {selector.username}</h1>
          <div className="mt-4 d-flex justify-content-center align-items-center">
          <input className=" rounded p-2" style={{border:"none" ,outline:"none" , border:"1px solid #0d6efd"}} onChange={(event)=> setNewUsername(event.target.value)} />
            <button className="btn btn-primary mx-1" onClick={()=> dispatch(login({username : newUsername}))}>login</button>
            <button className="btn btn-primary mx-1" onClick={()=> dispatch(logout())}>logout</button>
          </div>
        </div>
    )
}
export default Login;