import { buttonName } from "src/app/types";

export const KEY_LOCAL = 'usersInitium';
export const REGEX_NUMBER = new RegExp(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/);
export const BUTTONS_NAME: buttonName = {
    add_box: 'add_box',
    delete: 'delete',
    deleteBlue: 'Удалить',
    save: 'Сохранить',
    cancel: 'Отмена'
}