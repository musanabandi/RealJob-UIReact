import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';

import ViewPost from '../views/ViewPost';

import JobSeeker from '../views/JobSeeker'


const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />

              <Route component={ViewPost} exact path={["/viewpost"]} />

              <Route component={JobSeeker} exact path={["/dashboard"]} />

             
        </Switch>

    )
}

export default Index;