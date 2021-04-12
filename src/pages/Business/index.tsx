import React from 'react';

import { Container, Content, Section, Card } from './styles';

import { useAuth } from '../../hooks/auth';
import Sidebar from '../../components/Sidebar';

import restaurantImg from '../../tmp/restaurant-one.jpeg';
import CardIcon from '../../components/CardIcon';
import Header from '../../components/Header';

const Business: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header
        type="main"
        title="Businesses"
        buttonText="+ Add business"
        redirectTo="/dashboard/business/add"
      />

      <Content>
        <Section>
          <Card>
            <img src={restaurantImg} alt="Restaurant One" />

            <strong>business.name</strong>

            <div>
              <CardIcon type="edit" />
              <CardIcon type="remove" />
            </div>
          </Card>
          <Card>
            <img src={restaurantImg} alt="Restaurant One" />

            <strong>business.name</strong>

            <div>
              <CardIcon type="edit" />
              <CardIcon type="remove" />
            </div>
          </Card>
        </Section>
      </Content>
    </Container>
  );
};
export default Business;
