import React from 'react';
import MainLayout from '../components/MainLayout';
import JobProviderDashBoard from '../components/JobProviderDashBoard';
import EducationRecord from '../components/EducationRecords';
const JobProvider =()=> {
    return(
       <MainLayout>
 <JobProviderDashBoard></JobProviderDashBoard>
 <EducationRecord></EducationRecord>

       </MainLayout>
    )
}
export  default  JobProvider;