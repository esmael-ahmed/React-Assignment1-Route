
import { Component } from "react";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Layout from "./components/Layout/Layout";
import Notfound from "./components/Notfound/Notfound";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

const router = createHashRouter([
  { path:'', element: <Layout />, children:[
    { path:'home', element: <Home />},
    { path:'about', element: <About />},
    { path:'portfolio', element: <Portfolio />},
    { path:'contact', element: <Contact />},
    { path:'', element: <Home />},
    { path:'*', element: <Notfound />},
  ]},
]);

// const router = createBrowserRouter([
//   {path:'', element: <Layout />, children: [
//     { path:'home', element: <Home />},
//     { path:'about', element: <About />},
//     { path:'about', element: <About />},
//     { path: '*', children: <Notfound />},
//     { path:'', element: <Home />},
//   ]},
// ]);

export default class App extends Component {
  state ={};
  render() {
    return <>
        <RouterProvider router={router} />
    </>
  }
}