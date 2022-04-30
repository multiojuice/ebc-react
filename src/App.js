import React, {useRef} from 'react';
import './App.css';
import './Sticky.scss';
import Loader from './components/Loader';
import HomeVideo from './components/HomeVideo';
import History from './components/History';
import Store from './components/Store';
import Lessons from './components/Lessons';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Slide from './components/Slide';
import background from './website_assets/brickandgage.jpg'
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function App() {
  const sections = [
    {
      name: 'story',
      ref: useRef()
    },
    {
      name: 'shop',
      ref: useRef()
    },
    {
      name: 'lessons',
      ref: useRef()
    },
    {
      name: 'gallery',
      ref: useRef()
    },
    {
      name: 'contact',
      ref: useRef()
    },
  ]

  const homeRef = useRef()

  return (
    <div className="vertical-scroll-snap"> 
      <Slide image={background} title="Home">
        <div>This is just a bunmhc of ataj hfasdfj asd </div>
        <div>This is just a bunmhc of adfads fads fadsf ads fads fas </div>
      </Slide>
      <Slide image={background} title="Home">
        <div>This is just a bunmhc of ataj hfasdfj asd </div>
        <div>This is just a bunmhc of adfads fads fadsf ads fads fas </div>
      </Slide>
    </div>
  );
}

export default App;
