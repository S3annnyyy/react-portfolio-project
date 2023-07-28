import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/layout.js'
import Home from './components/Home/home.js'
import About from './components/About/about.js'
import Projects from './components/ProjectSection/projectSection.js';
import ContactPage from './components/ContactPage/contactPage.js';

function App() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=3.0, minimum-scale=1.0"></meta>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/contact' element={<ContactPage />} />
        </Route>
    </Routes>
    </>
  );
}

export default App;
