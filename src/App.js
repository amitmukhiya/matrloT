
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchData from './components/SearchData';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
function App() {

  return (
    <Router>
      <Navbar />
      <NotificationContainer />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/search" element={<SearchData />
        } ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
