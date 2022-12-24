import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <h1>My Perfect Blog</h1>
      <HomePage/>
      <AboutPage/>
      <ArticlesListPage/>
      <ArticlePage/>
      <NotFoundPage/>
    </div>
  );
}

export default App;
