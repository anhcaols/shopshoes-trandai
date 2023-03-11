import { Box, Button, Stack, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down('sm'));

  const handleRegister = () => {
    // TODO handle register with api

    // if sign up success the redirect login page
    navigate('/auth/login');
  };
  return (
    <Fragment>
      <form action="#">
        <Stack spacing={3}>
          <Box>
            <h3 className="text-[42px]">Đăng ký</h3>
            <p className="text-[#b2bec3] mt-2">
              Vui lòng đăng ký tài khoản cá nhân của bạn nếu bạn muốn sử dụng tất cả các sản phẩm của chúng tôi.
            </p>
          </Box>
          <Box display="flex" flexDirection={mdDown ? 'column' : 'row'} gap={mdDown ? 3 : 1}>
            <TextField name="username" label="Tên Tài Khoản" fullWidth />
            <TextField name="fullName" label="Họ tên" fullWidth />
          </Box>
          <TextField name="email" label="Email" fullWidth />
          <Box display="flex" flexDirection={mdDown ? 'column' : 'row'} gap={mdDown ? 3 : 1}>
            <TextField name="password" label="Mật khẩu" fullWidth />
            <TextField name="confirm-password" label="Xác nhận mật khẩu" fullWidth />
          </Box>
          <TextField name="Address" label="Địa chỉ" fullWidth />
          <Button onClick={handleRegister} type="submit" variant="contained" size="large">
            Đăng ký
          </Button>
          <p className="text-center mt-2">
            Bạn đã có một tài khoản? {''}
            <Link to="/auth/login">
              <span className="cursor-pointer text-primary font-medium">Đăng nhập</span>
            </Link>
          </p>
        </Stack>
      </form>
    </Fragment>
  );
}

export default RegisterPage;
