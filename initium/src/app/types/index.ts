import { modalState } from "./store";

export type buttonsType = 'add_box' | 'delete' | 'deleteBlue' | 'save' | 'cancel';
export type user = {
    name: string,
    surname: string,
    email: string,
    phone: string
}
export interface ResponseServer {
    users: user[];
}

export type modalName = {
    [key in modalState]: string
}

export type buttonName = {
    [key in buttonsType]: string
}