import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import ViewPost from '../views/ViewPost';
import JobSeeker from '../views/JobSeeker';
import MyJobApplication from '../views/MyJobApplicationViews';
import AboutUs from '../views/AboutUsViews';
import Software from '../views/SoftwareViews';
import Agriculture from '../views/AgricultureViews';
import Hotel from '../views/HotelViews';
import Health from '../views/HealthViews';
import Business from '../views/BusinessViews';
import Information from '../views/InformationViews';
import Transport from '../views/TransportViews';

const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />

              <Route component={ViewPost} exact path={["/viewpost"]} />

              <Route component={JobSeeker} exact path={["/dashboard"]} />
              <Route component={MyJobApplication} exact path={['/myjobapplication']} />
<Route component={AboutUs} exact path={["/aboutus"]} />
    <Route component={Software} exact path={["/softawarePage"]} />
    <Route component={Agriculture} exact path={["/agriculturePage"]} />
    
    <Route component={Transport} exact path={["/transportPage"]} />
    <Route component={Hotel} exact path={["/hotelPage"]} />
    <Route component={Information} exact path={["/informationPage"]} />
    <Route component={Health} exact path={["/healthPage"]} />
    <Route component={Business} exact path={["/businessPage"]} />
        </Switch>

    )
}

export default Index;