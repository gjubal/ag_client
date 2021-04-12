import React, { FormEvent, useCallback, useState } from 'react';

import { useHistory } from 'react-router';

import { FiTrash } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';

import { Container, Content, RadioBox, ScheduleItem, Section } from './styles';
import warningIcon from '../../tmp/warningIcon.svg';
import Radio from '../../components/Radio';
import Select from '../../components/Select';
import uuid from '../../utils/uuid';

const BusinessForm: React.FC = () => {
  const { signOut, user } = useAuth();

  const history = useHistory();

  const [businessName, setBusinessName] = useState('');
  const [type, setType] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { id: 0, week_day: '', from: '', to: '' },
  ]);

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      { id: Number(uuid()), week_day: '', from: '', to: '' },
    ]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedItem = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedItem);
    },
    [scheduleItems],
  );

  const handleDeleteScheduleItem = useCallback(
    (index: number) => {
      setScheduleItems(
        scheduleItems.filter(item => item.id !== scheduleItems[index].id),
      );
    },
    [scheduleItems],
  );

  const handleCreateBusiness = useCallback((e: FormEvent) => {
    e.preventDefault();

    // api
    //   .post('classes', {
    //     name,
    //     avatar,
    //     whatsapp,
    //     bio,
    //     subject,
    //     cost: Number(cost),
    //     schedule: scheduleItems,
    //   })
    //   .then(() => {
    //     alert('New business created successfully.');

    //     history.push('/');
    //   })
    //   .catch(() => {
    //     alert('Error while creating new business');
    //   });
  }, []);

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header type="form" subtitle="Add a business" />

      <Content>
        <Section>
          <main>
            <form onSubmit={handleCreateBusiness}>
              <fieldset>
                <legend>Business details</legend>
                <FormInput
                  name="name"
                  label="Name"
                  value={businessName}
                  onChange={e => setBusinessName(e.target.value)}
                />

                <h2>Type</h2>
                <RadioBox>
                  <Radio
                    name="restaurant"
                    label="Restaurant"
                    value={type}
                    checked={type === 'restaurant'}
                    onChange={() => setType('restaurant')}
                  />
                  <Radio
                    name="store"
                    label="Store"
                    value={type}
                    checked={type === 'store'}
                    onChange={() => setType('store')}
                  />
                  <Radio
                    name="office"
                    label="Office"
                    value={type}
                    checked={type === 'office'}
                    onChange={() => setType('office')}
                  />
                </RadioBox>

                <h2>Hours of operation</h2>
                <button type="button" onClick={handleAddNewScheduleItem}>
                  + New day
                </button>

                {scheduleItems.map((scheduleItem, index) => {
                  return (
                    <ScheduleItem key={scheduleItem.id}>
                      <Select
                        name="week_day"
                        label="Week day"
                        value={scheduleItem.week_day}
                        onChange={e => {
                          setScheduleItemValue(
                            index,
                            'week_day',
                            e.target.value,
                          );
                        }}
                        options={[
                          { value: '0', label: 'Sunday' },
                          { value: '1', label: 'Monday' },
                          { value: '2', label: 'Tuesday' },
                          { value: '3', label: 'Wednesday' },
                          { value: '4', label: 'Thursday' },
                          { value: '5', label: 'Friday' },
                          { value: '6', label: 'Saturday' },
                        ]}
                      />
                      <FormInput
                        name="from"
                        label="From"
                        type="time"
                        value={scheduleItem.from}
                        onChange={e => {
                          setScheduleItemValue(index, 'from', e.target.value);
                        }}
                      />
                      <FormInput
                        name="to"
                        label="To"
                        type="time"
                        value={scheduleItem.to}
                        onChange={e => {
                          setScheduleItemValue(index, 'to', e.target.value);
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleDeleteScheduleItem(index)}
                      >
                        <FiTrash />
                      </button>
                    </ScheduleItem>
                  );
                })}
              </fieldset>

              <footer>
                <p>
                  <img src={warningIcon} alt="Important" />
                  Please fill out every field
                </p>
                <div>
                  <button type="submit">Create business</button>
                </div>
              </footer>
            </form>
          </main>
        </Section>
      </Content>
    </Container>
  );
};
export default BusinessForm;
