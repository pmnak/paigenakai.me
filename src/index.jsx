/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';

function Welcome(props) {
  return <div>Welcome</div>;
}

function About(props) {
  return <div> All there is to know about me </div>;
}

function Test(props) {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Nav(props) {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>

      </ul>
    </nav>
  );
}

function FallBack(props) {
  return <div>URL Not Found</div>;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
