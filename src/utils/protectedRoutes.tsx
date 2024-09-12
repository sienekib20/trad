import React from "react";

import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";


interface ProtectedRoutesProps {
   element: React.ReactNode;
   path: string;
};

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ element, ...rest }) => {
   const { token } = useAuth();

   return !token ? element : <Navigate to="/login" replace />
};

export default ProtectedRoutes;