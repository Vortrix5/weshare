import React from "react";
import {Route} from "react-router"
import { BrowserRouter as Router } from 'react-router-dom'
import { Dimmer, Loader } from "semantic-ui-react";
import HomepageLayout from "./components/Home";
import Doctors from "./components/Doctors/Doctors";
import TableExampleApprove from "./components/Doctors/Doctors";
import MenuExampleSecondaryPointing from "./components/Doctors/Bar";
import Part from "./components/Donors/Donor";
import Formes from "./components/Donors/Form";
import Matched from "./components/Donors/Matched";
import SignUp from "./components/Auth/SignUp/SignUp";



 class App extends React.Component {
  state = { loading: true, authenticated: false, user: null };
  // componentWillMount() {
  //   config.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         authenticated: true,
  //         currentUser: user,
  //         loading: false
  //       });
  //     } else {
  //       this.setState({
  //         authenticated: false,
  //         currentUser: null,
  //         loading: false
  //       });
  //     }
  //   });
  // }
  render() {
    const { authenticated, loading } = this.state;

    // if (loading) {
    //   return <Dimmer active>
    //   <Loader size='massive'>Loading</Loader>
    // </Dimmer>;
    // }

    return (
      <Router>
        <div>
          <Route  path="/signup" component={SignUp} />
          <Route
            exact
            path="/"
            component={HomepageLayout}/>
            <Route
            exact
            path="/docs"
            component={MenuExampleSecondaryPointing}/>
            <Route
            exact
            path="/donate"
            component={Part}/>
            <Route excasr path="/form" component={Formes}/>
            <Route
            exact
            path="/match"
            component={Matched}/>


        </div>
      </Router>
    );
  }
}


export default App