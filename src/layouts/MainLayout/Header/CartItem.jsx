import { Box, Divider, styled, TextField, Typography } from '@mui/material';
import React from 'react';

const ShoesName = styled(Typography)(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: ' -webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  marginRight: 40,
  marginTop: 16,
}));

function CartItem({ cart }) {
  return (
    <Box>
      <Divider className="pt-2" />
      <Box display="flex" gap={2} alignItems="center" className="relative">
        <img className="w-16 h-16 block" src="https://peaksport.vn/wp-content/uploads/2023/03/13.jpg" alt="img" />
        <Box display="flex" flexDirection="column">
          <ShoesName>{cart.name}</ShoesName>
          <p className="text-sm">
            Màu: {cart.color} <span className="ml-3">Size: {cart.size}</span>
          </p>
          <Box display="flex" mt={2} gap={2} alignItems="center" justifyContent="space-between">
            <TextField type="number" defaultValue={1} className="w-28" size="small" />
            <p className="text-primary text-lg">{cart.price}</p>
          </Box>
        </Box>
        <p className="absolute top-4 right-0 hover:underline cursor-pointer">Xóa</p>
      </Box>
    </Box>
  );
}

export default CartItem;
