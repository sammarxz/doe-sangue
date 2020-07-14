import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <Link to="/cadastro">Submission</Link>
  </header>
);

export default Header;
