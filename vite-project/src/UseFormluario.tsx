import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


interface InicioSession {
  usuario: string;
  contrasenia: string;
}

const intialstate: InicioSession = {
  contrasenia: "",
  usuario: "  ",
};

interface PropsItemValues {
  cargando: boolean;
  session: boolean;
}

const UseFormluario = () => {
  const [cargando, setcargadno] = useState<PropsItemValues>(
    {} as PropsItemValues
  );
  const {
    register,
    watch,
    formState: { errors, isLoading, isSubmitted },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const hanldeusbmit = handleSubmit((data) => {
    // console.log(data.usuario);

    setcargadno({
      ...cargando,
      cargando: true,
    });
    if (JSON.stringify(errors) === "{}") {
      const { contrasenia, usuario } = data;

      setTimeout(() => {
        if (contrasenia === "yamirmogollon" && usuario === "usuario123") {
          // res
          console.log("mogollon");
          console.log(isLoading);
          navigate("/sec");
          setcargadno({
            ...cargando,
            cargando: false,
          });
          setcargadno({
            ...cargando,
            // cargando: false,
            session: true,
          });
        } else {
          console.log("no llego ");

          setcargadno({
            session: false,
            cargando: false,
          });
        }
      }, 2000);
    } else {
      alert("no enviar ");
      console.log("no enviar ");
    }
  });

  return { register, watch, errors, hanldeusbmit, cargando };
};

export default UseFormluario;
