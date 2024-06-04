import React from 'react';
import {
  BrowserRouter, Routes, Route, NavLink, useParams,
} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './style.scss';

function Welcome() {
  return <div>Welcome</div>;
}

function About() {
  return <div>All there is to know about me</div>;
}

function Test() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">Test id1</NavLink></li>
        <li><NavLink to="/test/id2">Test id2</NavLink></li>
      </ul>
    </nav>
  );
}

function FallBack() {
  return <div>URL Not Found</div>;
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

const root = createRoot(document.getElementById('main'));
root.render(<App />);
