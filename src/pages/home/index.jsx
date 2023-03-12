import ShoesItem from '@/components/share-components/shoes/ShoesItem';
import { Box, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Pagination, Select, Stack } from '@mui/material';
import React from 'react';

const shoesList = [
  {
    id: '1',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '2',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '3',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '4',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '1',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '2',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '3',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
  {
    id: '4',
    name: 'Giày Bóng Rổ Nam PEAK Outdoor Monster 8 High Top E224041A - Màu Tím Hồng',
    size: 40,
    price: 1200000,
    color: 'Tím hồng',
    image: 'https://peaksport.vn/wp-content/uploads/2023/03/13.jpg',
  },
];

function HomePage() {
  const [filter, setFilter] = React.useState(1);

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <Box>
      <h2 className=" font-semibold text-4xl text-center">Sản phẩm của chúng tôi</h2>
      <Box display="flex" justifyContent="flex-end" mt={8} mb={3}>
        <FormControl style={{ width: 280 }}>
          <InputLabel id="demo-simple-select-label">Chọn Lọc</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Age"
            onChange={handleChange}
            defaultValue={1}
            input={<OutlinedInput label="Chọn lọc" />}>
            <MenuItem value={1}>Mới nhất</MenuItem>
            <MenuItem value={2}>Thứ tự theo giá: thấp đến cao</MenuItem>
            <MenuItem value={3}>Thứ tự theo giá: cao đến thấp</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={2} width="100%" sx={{ marginLeft: 0 }}>
        {shoesList.map((shoes) => (
          <Grid item xs={6} md={3}>
            <ShoesItem key={shoes.id} shoes={shoes} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" width="100%" mt={8}>
        <Pagination size="large" count={10} shape="rounded" />
      </Box>
    </Box>
  );
}

export default HomePage;
