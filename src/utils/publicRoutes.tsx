import React from "react";

import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";


interface PublicRoutesProps {
   element: React.ReactNode;
   path: string;
};

const PublicRoutes: React.FC<PublicRoutesProps> = ({ element, ...rest }) => {
   const { token } = useAuth();

   return !token ? element : <Navigate to="/system" replace />
};

export default PublicRoutes;