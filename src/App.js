import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Containers/Home';
import Footer from './Components/Footer/Footer';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Departments from "./Containers/Departments/Departments";
import Doctors from './Containers/Doctors/Doctors';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Make_Appointment from './Containers/Make_Appointment/Make_Appointment';
import Auth from './Containers/Auth/Auth';
import Counter from './Containers/Counter/Counter';
import Product from './Containers/Product/Product';
import Medicine from './Containers/Medicine/Medicine';
import { MedicationOutlined, ProductionQuantityLimits } from '@mui/icons-material';
import PublicRoute from './Containers/Route/PublicRoute';
import PraivateRoute from './Containers/Route/PraivateRoute';

function App() {
  return (
    <div>
       <Header />
       {/* <Counter /> */}
       <Switch>
         <PublicRoute exact path={"/"} component={Home} />
         <PublicRoute exact path={"/Departments"} component={Departments} />
         <PublicRoute exact path={"/Doctors"} component={Doctors} />
         <PublicRoute exact path={"/About"} component={About} />
         <PublicRoute exact path={"/Contact"} component={Contact} />
         <PraivateRoute exact path={"/Product"} component={Product} />
         <PraivateRoute exact path={"/Medicine"} component={Medicine} />
         <PublicRoute restricted={true} exact path={"/Auth"} component={Auth} />
         <Route exact path={"/Make_Appointment"} component={Make_Appointment} />


       </Switch>
       <Footer />
         
    </div>
  );
}

export default App;
