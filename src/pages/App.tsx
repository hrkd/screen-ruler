import React, { useEffect, useState, useCallback } from 'react';
import logo from '../logo.svg';
import '../styles/App.scss';
import { delay } from '../utils/delay';
import cn from 'classnames';

function App() {
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const resize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  return (
    <div className="App">
      <section className="w">innerWidth: {width}px</section>
      <section className="h">innerHeight: {height}px</section>
    </div>
  );
}

export default App;
