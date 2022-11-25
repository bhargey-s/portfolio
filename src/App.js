import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import ProjectsPage from './Components/ProjectsPage';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeaderMobile from './Components/HeaderMobile';
import { useMediaQuery } from 'react-responsive';


function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  return (
    <div className="App">
      {isMobile ? <HeaderMobile /> : <Header />}
      <Routes>
        <Route path="/portfolio" element={<Main />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
