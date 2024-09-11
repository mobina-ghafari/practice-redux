import { useSelector } from "react-redux"

const Contact =() =>{
    const seletore = useSelector((state)=> state.user)
    return(
        <h1 className="mt-5">Contact {seletore.username}</h1>
    )
}
export default Contact;