import React from 'react';
import MainLayout from '../components/MainLayout';
import ProfileForm from '../components/ProfileForm';
import EducationRecord from '../components/EducationRecords';

const JobProfile =()=> {
    return(
       <MainLayout>

 <ProfileForm></ProfileForm>
 <EducationRecord></EducationRecord>
       </MainLayout>
    )
}
export  default  JobProfile;