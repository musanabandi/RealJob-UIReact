import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import ViewPost from '../views/ViewPost';
import JobSeeker from '../views/JobSeeker'
import AllApplicants from '../views/ListApp'
import JobOwner from '../views/JobOwnerDetails'
import JobProvider from '../views/JobProvider';
import  JobProfile from '../views/Profile'
import MyJobApplication from '../views/MyJobApplicationViews';
import AboutUs from '../views/AboutUsViews';
import Software from '../views/SoftwareViews';
import  EdicationRecordProfile from '../views/Education';




const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />

              <Route component={ViewPost} exact path={["/viewpost"]} />

              <Route component={JobSeeker} exact path={["/createapplication"]} />
              
              <Route component={AllApplicants} exact path={["/applicants"]} />
              <Route component={JobOwner} exact path={["/mypost"]} />
              
              <Route component={JobProvider} exact path={["/createjob"]} />
              <Route component={ JobProfile} exact path={["/profile"]} />
              <Route component={MyJobApplication} exact path={['/myjobapplication']} />
              <Route component={AboutUs} exact path={["/aboutus"]} />
              <Route component={Software} exact path={["/softawarePage"]} />

              <Route component={ EdicationRecordProfile} exact path={['/educationrecord']} />


        </Switch>

    )
}

export default Index;