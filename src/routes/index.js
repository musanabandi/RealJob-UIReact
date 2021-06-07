import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import ViewPost from '../views/ViewPost';
import JobSeeker from '../views/JobSeeker';
import MyJobApplication from '../views/MyJobApplicationViews';
import AboutUs from '../views/AboutUsViews';
import Software from '../views/SoftwareViews';


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

             
        </Switch>

    )
}

export default Index;