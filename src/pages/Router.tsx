import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { MessagePage } from './MessagePage';
import { SignupPage } from './SignupPage';
import { FollowPage } from './FollowPage';
import { Community } from './Community/Sherlocks';
import { CommunityList } from './Community/CommunityList';
import { BookDetail } from './BookDetail';

export const Router = () => {
  return (
    <Switch>
      <Route path="/message" component={MessagePage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} exact />

      <Route path="/follow" component={FollowPage} />
      <Route path="/rooms/:id" component={MessagePage} exact />
      <Route path="/community/:id" component={Community} exact />
      <Route path="/community" component={CommunityList} />
      <Route path="/bookdetail/:id" component={BookDetail} exact />
      <Route path="/">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};
