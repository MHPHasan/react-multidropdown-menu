import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Overview from './pages/Overview'
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports'
import Team from './pages/Team'
import Products from './pages/Products'
import Message from './pages/Message'
import Support from './pages/Support'
import Users from './pages/Users'
import Revenue from './pages/Revenue'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/overview" exact component={Overview} />
        <Route path="/reports" exact component={Reports} />
        <Route path="/reports/reports1" exact component={ReportsOne} />
        <Route path="/reports/reports2" exact component={ReportsTwo} />
        <Route path="/reports/reports3" exact component={ReportsThree} />
        <Route path="/team" exact component={Team} />
        <Route path="/products" exact component={Products} />
        <Route path="/message" exact component={Message} />
        <Route path="/support" exact component={Support} />
        <Route path="/overview/users" exact component={Users} />
        <Route path="/overview/revenue" exact component={Revenue} />
      </Switch>
    </Router>
  );
}

export default App;
