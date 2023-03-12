import React from 'react';
import { Box } from '@mui/material';
import HeaderLayout from './Header/HeaderLayout';
import FooterLayout from './FooterLayout';
import SimpleSlider from '@/pages/home/Slider';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();

  return (
    <div>
      <HeaderLayout />
      <Box>
        {location.pathname === '/' && <SimpleSlider />}
        <Box className="max-w-[1280px] mx-auto py-24">{children}</Box>
      </Box>
      <FooterLayout />
    </div>
  );
};

export default MainLayout;
