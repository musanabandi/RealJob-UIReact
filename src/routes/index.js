import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import JobSeeker from '../views/JobSeeker'

const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />
              <Route component={JobSeeker} exact path={["/jobseeker"]} />
             
        </Switch>

    )
}

export default Index;