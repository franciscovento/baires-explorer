import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/globals.css';
import { createTheme, CssBaseline } from '@mui/material';
import DetailPage from './views/detail.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './views/error-page.tsx';
import { ThemeProvider } from '@emotion/react';
import Root from './views/Root.tsx';
import { PlacesProvider } from './context/PlacesContext.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/detail/:name',
        element: <DetailPage />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4269F3',
    },
    secondary: {
      main: '#252B42',
    },
    text: {
      primary: '#252b41',
      secondary: '#737373',
    },
  },
  typography: {
    h4: {
      fontSize: '18px',
    },
    body1: {
      fontWeight: 300,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode >
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <PlacesProvider>
      <RouterProvider router={router} />
    </PlacesProvider>
  </ThemeProvider>
  // </React.StrictMode>
);
