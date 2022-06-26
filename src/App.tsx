import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.module.less';
import { Header } from './components/Header/Header';
import { LocationMap } from './components/Map/Map';
import { Footer } from "./components/Footer/Footer"
import { AppRoutes } from "./components/Routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes />
      <LocationMap />
      <Footer />
    </>
  );
}

export default App;
