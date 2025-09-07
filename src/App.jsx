import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AboutPage from "./pages/about/AboutPage"
import LoginPage from "./pages/auth/LoginPage"
import RegisterPage from "./pages/auth/RegisterPage"
import PageNotFound from "./pages/404/PageNotFound"
import MainLayout from "./components/layout/MainLayout"
import MainLayoutLogin from "./components/layout/MainLayoutLogin"


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout/>}> {/* click smth in main layout to redirect to any route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<PageNotFound />} /> {/* if page not found */}
        </Route>

        {/* when user click login or logout, route redirect to layout of Login and Register. and leave of main page */}
        <Route element={<MainLayoutLogin/>}> {/* click smth in main layout to redirect to any route */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} /> {/* if page not found */}
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
