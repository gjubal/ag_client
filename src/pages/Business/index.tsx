import React, { useEffect, useState, useCallback } from 'react';

import { Container, Content, Section, Card } from './styles';

import { useAuth } from '../../hooks/auth';
import Sidebar from '../../components/Sidebar';

import CardIcon from '../../components/CardIcon';
import Header from '../../components/Header';
import api from '../../services/api';
import restaurantImg from '../../tmp/restaurant-one.jpeg';
import officeImg from '../../tmp/officeImg.jpeg';
import storeImg from '../../tmp/storeImg.jpeg';

interface BusinessDay {
  week_day: number;
  from: string;
  to: string;
}

interface Business {
  id: string;
  user_id?: string;
  name: string;
  type: 'restaurant' | 'office' | 'store';
  business_days: BusinessDay[];
}

const Business: React.FC = () => {
  const { signOut, user } = useAuth();

  const [businesses, setBusinesses] = useState<Business[]>([]);

  const handleDeletion = useCallback(
    businessId => {
      api
        .delete(`/dashboard/businesses/${businessId}`, {
          params: {
            user,
          },
        })
        .then(() => {
          setBusinesses(
            businesses.filter(business => business.id !== businessId),
          );
        });
    },
    [businesses, user],
  );

  useEffect(() => {
    api
      .get(`/dashboard/businesses/`, {
        params: {
          user,
        },
      })
      .then(response => {
        setBusinesses(response.data);
      });
  }, [user]);

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header
        type="main"
        title="Businesses"
        buttonText="+ Add business"
        redirectTo="/dashboard/businesses/add"
      />

      <Content>
        <Section>
          {businesses.map(business => (
            <Card key={business.id}>
              {business.type === 'restaurant' && (
                <img src={restaurantImg} alt={business.name} />
              )}
              {business.type === 'office' && (
                <img src={officeImg} alt={business.name} />
              )}
              {business.type === 'store' && (
                <img src={storeImg} alt={business.name} />
              )}

              <strong>{business.name}</strong>

              <div>
                <CardIcon
                  type="button"
                  label="edit"
                  onClick={() => console.log('clicked on edit')}
                />
                <CardIcon
                  type="button"
                  label="remove"
                  onClick={() => handleDeletion(business.id)}
                />
              </div>
            </Card>
          ))}
        </Section>
      </Content>
    </Container>
  );
};
export default Business;
