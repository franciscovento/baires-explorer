import { Box, Container, Typography } from '@mui/material';
import PlaceCard from '../components/PlaceCard';
import { DndContext, DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Place } from '../interfaces/places.interface';
import { useContext } from 'react';
import { PlacesContext, PlacesContextState } from '../context/PlacesContext';

function App() {
  const { places, changuePosition } =
    useContext<PlacesContextState>(PlacesContext);

  const onHandleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (active && over && active.id !== over?.id) {
      changuePosition(+active!.id, +over!.id);
    }
  };

  return (
    <Container>
      <Typography variant="h1">Conoce Buenos Aires</Typography>

      <Typography variant="body1">
        Buenos Aires es una ciudad que tiene mucho para ofrecer. Desde
        atractivos culturales hasta atractivos naturales, Buenos Aires tiene
        todo para que puedas disfrutar de tu estadía.
      </Typography>

      <Box
        sx={{
          marginY: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onHandleDragEnd}
        >
          <SortableContext
            strategy={verticalListSortingStrategy}
            items={places}
          >
            {places.map((item: Place) => (
              <PlaceCard
                key={item.id}
                description={item.description}
                image={item.image}
                name={item.name}
                id={item.id}
                isFavorite={item.isFavorite}
              />
            ))}
          </SortableContext>
        </DndContext>
      </Box>
    </Container>
  );
}

export default App;
