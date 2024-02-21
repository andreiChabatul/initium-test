import { modalState } from "./store";

export type buttonsType = 'add_box' | 'delete' | 'deleteBlue' | 'save' | 'cancel';
export type userField = 'name' | 'surname' | 'email' | 'phone';
export type user = {
    [key in userField]: string
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

export type tableName = {
    [key in userField]: string
}