import Home from '../views/Home';
import SignIn from '../views/SignIn';
import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import ViewPost from '../views/ViewPost';


import JobSeeker from '../views/JobSeeker'

import Apply from '../views/application'
import AllApplicants from '../views/ListApp'
import JobOwner from '../views/JobOwnerDetails'
import JobProvider from '../views/JobProvider';
import ProfileForm from '../components/ProfileForm';
import MyJobApplication from '../views/MyJobApplicationViews';
import EducationRecord from '../components/EducationRecords';

import JobSeeker from '../views/JobSeeker';
import MyJobApplication from '../views/MyJobApplicationViews';


const Index = () => {

    return (
        <Switch>
            <Route component={Home} exact path={["/", "/home"]} />
            <Route component={SignIn} exact path={["/signin"]} />
              <Route component={SignUp} exact path={["/signup"]} />

              <Route component={ViewPost} exact path={["/viewpost"]} />

              <Route component={JobSeeker} exact path={["/dashboard"]} />
              <Route component={Apply} exact path={["/apply"]} />
              <Route component={AllApplicants} exact path={["/applicants"]} />
              <Route component={JobOwner} exact path={["/mypost"]} />

              <Route component={JobProvider} exact path={["/JobProviderDashboard"]} />
              <Route component={ProfileForm} exact path={["/Profile"]} />
              <Route component={MyJobApplication} exact path={['/myjobapplication']} />

              <Route component={EducationRecord} exact path={['/EducationRecord']} />


        </Switch>

    )
}

export default Index;