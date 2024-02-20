export type buttonsType = 'add_box' | 'delete';
export type user = {
    name: string,
    surname: string,
    email: string,
    phone: string
}
export interface ResponseServer {
    users: user[];
}