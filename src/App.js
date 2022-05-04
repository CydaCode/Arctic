import Nav from './components/Nav/Nav';
import Section1 from './components/Section1/Section1';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';
import MountainClimb from './components/MountainClimb/MountainClimb';
import Gallery from './components/Gallery/Gallery';
import Passes from './components/Passes/Passes';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';

function App() {
  return (
    <div>
      <Nav />
      <UserInfo />
      <Section1 />
      <MountainClimb />
      <Gallery />
      <Passes />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
