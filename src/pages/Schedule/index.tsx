import React, { useCallback, useState } from 'react';

import { Container, Content, Section, Popup } from './styles';

import { useAuth } from '../../hooks/auth';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Calendar from '../../components/Calendar';

const Schedule: React.FC = () => {
  const { signOut, user } = useAuth();

  const [seen, setSeen] = useState(false);

  const [scheduleParams, setScheduleParams] = useState([
    {
      business: '',
      workforce: '',
    },
  ]);

  const togglePopup = useCallback(() => {
    setSeen(!seen);
  }, [seen]);

  const handleCreateSchedule = useCallback(() => {
    console.log('clicked');
  }, []);

  return (
    <Container seen={seen}>
      <Sidebar signOut={signOut} />

      <Header
        type="popup"
        title="Schedules"
        buttonText="+ Create schedule"
        onButtonClick={togglePopup}
      />

      <Content>
        <Section>
          {seen && (
            <Popup>
              <button
                type="button"
                onClick={togglePopup}
                style={{
                  backgroundColor: 'transparent',
                  width: '9px',
                  marginLeft: '515px',
                  marginTop: '10px',
                }}
              >
                X
              </button>

              <div>
                <Select
                  name="business"
                  label="Select a business"
                  value={scheduleParams[0].business}
                  onChange={() => {
                    setScheduleParams([
                      ...scheduleParams,
                      { business: 'asd', workforce: '1' },
                    ]);
                  }}
                  options={[
                    { value: '0', label: 'Business 1' },
                    { value: '1', label: 'Business 2' },
                    { value: '2', label: 'Business 3' },
                  ]}
                />

                <Select
                  name="workforce"
                  label="Select a workforce"
                  value={scheduleParams[0].workforce}
                  onChange={() => {
                    setScheduleParams([
                      ...scheduleParams,
                      { business: 'asd', workforce: '1' },
                    ]);
                  }}
                  options={[
                    { value: '0', label: 'Workforce 1' },
                    { value: '1', label: 'Workforce 2' },
                    { value: '2', label: 'Workforce 3' },
                  ]}
                />
              </div>

              <Button type="button" onClick={handleCreateSchedule}>
                Create new schedule
              </Button>
            </Popup>
          )}

          <Calendar />
        </Section>
      </Content>
    </Container>
  );
};
export default Schedule;
