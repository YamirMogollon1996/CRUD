import React from 'react'
// import { Toaster }  from "../components/ui/sonner"  

import {   Toaster } from "../components/ui/sonner"
import {  toast}from "sonner"

const handleClcik  = () =>{
      toast("mi first toaster")
} 



const ToasterAlter= () => {
  return (

    <>
    
        {/* Toaster() */}
        <Toaster></Toaster>



    </>

)
}

export default ToasterAlter;