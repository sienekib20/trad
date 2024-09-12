import { ReactElement } from "react";


export type RouteType = {
   label: string;
   description?: string;
   path: string;
   element: ReactElement;
   type: string;
};