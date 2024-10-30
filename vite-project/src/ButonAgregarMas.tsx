import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { Button } from "./components/ui/button";
import { UserRoundPlus } from "lucide-react";
import { useForm } from "react-hook-form";

const ButonAgregarMas = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const HnaldeU = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={HnaldeU}>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {/* <Button variant="outline">ADD</Button>     */}

          <Button>
            <UserRoundPlus></UserRoundPlus>
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Actualizar Jugador </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>

            <input
              {...register("nombre", {
                required: {
                  value: true,
                  message: "neceistas mensaje",
                },
              })}
              placeholder="nombre"
              className="border p-3 rounded-lg focus:flex-shrink-3 focus:border-none "
            ></input>
            <input
              {...register("descripcion", {
                required: {
                  value: true,
                  message: "necesita un manesaje",
                },
              })}
              placeholder="descripcion"
              className="border p-3 rounded-lg"
            ></input>
            <input
              {...register("edad", {
                required: {
                  value: true,
                  message: "necesita edad",
                },
              })}
              placeholder="edad"
              className="border p-3 rounded-lg"
            ></input>
            <input
              placeholder="nacionalidad"
              className="border p-3 rounded-lg"
              {...register("nacionalidad", {
                required: {
                  value: true,
                  message: "necesita edad",
                },
              })}
            ></input>
            <input
              placeholder="Posicion"
              className="border p-3 rounded-lg"
              {...register("posicion", {
                required: {
                  value: true,
                  message: "neceista Posocion ",
                },
              })}
            ></input>
            <input
              placeholder="equipo"
              className="border p-3 rounded-lg"
              {...register("equipo", {
                required: {
                  value: true,
                  message: "neceista Posocion ",
                },
              })}
            ></input>
            <hr></hr>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </form>
  );
};

export default ButonAgregarMas;
