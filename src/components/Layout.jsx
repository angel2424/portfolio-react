import Header from "./Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children, theme }) => {
  const location = useLocation();

  return (
    <div className="wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        className="mask_svg"
      >
        <clipPath id="mask">
          <path
            d="M0,200 A200,200 0,1,1 400,200 A200,200 0,1,1 0,200 z 
                        M100,200 A100,100 0,1,1 300,200 A100,100 0,1,1 100,200 z"
            clipRule="evenodd"
          />
        </clipPath>
      </svg>
      <div className="layer_1 bg-opacity-anim"></div>
      {location.pathname === "/success" ? (
        ""
      ) : (
        <div className="layer_2 bg-opacity-anim"></div>
      )}
      {location.pathname === "/success" ? (
        ""
      ) : (
        <div className="layer_3 bg-opacity-anim"></div>
      )}
      {location.pathname === "/success" ? "" : <Header />}
      {children}
    </div>
  );
};

export default Layout;
