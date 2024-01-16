import { useSortable } from '@dnd-kit/sortable';
import { Box, Button, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import { CSS } from '@dnd-kit/utilities';
import { useContext } from 'react';
import { PlacesContext } from '../context/PlacesContext';

interface Props {
  id: number;
  name: string;
  description: string;
  image: string;
  isFavorite?: boolean;
}
const PlaceCard = ({ description, id, image, name, isFavorite }: Props) => {
  const { toggleFavorite } = useContext(PlacesContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const Img = styled('img')({
    width: '50px',
    height: '50px',
    objectFit: 'cover',
    borderRadius: '100%',
  });

  return (
    <Box
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      sx={{
        borderRadius: 5,
        backgroundColor: '#fff',
        padding: 2.5,
      }}
    >
      <Img src={image} alt={name} />
      <Box
        sx={{
          paddingY: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
          }}
        >
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: 2,
          flexWrap: 'wrap',
        }}
      >
        <Button onMouseDown={() => toggleFavorite(id)}>
          {isFavorite ? 'Quitar de favoritos' : 'Marcar como favorito'}
        </Button>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: 'wrap',
          }}
        >
          <Button variant="outlined">Marcar como visitado</Button>
          <Link to={'/detail/1'}>
            <Button variant="contained">Ver más</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default PlaceCard;
