import { useEffect } from "react"


const Notes = ()=>{
useEffect(()=>{
    // let token = localStorage.getItem("token")
fetch("https://worrisome-plum-dolphin.cyclic.app/notes",{
    headers:{
        "Content-type":"application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`
    }
}).then(res=>res.json())
.then(data=>console.log(data))
.catch(err=>console.log(err))
},[])
    return(
    <>
        <h2>Noes Dashboard:Check in console</h2>
    </>
)
}
export default Notes