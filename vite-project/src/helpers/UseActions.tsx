import React from "react";
import { adddata, deleteUser, UpdateUsuario } from "./Servidor";
import { JsonToMydata } from "../Dashboard";

const UseActions = () => {     
  const eleiminardata = (item: JsonToMydata) => {    
    deleteUser(item);
  };
  return { eleiminardata };
};

export default UseActions;
