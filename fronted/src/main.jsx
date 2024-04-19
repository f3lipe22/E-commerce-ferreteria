import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import Shop from './pages/Shop/Shop.jsx';
import SingleProduct from './pages/Shop/SingleProduct.jsx';
import About from './pages/AboutPage/About.jsx';
import Contact from './pages/ContactPage/Contact.jsx';
import CartPage from './pages/Shop/CartPage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
      element: <Home />
    },
    {
      path: "/shop",
    element: <Shop />
    },
    {
      path: "shop/:id",
      element: <SingleProduct/>
    },
    {
      path: "/about",
    element: <About />
    },
    {
      path: "/contact",
    element: <Contact />
    },
    {
      path: "/cart-page",
    element: <CartPage />
    },
    {
      path: "/login",
    element: <Login />
    },
    {
      path: "/sing-up",
    element: <Signup />
  },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
  
)
