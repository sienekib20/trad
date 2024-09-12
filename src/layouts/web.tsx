import React from "react";

const WebLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   return (
      <main className="h-screen overflow-y-auto font-montserrat">{children}</main>
   );
}

export default WebLayout;