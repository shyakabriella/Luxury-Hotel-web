import React from 'react'
import AppRoutes from './routes/AppRoutes';
import ScrollToTopArrow from './components/ScrollToTopArrow';

const App = () => {
  return (
    <>
      <AppRoutes />
      <ScrollToTopArrow />
    </>
  )
}

export default App