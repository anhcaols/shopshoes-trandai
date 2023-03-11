import { Box, Button, Stack, TextField } from '@mui/material';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    //TODO handle login with api
    // if login success the redirect home page
    navigate('/');
  };
  return (
    <Fragment>
      <form action="#">
        <Stack spacing={3}>
          <Box>
            <h3 className="text-[42px]">Đăng ký</h3>
            <p className="text-[#b2bec3] mt-2">Chào mừng trở lại, vui lòng đăng nhập vào tài khoản của bạn.</p>
          </Box>
          <TextField name="email" label="Email" fullWidth />
          <TextField name="password" label="Mật khẩu" fullWidth />
          <Link to="/auth/forget">
            <p className="cursor-pointer text-right text-primary">Quên mật khẩu?</p>
          </Link>
          <Button type="submit" onClick={handleLogin} variant="contained" size="large">
            Đăng nhập
          </Button>
          <p className="text-center mt-2">
            Bạn chưa có tài khoản? {''}
            <Link to="/auth/register">
              <span className="cursor-pointer text-primary font-medium">Tạo một tài khoản</span>
            </Link>
          </p>
        </Stack>
      </form>
    </Fragment>
  );
}

export default LoginPage;
