import React from "react";   
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import  {   Button }    from "../components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableFooter,
} from "./ui/table";
import { Trash } from "lucide-react";
import { Welcome, JsonToMydata } from "../Dashboard";
import UseActions from "../helpers/UseActions";   
import ButonAgregarMas from "../ButonAgregarMas";




interface ItemPromsPlaziapi {
  items: JsonToMydata[];
}   
   




const TablaDatosPerson = ({ items }: ItemPromsPlaziapi) => {   

  const{ eleiminardata   }  =  UseActions()




  return (
    <>
      <Table>
        <TableCaption>A list of product name Jugadores Futbol </TableCaption>
        <TableHeader className="bg-slate-200   border-collapse">
          <TableRow>
            <TableHead className="w-[100px]">Nombre</TableHead>
            <TableHead>Descripcion</TableHead>
            <TableHead>edad</TableHead>
            <TableHead>nacionalidad</TableHead>
            <TableHead>posicion</TableHead>
            <TableHead>Equipo Actual</TableHead>

            <TableHead className="text-right">Imagen</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, indice) => (
            <TableRow key={indice}>
              <TableCell className="font-medium">{item.nombre}</TableCell>
              <TableCell>{item.descripcion.slice(0,40)}</TableCell>
              <TableCell>{item.edad}</TableCell>
              <TableCell className="text-right">{item.nacionalidad}</TableCell>
              <TableCell className="text-right">{item.posicion}</TableCell>
              <TableCell className="text-right">{item.equipoActual}</TableCell>
              <TableCell className="border text-right">
                <img
                  width={200}
                  height={200}
                  className="rounded-lg object-cover h-30 w-50 ..."
                  src={item.imagen}
                ></img>
                {/* <div className="text-right">
                  <Trash color="black"></Trash>
                </div> */}
              </TableCell>
              <TableCell>
                <Button onClick={() => eleiminardata(item)}>Eliminar</Button>
              
              
              </TableCell>  

            </TableRow>
          ))}

          {items.length > 0 && (
            <TableFooter>
              {/* <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right"></TableCell>
              </TableRow> */}
            </TableFooter>
          )}
        </TableBody>
      </Table>

      {/* <img src={chiqutio}></img> */}
    </>
  );
};

export default TablaDatosPerson;
