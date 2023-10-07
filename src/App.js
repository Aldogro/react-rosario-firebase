import { BrowserRouter as Router } from 'react-router-dom';
import { getAnalytics } from 'firebase/analytics';
import { app } from './firebase/firebase';

import './App.css'
import Main from './Main';

function App() {
  getAnalytics(app);

  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App
