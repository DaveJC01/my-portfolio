
import { ReactNode } from "react";

import { Presentation } from "./contenido";


export interface Navegation {
    label: string;
    content: ReactNode;
}




export const allNavegation = [
    {label: 'Presentacion', content: <Presentation/> },
    {label: 'Sobre mi', content: '<Services/>' },
    {label: 'Proyectos', content:'' },
    {label: 'Contacto', content: '<Services/>' },
];



const [Presentacion, SobreMi, Proyectos, Contacto] = allNavegation;

export const initialTabs = [Presentacion, SobreMi, Proyectos, Contacto]
