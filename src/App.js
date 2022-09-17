import React, { Suspense } from 'react';
import '../src/style/App.css';
// import Weather from './components/Weather'
import Footer from './components/Footer'
import Header from './components/Header'

const PhotoDay = React.lazy(() => import('./components/PhotoDay'));
const Rover = React.lazy(() => import('./components/Curiosity'));
const Opportunity = React.lazy(() => import('./components/Opportunity'));
const Spirit = React.lazy(() => import('./components/Spirit'));

export default function App() {

  return (
    <div className="App" id="home" >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoDay />
      </Suspense>
        {/* <Weather /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Rover />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Opportunity />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Spirit />
      </Suspense>
      <Footer />
    </div>
  )
}


