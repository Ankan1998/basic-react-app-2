import React from 'react';
import AppWrapper from '../atoms/appWrapper.atom';


const Header: React.FC = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand">
    <AppWrapper><h4 className="d-inline-block align-middle ml-2"><strong>Shopping</strong></h4></AppWrapper>
  </a>
</nav>
  );
};

export default Header;