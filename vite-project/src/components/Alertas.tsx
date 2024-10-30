import React from 'react'

import { Alert,AlertDescription,AlertTitle } from "../components/ui/alert"
import{  Terminal  }  from "lucide-react"

interface PropsItem   { 

        children  : JSX.Element
    
}  


const Alertas = ({ children }: PropsItem) => {
  return (
    <Alert className="bg-red-100 border:none text-red-700">
      {/* <Terminal className="h-4 w-4" /> */}
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        {/* You can add components to your app using the cli. */}
        {children}
      </AlertDescription>
    </Alert>
  );
};

export default Alertas