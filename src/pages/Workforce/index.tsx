import React from 'react';

import { Container, Content, Schedule, Section, WorkforceTile } from './styles';

import { useAuth } from '../../hooks/auth';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CardIcon from '../../components/CardIcon';

const Workforce: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header
        type="main"
        title="Workforces"
        buttonText="+ Add workforce"
        redirectTo="/dashboard/workforce/add"
      />

      <Content>
        <Schedule>
          <Section>
            <WorkforceTile>
              <legend> Workforce 1</legend>
              <p>Contains 4 employees</p>
              <div>
                <CardIcon type="edit" />
                <CardIcon type="remove" />
              </div>
            </WorkforceTile>
            <WorkforceTile>
              <legend> Workforce 2</legend>
              <p>Contains 12 employees</p>
              <div>
                <CardIcon type="edit" />
                <CardIcon type="remove" />
              </div>
            </WorkforceTile>
          </Section>

          <Section />
        </Schedule>
      </Content>
    </Container>
  );
};
export default Workforce;
