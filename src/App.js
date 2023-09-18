import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './routes/HomePage';
import NotFoundPage from './routes/NotFoundPage';
import AboutPage from './routes/AboutPage';
import './assets/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
