import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenue from "./components/RestrauntMenue";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

/*
* Header
    - logo
    - nav Items
* body 
    - search
    - RestaurantContainer
        - RestaurantCards
            - Img
            - Name of Res, Star Rating, cuisine, delivery time
* footer
    - copyright
    - links
    - Address
    - Contact
*/

const AppLayout = () => {
  return (
    <div className="app" style={{width: "100vw"}}>
      <Header />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenue />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
