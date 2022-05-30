import logo from './logo.svg';
import './App.css';
import Header from "./mycomponents/header";
import { Footer } from './mycomponents/footer';
import { Profile } from './mycomponents/profile';
import { Language } from './mycomponents/languages';
import { Achievements } from './mycomponents/achievements';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Fragment } from 'react';

function App() {
  return (
    <>
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={
        <Fragment>
          <Profile />
          <Language />
          <Achievements title="MY ACHIEVEMENTS"/>
          <Achievements title="MY PROJECTS"/>
          <Achievements title="MY ACADEMICS"/>
        </Fragment>
      }/>
      <Route exact path='/profile' element={<Profile />}></Route>
      <Route exact path='/languages' element={<Language />}></Route>
      <Route exact path='/achievements' element={<Achievements title="MY ACHIEVEMENTS"/>}></Route>
      <Route exact path='/Projects' element={<Achievements title="MY PROJECTS"/>}></Route>
      <Route exact path='/Academics' element={<Achievements title="MY ACADEMICS"/>}></Route>
    
    
    
    
    
    </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
