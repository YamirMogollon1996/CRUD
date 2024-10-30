import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import Formulario from "../components/Formulario";
import UseFormluario from "../UseFormluario";  
import Spinner from "./Spinner";
import Alertas from "../components/Alertas";


const CartaPerfil = () => {
  const { errors, register, hanldeusbmit, watch , cargando } = UseFormluario();

  const click = () => {
    console.log("clcik");
  };

//   console.log(errors);
  return (
    <div className=" mx-auto  p-4">
      <Tabs
        defaultValue="account"
        className="w-[100%]    sm:w-[100%]   lg:w-[50%] mx-auto shadow-lg  "
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">IniciarSession</TabsTrigger>
          <TabsTrigger value="password">Registarse</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <Formulario></Formulario>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Iniciar Session </CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {/* <form onSubmit={submitevente}> */}

              <form onSubmit={hanldeusbmit}>
                <div className="space-y-1">
                  <Label
                    className="text-start  p-2 items-start   float-start"
                    htmlFor="current"
                  >
                    Current password
                  </Label>
                  <Input
                    placeholder="usuario"
                    id="current"
                    type="password "
                    {...register("usuario", {
                      required: {
                        value: true,
                        message: "usuario Requrido",
                      },
                      maxLength: {
                        value: 15,
                        message: "maximo 15 digitios",
                      },
                      minLength: {
                        value: 8,
                        message: "minimo 6 figiyos",
                      },
                    })}
                  />
                  {errors.usuario?.message && (
                    <p className="items-left    text-start font-semibold text-red-600">
                      {errors.usuario?.message as string}
                    </p>
                  )}
                </div>
                {/* </form> */}
                <div className="space-y-1">
                  <Label className="float-start p-2" htmlFor="new">
                    New password
                  </Label>
                  <Input
                    {...register("contrasenia", {
                      required: {
                        value: true,
                        message: "necesito una contrasniea",
                      },
                      maxLength: {
                        value: 15,
                        message: "maximo 15 digitios",
                      },
                      minLength: {
                        value: 8,
                        message: "minimo 6 figiyos",
                      },
                    })}
                    placeholder="contrasenia"
                    id="new"
                    type="password"
                  />
                </div>
                {errors.contrasenia?.message && (
                  <p className="items-left    text-start font-semibold text-red-600">
                    {errors.contrasenia?.message as string}
                  </p>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" onClick={hanldeusbmit}>
                {cargando.cargando ? (
                  <Spinner></Spinner>
                ) : (
                  <p> Iniciar Session</p>
                )}
                {/* Iniciar Session{" "} */}
              </Button>
            </CardFooter>
            <CardFooter>
              <a  className="text-slate-500" href="facebook">No recuerdad la contrasenia </a>
            </CardFooter>
            {cargando.session === false && <Alertas   ><p>No se encontro e usaurio o el usauiro es incorrecto</p></Alertas>}
          </Card>
        </TabsContent>
        <br></br>
      </Tabs>

      {/* <pre>{JSON.stringify(cargando)}</pre> */}
    </div>
  );
};

export default CartaPerfil;
