import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Produtos from './pages/Produtos';
import CadProdutos from './components/Produtos/CadProdutos';
import EditProdutos from './components/Produtos/EditProdutos';
import Banco from './pages/Banco';
import Salas from './pages/Salas';
import Autenticacao from './pages/Autenticacao';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Produtos/>,
        children: [
          {
            path: "/",
            element: <CadProdutos/>
          },
          {
            path: "/editProds",
            element: <EditProdutos/>
          }
        ]
      },
      {
        path: "/banco",
        element: <Banco/>
      },
      {
        path: "/salas",
        element: <Salas/>
      }
    ]
  },
  {
    path: "/auth",
    element: <Autenticacao/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
