import React from 'react';
import MainLayout from '../components/MainLayout';
import JobCreation from '../components/CreateJobComponent';
const JobProvider =()=> {
    return(
       <MainLayout>
 <JobCreation></JobCreation>
       </MainLayout>
    )
}
export  default  JobProvider;