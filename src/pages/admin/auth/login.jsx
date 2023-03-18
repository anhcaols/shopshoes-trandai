import { Box, Button, Stack, TextField } from '@mui/material';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    //TODO handle login with api
    // if login success the redirect home page
    navigate('/admin');
  };
  return (
    <Fragment>
      <form action="#">
        <Stack spacing={3}>
          <Box>
            <p className="text-[#b2bec3] mt-2">Hãy đăng nhập với tư cách là quản trị viên.</p>
          </Box>
          <TextField name="email" label="Email" fullWidth />
          <TextField name="password" label="Mật khẩu" fullWidth />
          <Button type="submit" onClick={handleLogin} variant="contained" size="large">
            Đăng nhập
          </Button>
          <p className="text-center mt-2">
            <Link to="/admin/auth/register">
              <span className="cursor-pointer text-primary font-medium">Tạo một tài khoản</span>
            </Link>
          </p>
        </Stack>
      </form>
    </Fragment>
  );
}

export default AdminLoginPage;
