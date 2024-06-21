/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  Routes, Route, NavLink, useParams, createBrowserRouter, RouterProvider, Outlet,
} from 'react-router-dom';
import Counter from './components/counter';
import Controls from './components/controls';
import Youtube from './components/youtube';

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/youtube">YouTube</NavLink></li>
      </ul>
    </nav>
  );
}
function About(props) {
  return <div> All there is to know about me </div>;
}

function Welcome(props) {
  return (
    <div>
      Welcome
      <Counter />
      <Controls />
    </div>
  );
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

function NavbarWrapper() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavbarWrapper />,
    children: [
      {
        path: '/',
        Component: Youtube,
      },
      {
        path: '/youtube',
        Component: Youtube,
      },
      {
        path: '*',
        Component: <FallBack />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('main'));
root.render(
  <RouterProvider router={router} />,
);
