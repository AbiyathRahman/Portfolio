import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import ProjectDetailsPage from './pages/ProjectDetails';
import NotFoundPage from './pages/NotFound';
import { PortfolioDataProvider } from './context/PortfolioContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <PortfolioDataProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:projectId" element={<ProjectDetailsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PortfolioDataProvider>
    </BrowserRouter>
  );
}

export default App;
