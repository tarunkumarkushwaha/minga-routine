import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router";
import SavedRoutines from './pages/SavedRoutines.jsx';
import Navbar from './components/Navbar.jsx';
import { RoutineProvider } from "./context/RoutineContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RoutineProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <App />
              </>
            }
          />
          <Route
            path="/savedroutines"
            element={
              <>
                <Navbar />
                <SavedRoutines />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </RoutineProvider>
  </StrictMode>,
)
