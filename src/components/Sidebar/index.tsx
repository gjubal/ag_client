import React from 'react';

import { Link } from 'react-router-dom';
import { FiBriefcase, FiClipboard, FiHome, FiPower } from 'react-icons/fi';
import { Container, SidebarContent } from './styles';

import logoImg from '../../assets/logo-up-dashboard.svg';

interface AuthProps {
  signOut(): void;
}

const Sidebar: React.FC<AuthProps> = ({ signOut }) => {
  return (
    <Container>
      <SidebarContent>
        <Link to="/dashboard">
          <img src={logoImg} alt="Agendo" />
        </Link>

        <div>
          <Link
            to="/dashboard/business"
            onClick={() => {
              console.log('clicked on location');
            }}
          >
            <FiHome />
          </Link>

          <Link
            to="/dashboard/workforce"
            onClick={() => {
              console.log('clicked on workforce');
            }}
          >
            <FiBriefcase />
          </Link>

          <Link
            to="/dashboard/schedule"
            onClick={() => {
              console.log('clicked on schedule');
            }}
          >
            <FiClipboard />
          </Link>
        </div>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </SidebarContent>
    </Container>
  );
};

export default Sidebar;
