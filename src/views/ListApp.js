import React from 'react';
import MainLayout from '../components/MainLayout';
import ApplicantsList from '../components/ApplicantsList';
import ViewPost from '../components/ViewPost';


const AllApplicants =()=> {
    return(


       <MainLayout>
<ViewPost/>
 <ApplicantsList ></ApplicantsList >
 
       </MainLayout>
    )
   
}

export  default AllApplicants ;