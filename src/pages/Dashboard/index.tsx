import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Nav, NavContent, Content, Section } from './styles';

import Sidebar from '../../components/Sidebar';

import { useAuth } from '../../hooks/auth';
import Button from '../../components/Button';

interface MonthAvailabilityItem {
  day: number;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  hourFormatted: string;
  user: {
    name: string;
  };
}

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Nav>
        <NavContent>
          <h1>
            Welcome, <Link to="/profile">user.</Link>
          </h1>
        </NavContent>
      </Nav>

      <Content>
        <Section>
          <strong>What`s next?</strong>

          <Link to="/dashboard/business">
            <Button>Add a business</Button>
          </Link>

          <Link to="/dashboard/workforce">
            <Button>Add workforce</Button>
          </Link>

          <Link to="/dashboard/schedule">
            <Button>Create schedule</Button>
          </Link>
        </Section>
      </Content>
    </Container>
  );
};
export default Dashboard;
