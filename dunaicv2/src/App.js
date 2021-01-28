import './App.css';
import { Switch, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import Admin from "./components/Admin";
import Footer from './components/Footer';
import DemoProjects from './components/DemoProjects';

function App() {
  return (
    <>
      <MyNavbar />
      <div className='div-main-container'>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/clients" exact component={Clients} />
          <Route path="/contact" exact component={ContactUs} />
          <Route path="/demoproject" exact component={DemoProjects} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
