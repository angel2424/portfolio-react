import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { useLayoutEffect, useState } from "react";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import { createContext } from "react";
import useLocalStorage from "use-local-storage";
import Success from "./pages/Success";

export const ThemeContext = createContext(null);

function App() {
  const [animation, setAnimation] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setAnimation(false);
    }, 2700);
  }, []);

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  let location = useLocation();

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {animation ? (
          <div className="app" id={theme}>
            <Loader />
          </div>
        ) : (
          <div className="app" id={theme}>
            <CustomCursor />
            <Layout>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route path="/success" element={<Success />} />
              </Routes>
            </Layout>
            {location.pathname === "/success" ? "" : <Footer />}
          </div>
        )}
      </ThemeContext.Provider>
    </>
  );
}

export default App;
