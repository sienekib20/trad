import React, { useEffect } from "react";
import { RouteType } from "../types";
import WebLayout from "./web";
import "../styles/globals.css";


const Layout = ({ label, path, description, element, type }: RouteType) => {
   return (
      <div>
         {
            type == "private" ? (
               <>
                  {/* <SystemLayout description={description || ""} label="label">{element}
                  </SystemLayout> */}
               </>
            ) : (
               <WebLayout>{element}</WebLayout>
            )
         }
      </div>
   );
};

export default Layout;