import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Button,
  Calendar,
  Avatar,
  Input,
  Select,
} from "./components/ui/barril";
import { Camera } from "lucide-react";

const names = ["mogollon", "osorio", "pedro", "miguel", "montaña", "osoario"]; 
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import ToasterAlter from "./alertas/Toaster";
import { toast } from "sonner";
import AltertaEliminar from "./AltertaEliminar";
import AvatarFac from "./components/Avatar";
import AccionesSelet from "./components/AccionesSelet";
import Formulario from "./components/Formulario";
import { PropsUser } from "./components/Formulario";
import TablaDatos from "./components/TablaDatos";
import CartaPerfil from "./assets/Card";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
export interface Porpsinvocie {
  invoice: string;
  paymentStatus: string;
  totalAmount: string;
  paymentMethod: string;
}

const invoices: Porpsinvocie[] = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

interface PorpsCulomn {
  name: string;
  apellido: string;
  valor: string;
}

function App() {
  const [count, setCount] = useState<Porpsinvocie[]>([]);
  const [submit, setsumibt] = useState<PorpsCulomn>({} as PorpsCulomn);
  const [EstadoItmes, setEstadoItmes] = useState<PropsUser[]>([]);

  const totalsedetalle: number = EstadoItmes.map((item) => item.total).reduce(
    (acum: number, item) => acum + parseInt(item.toString()),
    0
  );

  const handdleClickc = () => {
    console.log("mogollon osorio");
  };

  const handleToogle = (item: Porpsinvocie) => {
    console.log(item);
    setCount(count.filter((acu) => acu.invoice != item.invoice));

    toast.success(`se elimino el usuario ${item.paymentMethod}`, {
      description: "el dia " + new Date().toLocaleDateString(),
      action: {
        label: "confirmador",
        onClick: () => alert("usuario Elimnaido"),
      },
    });
  };

  const handlechangue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsumibt({
      ...submit,
      [e.target.name]: e.target.value,
    });
  };
  const handlechangiedos = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log("mogollon");
  };
  useEffect(() => {
    setCount(invoices);
  }, []);

  const handleChanguElemnet = (item: PropsUser) => {
    setEstadoItmes([...EstadoItmes, item]);
  };

  // useEffect(() => {
  //   totalsedetalle;
  // }, [EstadoItmes]);

  return (
    <>
      {/* <h1>Habar Center</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartaPerfil></CartaPerfil>}></Route>
          <Route path="/sec" element={< Dashboard
></Dashboard> }></Route>
        </Routes>
      </BrowserRouter>

      {/* <CartaPerfil></CartaPerfil> */}
    </>
  );
}

export default App;
