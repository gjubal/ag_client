import React, { FormEvent, useCallback, useState } from 'react';
import { FiTrash } from 'react-icons/fi';

import {
  Container,
  Content,
  EmployeeItem,
  RadioBox,
  Section,
  CheckboxGrid,
} from './styles';

import { useAuth } from '../../hooks/auth';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import FormInput from '../../components/FormInput';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import Radio from '../../components/Radio';
import uuid from '../../utils/uuid';
import capitalizer from '../../utils/capitalizer';

const WorkforceForm: React.FC = () => {
  const { signOut, user } = useAuth();

  const [workforce, setWorkforce] = useState([
    {
      id: 0,
      name: '',
      role: '',
      weeklyTargetOfHours: 0,
      preferredShift: 'morning',
      daysAvailable: [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ],
      isManager: false,
    },
  ]);

  const setEmployeeValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedItem = workforce.map((employee, index) => {
        if (index === position) {
          return { ...employee, [field]: value };
        }

        return employee;
      });

      setWorkforce(updatedItem);
    },
    [workforce],
  );

  const updateDayAvailability = useCallback(
    (field: string, input: string) => {
      const updatedEmployee = workforce.map((employee, idx) => {
        if (employee.daysAvailable.includes(input)) {
          // FIXME
          const newArray = employee.daysAvailable.filter(d => d !== input);
          return { ...employee, [field]: newArray };
        }

        const newArr = employee;
        employee.daysAvailable.push(input);
        return newArr;
      });

      setWorkforce(updatedEmployee);
    },
    [workforce],
  );

  const handleAddEmployee = useCallback(() => {
    setWorkforce([
      ...workforce,
      {
        id: uuid(),
        name: '',
        role: '',
        weeklyTargetOfHours: 0,
        preferredShift: '',
        daysAvailable: [],
        isManager: false,
      },
    ]);
  }, [workforce]);

  const handleDeleteEmployee = useCallback(
    (index: number) => {
      setWorkforce(
        workforce.filter(employee => employee.id !== workforce[index].id),
      );
    },
    [workforce],
  );

  const handleCreateWorkforce = useCallback((e: FormEvent) => {
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

  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  return (
    <Container>
      <Sidebar signOut={signOut} />

      <Header type="form" subtitle="Add a workforce" />

      <Content>
        <Section>
          <main>
            <form onSubmit={handleCreateWorkforce}>
              <fieldset>
                <legend>Workforce details</legend>

                <button type="button" onClick={handleAddEmployee}>
                  + Add employee
                </button>

                {workforce.map((employee, index) => {
                  return (
                    <EmployeeItem key={employee.id}>
                      <FormInput
                        name="name"
                        label="Employee Name"
                        value={employee.name}
                        onChange={e =>
                          setEmployeeValue(index, 'name', e.target.value)
                        }
                      />
                      <Select
                        name="role"
                        label="Role"
                        value={employee.role}
                        onChange={e =>
                          setEmployeeValue(index, 'role', e.target.value)
                        }
                        options={[
                          { value: '0', label: 'Insider' },
                          { value: '1', label: 'Driver' },
                          { value: '2', label: 'Team leader' },
                          { value: '3', label: 'Manager' },
                          { value: '4', label: 'Janitor' },
                          { value: '5', label: 'Server' },
                          { value: '6', label: 'Host' },
                          { value: '7', label: 'Member' },
                        ]}
                      />
                      <Select
                        name="weekly_target"
                        label="Weekly target of work hours"
                        value={employee.weeklyTargetOfHours}
                        onChange={e =>
                          setEmployeeValue(
                            index,
                            'weeklyTargetOfHours',
                            e.target.value,
                          )
                        }
                        options={[
                          { value: '0', label: '0' },
                          { value: '1', label: '5' },
                          { value: '2', label: '10' },
                          { value: '3', label: '15' },
                          { value: '4', label: '20' },
                          { value: '5', label: '25' },
                          { value: '6', label: '30' },
                          { value: '7', label: '35' },
                          { value: '8', label: '35' },
                          { value: '9', label: '40' },
                          { value: '10', label: '45' },
                          { value: '11', label: '50' },
                        ]}
                      />

                      <h2>Shift preference</h2>
                      <RadioBox>
                        <Radio
                          name="morning"
                          label="Morning"
                          value={employee.preferredShift}
                          checked={employee.preferredShift === 'morning'}
                          onChange={() =>
                            setEmployeeValue(index, 'preferredShift', 'morning')
                          }
                        />
                        <Radio
                          name="night"
                          label="Night"
                          value={employee.preferredShift}
                          checked={employee.preferredShift === 'night'}
                          onChange={() =>
                            setEmployeeValue(index, 'preferredShift', 'night')
                          }
                        />
                      </RadioBox>

                      <h2>Available days</h2>
                      <CheckboxGrid>
                        {days.map((day, idx) => {
                          return (
                            <Checkbox
                              key={uuid() + idx.toString()}
                              name={day}
                              label={capitalizer(day)}
                              checked={employee.daysAvailable.includes(day)}
                              onChange={() => {
                                updateDayAvailability('daysAvailable', day);
                                console.log(employee.daysAvailable);
                              }}
                            />
                          );
                        })}
                      </CheckboxGrid>

                      <button
                        type="button"
                        onClick={() => handleDeleteEmployee(index)}
                      >
                        <FiTrash />
                      </button>
                    </EmployeeItem>
                  );
                })}
              </fieldset>

              <footer>
                <div>
                  <button type="submit">Create workforce</button>
                </div>
              </footer>
            </form>
          </main>
        </Section>
      </Content>
    </Container>
  );
};
export default WorkforceForm;
