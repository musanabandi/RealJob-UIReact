import Home from '../views/Home';
import SignIn from '../views/SignIn';

import SignUp from '../views/SignUp';
import { Route, Switch } from 'react-router-dom';
import ViewPost from '../views/ViewPost';
import JobSeeker from '../views/JobSeeker'
import AllApplicants from '../views/ListApp'
import JobOwner from '../views/JobOwnerDetails'
import JobProvider from '../views/JobProvider';
import  JobProfile from '../views/Profile';
import MyJobApplication from '../views/MyJobApplicationViews';
import AboutUs from '../views/AboutUsViews';
import Software from '../views/SoftwareViews';

import Agriculture from '../views/AgricultureViews';
import Hotel from '../views/HotelViews';
import Health from '../views/HealthViews';
import Business from '../views/BusinessViews';
import Information from '../views/InformationViews';
import Transport from '../views/TransportViews';
import  EdicationRecordProfile from '../views/Education';

import ViewPopup from '../views/ViewPopup';
import ProfileView from '../views/ProfileViews';

import TrainingRecord from '../views/Training';
import Reference from '../views/Reference';
import ProgressView from '../views/dashBoard';
import HomePageOne from '../views/ViewFirstPage'






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
            <Route component={JobProfile} exact path={["/profile"]} />
            <Route component={MyJobApplication} exact path={['/myjobapplication']} />
            <Route component={ViewPopup} exact path={['/viewpopup']} />

            <Route component={AboutUs} exact path={["/aboutus"]} />
            <Route component={Software} exact path={["/softawarePage"]} />
            <Route component={Agriculture} exact path={["/agriculturePage"]} />
    
            <Route component={Transport} exact path={["/transportPage"]} />
            <Route component={Hotel} exact path={["/hotelPage"]} />
            <Route component={Information} exact path={["/informationPage"]} />
            <Route component={Health} exact path={["/healthPage"]} />
            <Route component={Business} exact path={["/businessPage"]} />

            <Route component={AboutUs} exact path={["/aboutus"]} />
            <Route component={Software} exact path={["/softawarePage"]} />

            <Route component={ EdicationRecordProfile} exact path={['/educationrecord']} />
            <Route component={ ProfileView} exact path={['/profileview']} />

            <Route component={AboutUs} exact path={["/aboutus"]} />
            <Route component={Software} exact path={["/softawarePage"]} />
            <Route component={ EdicationRecordProfile} exact path={['/educationrecord']} />

            <Route component={TrainingRecord} exact path={['/training']} />
            <Route component={Reference} exact path={['/reference']} />
            <Route component={ProgressView} exact path={['/dashbord']} />
            <Route component={HomePageOne } exact path={['/homepage']} />


        </Switch>

    )
}

export default Index;