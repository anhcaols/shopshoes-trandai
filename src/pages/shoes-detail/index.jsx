import { Box, Grid, styled, Stack, Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ShoesWrapper = styled(Grid)(() => ({
  background: '#fff',
  borderRadius: 4,
  padding: 16,
  width: '100%',
}));

const sizeList = [39, 40, 41];

function ShoesDetailPage() {
  return (
    <Box>
      <ShoesWrapper container>
        <Grid item xs={12} sm={5}>
          <img src="/assets/images/shoes1.jpg" alt="img" />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Stack spacing={2}>
            <h3 className="font-semibold text-2xl">Giày Thể Thao MLB Chunky Liner Mid Basic New York Yankees</h3>
            <p className=" text-[30px] text-[#cc1e1e] font-medium">
              3.350.000 <span className="text-[30px] text-[#cc1e1e] font-semibold">₫</span>
            </p>
            <Box display="flex" alignItems="center" gap={2}>
              <p className="text-[#777]">
                Kiểu dáng: <span className="text-black">Giày thể thao</span>
              </p>
              <p className="text-[#777]">
                Thương hiệu: <span className="text-black">Nike</span>
              </p>
            </Box>
            <p className="text-[#777]">
              Màu sắc: <span className="text-black">Đen</span>
            </p>
            <Box display="flex" alignItems="center" gap={2} className="text-[#777]">
              <p>Kích thước: </p>
              <Box display="flex" gap={2}>
                {sizeList.map((size, index) => (
                  <Button key={index} variant="outlined">
                    {size}
                  </Button>
                ))}
              </Box>
            </Box>
            <Box display="flex" alignItems="center" gap={2} className="text-[#777]">
              <p>Số lượng: </p>
              <Box display="flex" alignItems="center" gap={2}>
                <TextField type="number" defaultValue={1} className="w-20" size="small" />
                <Link to="/cart">
                  <Button variant="contained">Thêm vào giỏ hàng</Button>
                </Link>
              </Box>
            </Box>
          </Stack>
        </Grid>
        <Box mt={8}>
          <p className="font-semibold text-xl">MÔ TẢ SẢN PHẨM</p>
          <Box mt={2}>
            <p>
              Lấy cảm hứng từ hình ảnh của quái thú, Monster 8 là phiên bản mới với thiết kế độc đáo sở hữu phần upper
              mà dân chơi bóng rổ không nên bỏ qua. Phối màu lạ kết hợp cùng những đường khâu tỉ mỉ giúp những mảng màu
              phân tách tạo thành 1 tổng thể hài hoà. Upper có dây đai TPU Velco ở giữa thân hỗ trợ cân bằng và ổn định
              giày cho người đi. Thiết kế cổ cao cùng hệ thống dây giày đan xen linh hoạt giúp tăng khả năng ôm sát bàn
              chân và bảo vệ mắt cá chân. Công nghệ P-Popup trên toàn bộ đế giữa siêu nhẹ, giúp bạn khởi động nhanh cũng
              như phản hồi nhanh chóng các chuyển động chân.
            </p>
          </Box>
        </Box>
      </ShoesWrapper>
    </Box>
  );
}

export default ShoesDetailPage;
