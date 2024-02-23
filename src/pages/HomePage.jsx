import React from 'react'
import ButtonAppBar from '../components/common/Appbar';
import { useApiContext } from '../components/context/ApiContext';
import { UserTypes, UserItems, UserIcons } from '../helpers/UserTypes';
import AdminHomePage from '../pages/AdminHomePage';
import IndustryDashboard from '../components/dashboard/IndustryDashboard';

const HomePage = () => {
  const { generalSettings } = useApiContext();

  const pageSelector = () => {
    if (generalSettings.role === UserTypes[0]) {
      return <AdminHomePage/>;
    } else if (generalSettings.role === UserTypes[1]) {
      return <IndustryDashboard/>;
    }
  };

  return (
    <div>
      <ButtonAppBar         
        SelectedPage={pageSelector()}
        items={UserItems[generalSettings.role]}
        icons={UserIcons[generalSettings.role]}
      />
    </div>
  );
};

export default HomePage
