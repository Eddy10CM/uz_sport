import { Menu } from "../class/menu";

export const MENUOFFLINE : Menu[] = [
    {
        title: 'Inicio de sesión',
        url: '/uzsport/login'
    },
    {
        title: 'Registro',
        url: '/uzsport/register'
    }
]

export const MENULOGED : Menu[] = [
    {
        title: 'Member',
        url: '/uzsport/member'
    },
    {
        title: 'Cerrar Sesión',
        url: '/uzsport/home'
    }
]