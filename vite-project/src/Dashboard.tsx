import React, { useEffect, useState } from "react";
import TablaDatos from "./components/TablaDatos";
import TablaDatosPerson from "./components/TablaDatosPerson";
import chiquik from "./assets/imagenes/chiquito.jpg";
import messi from "./assets/imagenes/messi.jpg";
import CRISTANO from "./assets/imagenes/cristhiano.png";
import kuto from "./assets/imagenes/kuto.jpg";
import vinicuis from "./assets/imagenes/vinicuis.jpg";
import { Postusuario } from "./helpers/Servidor";
const dataImagenes = [chiquik, messi, CRISTANO, kuto, vinicuis];
import  { UserRoundPlus }   from "lucide-react"
import ButonAgregarMas from "./ButonAgregarMas";





export interface JsonToMydata {     
  id:string , 
  nombre: string;
  descripcion: string;
  edad: number;
  nacionalidad: string;
  posicion: string;
  equipoActual: string;
  imagen?: string;
}

export interface Welcome {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
}

const Dashboard = () => {
  const [arraData, setArraYdATA] = useState<JsonToMydata[]>([]);

  const feching = () => {
    Postusuario()
      .then((data) => {
        if (data != undefined) {
          const Resul = data.map((item, index) => ({
            ...item,
            imagen: dataImagenes[index],
          }));
          setArraYdATA(Resul);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };    
  useEffect(() => {
    feching();
  }, [arraData]);  

  return (
    <>
      <h2 className="text-3xl pb-5  text-slate-400 font-semibold">
        {" "}
        List de jugadores
      </h2>
      {/* <div className="border cursor-pointer   rounded-lg  bg-slate-900 hover:bg-slate-400 text-3xl shadow-lg cursor-pointer p-3  w-[5%] text-center flex justify-center">
        <UserRoundPlus className="text-white">


        </UserRoundPlus>
      </div>   */}

      {/* <br></br> */}
      <div className=" text-start  p-4">


        <ButonAgregarMas></ButonAgregarMas>
      </div>

      <TablaDatosPerson items={arraData}></TablaDatosPerson>
    </>
  );
};

export default Dashboard;
