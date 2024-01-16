import { Box, Button, Container, styled } from '@mui/material';
import { useEffect, useState } from 'react';

const DetailPage = () => {
  const totalImages = 3;
  const [mainImage, setMainImage] = useState(0);

  const Img = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease-in-out',
    aspectRatio: '16/9',
  });

  const handleNextImage = () => {
    if (mainImage >= totalImages - 1) return setMainImage(0);
    if (mainImage < 0) return setMainImage(totalImages - 1);
    setMainImage((prev) => prev + 1);
  };

  return (
    <Container>
      <Box
        sx={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            transform: `translateX(-${mainImage * 100}%)`,
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <Img
            src="https://www.lavoz.com.ar/resizer/mneOcxCT-uXDKcUQIDGDVSJr5Yw=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/FGC2LKA3EJCKTE7GJXIIUGD3I4.jpg"
            alt=""
          />
          <Img
            src="https://www.sacyr.com/documents/121856245/123499222/IMG+0+Obelisco+Buenos+Aires.jpg/63faafec-5362-632d-f4ed-e39f74ebc448?t=1697614684017"
            alt=""
          />
          <Img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/Puerto_Madero%2C_Buenos_Aires_%2840689219792%29.jpg"
            alt=""
          />
        </Box>
      </Box>
      <Button onClick={handleNextImage}>Prev</Button>
      <Button onClick={handleNextImage}>Next</Button>
    </Container>
  );
};

export default DetailPage;
