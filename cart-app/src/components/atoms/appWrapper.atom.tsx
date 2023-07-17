import React from 'react';
import './appWrapper.css';

interface Props {
  children: React.ReactNode;
}

const AppWrapper: React.FC<Props> = ({ children }) => {
  return <div className="app-wrapper">{children}</div>;
};

export default AppWrapper;