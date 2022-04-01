import React, {useRef} from 'react';
import './App.css';
import Loader from './components/Loader';
import HomeVideo from './components/HomeVideo';
import History from './components/History';
import Store from './components/Store';
import Lessons from './components/Lessons';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

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
    <div className="App">
      {/* <Loader /> */}
      <HomeVideo innerRef={homeRef} sections={sections}/>
      <History innerRef={sections[0].ref}/>
      <Store innerRef={sections[1].ref}/>
      <Lessons innerRef={sections[2].ref}/>
      <Gallery innerRef={sections[3].ref}/>
      <Contact innerRef={sections[4].ref}/>
    </div>
  );
}

export default App;
