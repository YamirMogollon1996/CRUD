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
interface ProsItem {
  EstadoItmes: Array<PropsUser> | Welcome;
  children?: React.ReactNode;
  totalsedetalle?: number;
}

import React from "react";
import { PropsUser } from "./Formulario";
import { Welcome } from "../Dashboard";
const TablaDatos = ({ EstadoItmes, totalsedetalle }: ProsItem) => {
  return (


    
    <Table>
      <TableCaption>A list of product name </TableCaption>
      <TableHeader className="bg-slate-200   border-collapse">
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {EstadoItmes.map((item) => (
          <TableRow>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell>{item.apellido}</TableCell>
            <TableCell>{item.usuario}</TableCell>
            <TableCell className="text-right">{item.total}</TableCell>
            <TableCell className="border text-right">
              <div className="text-right">
                <Trash color="black"></Trash>
              </div>
            </TableCell>
          </TableRow>
        ))}

        {EstadoItmes.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">
                {totalsedetalle != undefined && totalsedetalle}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </TableBody>
    </Table>
  );
};

export default TablaDatos;
