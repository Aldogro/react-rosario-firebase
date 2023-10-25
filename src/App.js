import { BrowserRouter as Router } from 'react-router-dom';
import { getAnalytics } from 'firebase/analytics';
import { app } from './firebase/firebase';
import { Suspense } from 'react';
import NavBar from './components/NavBar';

import './App.css'
import Main from './Main';

function App() {
  getAnalytics(app);

  return (
    <Router>
      <NavBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Main />
      </Suspense>
    </Router>
  )
}

export default App
