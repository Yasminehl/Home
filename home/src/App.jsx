import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import HomePage from './pages/HomePage';
import keycloak from "./Keycloak.js";
import PrivateRoute from "./helpers/PrivateRoute.jsx";
import ProtectedPage from "./pages/Protected.jsx";

function App() {
  return (
  <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route
            path="/secured"
            element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            }
        />
      </Routes>
    </BrowserRouter>
  </ReactKeycloakProvider>
  );
}

export default App;
