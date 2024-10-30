import axios, { AxiosError, AxiosResponse } from "axios"
import { JsonToMydata } from '../Dashboard';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', // Cambia esto a la URL de tu API// Tiempo de espera en milisegundos
    headers: {
        'Content-Type': 'application/json',
        // Agrega otros encabezados si es necesario
    }
});

export const Postusuario = async (): Promise<JsonToMydata[] | undefined> => {
    try {
        const primero: AxiosResponse = await apiClient.get("/posts")
        const seucndo = primero.data as JsonToMydata[]
        return seucndo
    } catch (error: any) {
        return error.message
    }
}

export const UpdateUsuario = async (datos: JsonToMydata) => {

    try {
        const pri = await apiClient.put('/update', {
            datos
        })
        const secondo = await pri.data
        return secondo
    } catch (error) {

    }
}

export const deleteUser = async (name: JsonToMydata) => {


    try {
        await apiClient.delete(`posts/${name.id}`)
        // const elll = sec.data

        // return elll
    } catch (error) {
        console.log("error")
    }
}


export const adddata = async (ususario: JsonToMydata) => {

    try {

        const secc = await apiClient.post(`add`, {
            ususario
        })
        const tercero = secc.data
        return tercero

    } catch (error) {

    }
}
