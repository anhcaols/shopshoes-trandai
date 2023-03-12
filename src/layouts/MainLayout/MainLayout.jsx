import React from 'react';
import { Box } from '@mui/material';
import HeaderLayout from './Header/HeaderLayout';
import FooterLayout from './FooterLayout';

const MainLayout = ({ children }) => {
  return (
    <div>
      <HeaderLayout />
      <Box className="max-w-[1280px] flex flex-col justify-center mx-auto" style={{ height: 700 }}>
        {children}
      </Box>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
