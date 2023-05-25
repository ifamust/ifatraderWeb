import { useTheme } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Dashboard.styles';
import SideBar from '../../components/organisms/SideBar/SideBar';

const DashboardLayout = () => {
  const theme = useTheme();
  return (
    <Container theme={theme}>
      <SideBar />
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
