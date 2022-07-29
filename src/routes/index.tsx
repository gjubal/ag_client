import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Workforce from '../pages/Workforce';
import Schedule from '../pages/Schedule';
import Dashboard from '../pages/Dashboard';
import Business from '../pages/Business';
import BusinessForm from '../pages/BusinessForm';
import WorkforceForm from '../pages/WorkforceForm';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/dashboard" isPrivate exact component={Dashboard} />
      <Route
        path="/dashboard/businesses"
        isPrivate
        exact
        component={Business}
      />
      <Route
        path="/dashboard/businesses/add"
        isPrivate
        component={BusinessForm}
      />
      <Route
        path="/dashboard/workforces"
        isPrivate
        exact
        component={Workforce}
      />
      <Route
        path="/dashboard/workforces/add"
        isPrivate
        component={WorkforceForm}
      />
      <Route path="/dashboard/schedules" isPrivate exact component={Schedule} />
    </Switch>
  );
};

export default Routes;
