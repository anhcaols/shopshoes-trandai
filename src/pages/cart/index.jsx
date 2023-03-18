import React from 'react';
import {
  ShoppingBagOutlined,
  DeleteOutlineOutlined,
  AddLocationAltOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 18,
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#16131321',
    color: '#000',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
const rows = [
  {
    id: 1,
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A',
    size: 40,
    color: 'Trắng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
    price: 120000,
    quantity: 2,
    totalMoneys: 240000,
  },
  {
    id: 2,
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A',
    size: 40,
    color: 'Trắng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
    price: 120000,
    quantity: 1,
    totalMoneys: 120000,
  },
  {
    id: 3,
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A',
    size: 40,
    color: 'Trắng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
    price: 120000,
    quantity: 1,
    totalMoneys: 120000,
  },
];

function CartPage() {
  return (
    <Box>
      <Box>
        <Box className="flex items-center gap-2">
          <ShoppingBagOutlined />
          <h2 className="font-semibold text-2xl">Giỏ hàng của bạn</h2>
        </Box>
        <Box className="mt-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>SẢN PHẨM</StyledTableCell>
                  <StyledTableCell align="right">GIÁ</StyledTableCell>
                  <StyledTableCell align="right">SỐ LƯỢNG</StyledTableCell>
                  <StyledTableCell align="right">THÀNH TIỀN</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      <Box className="flex items-center gap-4">
                        <img className="w-20 h-20 cursor-pointer" src={row.image} alt="img" />
                        <Box className="flex gap-1 flex-col">
                          <h2 className="text-base font-bold cursor-pointer">{row.name}</h2>
                          <p>
                            Kích thước: <span>{row.size}</span>
                          </p>
                          <p>
                            Màu: <span className="font-medium">{row.color}</span>
                          </p>
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <p className="font-bold text-base">
                        {row.price}
                        <span className="text-xl  font-semibold">₫</span>
                      </p>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <span className="font-bold text-base">
                        <TextField type="number" defaultValue={row.quantity} className="w-20" size="small" />
                      </span>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <p className="font-bold text-base">
                        {row.totalMoneys}
                        <span className="text-xl  font-semibold">₫</span>
                      </p>
                      <DeleteOutlineOutlined className="cursor-pointer ml-1" />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <Grid container mt={5} spacing={4}>
        <Grid item xs={12} md={8} width="100%">
          <Box>
            <Box className="flex items-center gap-2">
              <AddLocationAltOutlined />
              <h2 className="font-semibold text-2xl">Thông tin nhận hàng</h2>
            </Box>
            <Box className="mt-6 flex flex-col gap-6">
              <Box className="flex gap-3 ">
                <TextField name="username" label="Tên Tài Khoản" fullWidth />
                <TextField name="fullName" label="Họ tên" fullWidth />
              </Box>
              <TextField name="location" label="Địa chỉ" fullWidth />
              <Box className="flex gap-3 ">
                <TextField name="email" label="Email" fullWidth />
                <TextField name="phoneNumber" label="Số điện thoại" fullWidth />
              </Box>
            </Box>
          </Box>
          <Box className=" mt-10">
            <Box className="flex items-center gap-2">
              <LocalShippingOutlined />
              <h2 className="font-semibold text-2xl">Hình Thức Giao Hàng</h2>
            </Box>
            <Box className="mt-1">
              <p>Giao hàng tiêu chuẩn, phục vụ tận tình quý khách trên mọi con đường.</p>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="flex items-center gap-2">
            <PaymentOutlined />
            <h2 className="font-semibold text-2xl">Phương Thức Thanh Toán</h2>
          </Box>
          <Box className="mt-4">
            <p className="text-base font-bold">Thanh toán bằng chuyển khoản</p>
            <p className="text-sm">Chuyển tiền qua ví điện tử</p>
          </Box>
          <Box className="mt-10 flex flex-col gap-2">
            <Box className=" flex items-center justify-between">
              <p className="text-base ">Tạm tính:</p>
              <p className="text-lg font-medium ">
                2.480.000<span className="text-xl  font-semibold">₫</span>
              </p>
            </Box>
            <Box className=" flex items-center justify-between">
              <p className="text-base ">Chiết khấu:</p>
              <p className="text-lg font-medium ">
                0<span className="text-xl  font-semibold">₫</span>
              </p>
            </Box>
            <Box className=" flex items-center justify-between">
              <p className="text-base ">Vận chuyển:</p>
              <p className="text-lg font-medium ">
                20.000<span className="text-xl  font-semibold">₫</span>
              </p>
            </Box>
            <Box className=" flex items-center justify-between">
              <p className="text-lg font-bold">Tổng tiền:</p>
              <p className="text-lg font-medium text-[#cc1e1e]">
                2.500.000<span className="text-xl text-[#cc1e1e] font-semibold">₫</span>
              </p>
            </Box>
          </Box>
          <Box display="flex" mt={4} justifyContent="flex-end" gap={2}>
            <Link to="/">
              <Button variant="outlined">Tiếp tục mua sắm</Button>
            </Link>
            <Button variant="contained">Thanh toán</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartPage;
