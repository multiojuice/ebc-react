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


/*
BACKGROUNDS
 */
import homebackground from './website_assets/gage.jpg'
import historybackground from './website_assets/brickandgage.jpg'
import storebackground from './website_assets/still.jpg'
import lessonsbackground from './website_assets/brickteaching.jpg'
import gallerybackground from './website_assets/groupshot.jpg'
import contactbackground from './website_assets/elco.jpg'






import Slide from './components/Slide';
import background from './website_assets/brickandgage.jpg'
import smoothscroll from 'smoothscroll-polyfill';
import scrollSnapPolyfill from 'css-scroll-snap-polyfill'
smoothscroll.polyfill();
scrollSnapPolyfill()

function createSlides(sections) {
  return sections.map(elm => {
    return (
      <Slide image={elm.bg} title={elm.name} innerRef={elm.ref} key={elm.name}>
        {elm.insides}
      </Slide>
    )
  })
}

function App() {
  const sections = [
    {
      name: 'story',
      ref: useRef(),
      bg: historybackground,
      insides: null
    },
    {
      name: 'shop',
      ref: useRef(),
      bg: storebackground,
      insides: ([<Store />])
    },
    {
      name: 'lessons',
      ref: useRef(),
      bg: lessonsbackground,
      insides: null
    },
    {
      name: 'gallery',
      ref: useRef(),
      bg: gallerybackground,
      insides: null
    },
    {
      name: 'contact',
      ref: useRef(),
      bg: contactbackground,
      insides: null
    },
  ]

  const a = {
    name: '',
    ref: useRef(),
    bg: homebackground,
    insides: null
  }

  return (
    <div className="vertical-scroll-snap"> 
      <Slide image={a.bg} title={a.name} innerRef={a.ref} key={a.name}>
        <HomeVideo sections={sections} />
      </Slide>
      {createSlides(sections)}
    </div>
  );
}

export default App;
