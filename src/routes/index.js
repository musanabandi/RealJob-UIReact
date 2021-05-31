import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';

const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />
             
        </Switch>

    )
}

export default Index;