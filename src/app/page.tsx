import React from 'react';
import Test from './testing';
import Topbar from './topbar';
import GoogleMapWithControls from './map';

export default function Home() {
  return (
    <main>
      <Topbar />
      <GoogleMapWithControls />
      <h1>Hello World</h1>

    </main>
  );
}