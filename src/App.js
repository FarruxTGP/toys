import Navbar from "./components/Navbar";
import "./components/main.css";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ROUTES } from "./routes/routes.js";
function App() {
  




  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        {ROUTES.map((route) => {
          return (
            <Route
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
      {/* <Home /> */}
      {/* <About /> */}
      <Footer />
      </Router>
    </div>
  );
}

export default App;
