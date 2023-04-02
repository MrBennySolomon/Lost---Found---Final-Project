import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Controller from './Controller';
import "./App.css";
import Home from "./Home";
import Root from "./Root";
import FindItem from "./FindItem";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import SearchItem from "./SearchItem";
import ErrorPage from "./ErrorPage";
const controller = new Controller();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/",       element: <Home /> },
      { path: "/add",    element: <AddItem controller={controller}/> },
      { path: "/edit",   element: <EditItem controller={controller} /> },
      { path: "/delete", element: <DeleteItem controller={controller} /> },
      { path: "/search", element: <SearchItem controller={controller} /> },
      { path: "/find/:location",   element: <FindItem controller={controller} /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;