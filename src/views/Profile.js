import React from 'react';
import MainLayout from '../components/MainLayout';
// import JobProviderDashBoard from '../components/JobProviderDashBoard';
import ProfileForm from '../components/ProfileForm';

const JobProvider =()=> {
    return(
       <MainLayout>
 {/* <JobProviderDashBoard></JobProviderDashBoard> */}
 <ProfileForm></ProfileForm>
       </MainLayout>
    )
}
export  default  JobProvider;