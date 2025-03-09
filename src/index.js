import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import './App.css';
//import App from './App';
import Home from './pages/Home';
import Team from './pages/Team';
import Courses from './pages/Courses';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error404 from './pages/Error404';
import About from './pages/About';
import Students from './pages/Students';
import Inno_Ini from './pages/Inno_Ini';
import Faculty from './pages/Faculty';


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoutes = createBrowserRouter (
  [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'about',
      element:<About/>
    },
    {
      path:'courses',
      element:<Courses/>
    },
    {
      path:'students',
      element:<Students/>
    },
    {
      path:'faculty',
      element:<Faculty/>
    },
    {
      path:'innovation_initiatives',
      element:<Inno_Ini/>
    },
    {
      path:'team',
      element:<Team/>
    },
    {
      path:'*',
      element:<Error404/>
    }
  ]
)

root.render(
  <React.StrictMode>
    <RouterProvider router={allRoutes}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();