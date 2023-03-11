import { Box, styled } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const AuthWrapper = styled(Box)(() => ({
  background: '#b2b8c8',
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
}));

const StyledBody = styled(Stack)(() => ({
  background: '#fff',
  width: 600,
  height: 'auto',
  padding: 40,
  borderRadius: 16,
}));

function AuthenticationLayout({ children }) {
  return (
    <AuthWrapper>
      <StyledBody>{children}</StyledBody>
    </AuthWrapper>
  );
}

export default AuthenticationLayout;
