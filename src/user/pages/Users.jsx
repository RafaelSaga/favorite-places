import React from 'react';
import UsersList from '../components/UsersList';

function Users() {
  const USERS = [
    {
      id: 'u1',
      name: 'Rafael Saga',
      image:
        'https://images.nightcafe.studio/jobs/Urq3nFJXGHzDpgW1M9bl/Urq3nFJXGHzDpgW1M9bl--2--ycpio.jpg',
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default Users;
