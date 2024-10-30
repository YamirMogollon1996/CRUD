import React from 'react'
import  {   Avatar, AvatarFallback,AvatarImage} from "./ui/avatar"


const AvatarFac = () => {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" />
         <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-lg font-semibold">mogollon</h2>
      </div>
    </div>

    // <Avatar>
    //   <AvatarImage src="https://github.com/shadcn.png" />
    //   <AvatarFallback>CN</AvatarFallback>
    //   <div>
    //     <h2 className="text-lg font-semibold">pedro</h2>
    //   </div>
    // </Avatar>
  );
}

export default AvatarFac;