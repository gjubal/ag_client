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

      {/* include isPrivate tag in the following components once auth is done */}
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/business" exact component={Business} />
      <Route path="/dashboard/business/add" component={BusinessForm} />
      <Route path="/dashboard/workforce" exact component={Workforce} />
      <Route path="/dashboard/workforce/add" component={WorkforceForm} />
      <Route path="/dashboard/schedule" exact component={Schedule} />
    </Switch>
  );
};

export default Routes;
