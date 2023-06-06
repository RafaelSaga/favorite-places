import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainNavigation from './shared/Navigation/MainNavigation';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/newplace" element={<NewPlace />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
