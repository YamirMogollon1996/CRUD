import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
// import { Button } from 'react-day-picker';
import AccionesSelet from "./AccionesSelet";
import { useForm } from "react-hook-form";

const namesvalore = [
  "mogollon",
  "sonia",
  "milagros",
  "testimonio",
  "misha",
  "brazil",
];

export interface PropsUser {
  nombre: string;
  apellido: string;
  usuario: string;
  total: number;
}

interface PropsItem {
  handleChanguElemnet: (item: PropsUser) => void;
}

const intialStado: PropsUser = {
  apellido: "",
  nombre: "",
  usuario: "",
  total: 0,
};

const Formulario = ({ handleChanguElemnet }: PropsItem) => {   



  const {
    register,
    formState: { errors  },
    watch,
    handleSubmit,

    reset,
  } = useForm();

  console.log(errors);   


  const hanldeusbmit = handleSubmit((data) => {
    console.log(" la data es de  "   +  data);
    if (JSON.stringify(errors) === "{}") {
    // alert("enviar");
        const {  }  =  data
  
      reset();
    } else {
      alert("no enviar ");
      console.log("no enviar ");
    }
  
  
  });

  return (
    <>


      <form onSubmit={hanldeusbmit}>
        <div className="flex flex-col shadow-xl  p-4  rounded-xl p-5">
          <input
            placeholder="usuario"
            type="text"
            className={` border  p-4   ${
              errors?.usuario && "bg-red-100  border-red-100 "
            }          rounded-lg outline-none focus:border-slate-400 m-2`}
            {...register(`usuario`, {
              required: {
                value: true,
                message: "Necesitas poder poner a un ",
              },
              minLength: {
                value: 2,
                message: "la lonngitud minima es de 2",
              },
              maxLength: {
                value: 20,
                message: "la longtiud maxima es de 20 ",
              },
            })}
          ></input>

          {errors.usuario && (
            <p className="text-red-500  text-start p-2 font-bold">
              {errors.usuario?.message as string}
            </p>
          )}

          <input
            placeholder="contrasenia"
            className={`border   ${
              errors?.contrasenia && "bg-red-100  border-red-100 "
            } p-4  rounded-lg outline-none focus:border-slate-400 m-2`}
            {...register("contrasenia", {
              required: {
                value: true,
                message: "necesitas poner un email ",
              },
              minLength: {
                value: 6,
                message: `la constrasenia tiene que tener minino 8 digitios`,
              },
              maxLength: {
                value: 15,
                message: `la constrasenia tiene que tener maximo 15 digitios`,
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Formato de correo electrónico inválido",
              },
            })}
          ></input>
          {errors.contrasenia && (
            <p className="text-red-500  text-start p-2 font-bold">
              {errors.contrasenia?.message as string}
            </p>
          )}

          <input
            className={`border p-4 rounded-lg m-2 ${
              errors?.contrasenia && "bg-red-100  border-red-100 "
            }  outline-none focus:border-slate-400 m-2`}
            type="number"
            placeholder="dni"
            {...register("dni", {
              required: {
                value: true,
                message: "no tiene el mesnajae",
              },
              minLength: {
                value: 8,
                message: "minino tinee que tener ",
              },
              maxLength: {
                value: 8,
                message: "maximo 7 digitos",
              },
            })}
          ></input>
          <p className="text-red-500  text-start p-2 font-bold">
            {errors.dni?.message as string}
          </p>
          
          <select
            defaultValue={"mirar"}
            className="border p-4 rounded-lg m-2  outline-none focus:border-slate-400 m-2"
            {...register("pais", {
              required: {
                value: true,
                message: "necesita tener un valor ",
              },
            })}
          >
            <p className="text-red-500  text-start p-2 font-bold">
              {errors.pais?.message as string}
            </p>

            <option>mayor</option>
            <option>menor</option>

            <option>alto</option>
          </select>
          <textarea
            placeholder="comentario "
            {...register("comentario", {
              required: {
                value: true,
                message: "necesitas poner un message",
              },
              maxLength: {
                value: 255,
                message: `maximo de de longitug `,
              },
            })}
            className={`disabled:none border rounded-lg p-2 m-2 h-[200px]  ${
              errors?.comentario && "bg-red-100  border-red-100 "
            }  resize-none outline-none focus:border-slate-400`}
          ></textarea>
          <p className="text-red-500  text-start p-2 font-bold">
            {errors.comentario?.message as string}
          </p>

          <div className="box  gap-4 flex gap-2">
            <input
              className="border   p-4 rounded-xl w-[50%]  outline-none focus:border-slate-400 "
              type="date"
              {...register("fechanac", {
                required: {
                  value: true,
                  message: "la fecha de naicmeinto es reqeirda",
                },
                validate: (data: string) => {
                  console.log(data);
                  const datos = new Date().getFullYear();
                  const year = data.split("-")[0];
                  if (datos > parseInt(year)) {
                    return "NO SE PUEDE IGNGRESAR UNA FECHA MAYOR A LA ACTUALL";
                  }
                },
              })}
            ></input>

            {/* <p className="text-red-500   text-start p-2 font-bold">
              {errors.fechanac?.message as string}
            </p> */}

            <input
              className="border p-4 rounded-xl w-[50%]   outline-none focus:border-slate-400 "
              // placeholder="Pais"
              placeholder="continente"
              {...register("continente", {
                required: {
                  value: true,
                  message: "se necesita poner un Pais ",
                },
              })}
            ></input>
          </div>

          <div className="  p-4 flex items-center text-start">
            <input
              className="p-3"
              placeholder="PAIS"
              type="checkbox"
              {...register("terminos", {
                required: {
                  value: true,
                  message: "tienes que acepta los terminos ",
                },
              })}
            ></input>

            <label className="ml-4 font-semibold">Terminos y condiciones</label>
          </div>
          <p className="text-red-500  text-start p-2 font-bold">
            {errors.terminos?.message as string}
          </p>

          <button className="bg-slate-950 text-white  p-4 mt-4   rounded-lg mb-5">
            Agregar
          </button>
        </div>

        <br></br>

        {/* {<pre> {JSON.stringify(watch())} </pre>} */}
      </form>
    </>
  );
};

export default Formulario;
