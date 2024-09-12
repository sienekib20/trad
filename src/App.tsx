import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { AppRoutes } from "./pages/routes";
import ProtectedRoutes from "./utils/protectedRoutes";
import Layout from "./layouts";
import PublicRoutes from "./utils/publicRoutes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {AppRoutes.map(({ path, element, label, type, description }) => (
            <Route
              key={path}
              path={path}
              element={
                type === "private" ? (
                  <ProtectedRoutes
                    element={
                      <Layout
                        element={element}
                        label={label}
                        type={type}
                        description={description}
                        path={path}
                      />
                    }
                    path={path}
                  />
                ) : (
                  <PublicRoutes
                    element={
                      <Layout
                        element={element}
                        label={label}
                        type={type}
                        description={description}
                        path={path}
                      />
                    }
                    path={path}
                  />
                )
              }
            />
          ))}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;