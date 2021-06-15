import React from 'react';
import MainLayout from '../components/MainLayout';
import ViewPost from '../components/ViewPost';
import JobSeekerApplication from '../components/MakeApplicationComponent';


const Page =()=> {
    return(


       <MainLayout>

 <ViewPost></ViewPost>
 <JobSeekerApplication></JobSeekerApplication>
 
       </MainLayout>
    )
   
}

export  default  Page;