import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#C4CDD9',
        minHeight: '100vh',
        paddingY: 4,
      }}
    >
      <Outlet />
    </Box>
  );
};

export default Root;
