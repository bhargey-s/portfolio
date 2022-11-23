import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import ProjectsPage from './Components/ProjectsPage';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
