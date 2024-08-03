import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { async_removeuser } from "../../store/Actions/authActions"

const Logout =  () =>  {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(async_removeuser())
    } , [])
    return <></>

}

export default Logout