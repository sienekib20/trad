import React from "react";
import { TradLogo } from "../../ui/icons/TradIcons";

const PageFooter: React.FC = () => {

   return (
      <>
         <div className="container mt-auto">
            <TradLogo />
            <div className="grid grid-cols-2"></div>
            <div className="flex items-center">
               &copy; { new Date().getFullYear() } Tradulo - Todos os direitos reservados
            </div>
         </div>
      </>
   );

};

export default PageFooter;