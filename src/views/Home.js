import React from 'react';
import MainLayout from '../components/MainLayout';
import HomeComponent from '../components/HomeComponent';


const Home = () => {

    return (


        <MainLayout>
           <h1 className="title">Real Job Opportunity</h1>
           <HomeComponent></HomeComponent>
           
                
        </MainLayout>
    )

}

export default Home;












// return (
//     <MainLayout>
//         {blogs.map((blog, index) => {
//             return (<Card.Grid>
//                 <Link to = {`/view/blog/${blog._id}`}>
//                 <h1>{blog.title}</h1>
//                 <img src={blog.photo} Alt='Photo' style={{ width: '100% ' }}></img>
//                 <h5>Posted By:&nbsp;&nbsp;{blog.userId.firstName}</h5>
//                 <h5>Posted On:&nbsp;&nbsp;{blog.timeStamp.substring(0, 25)}</h5>
//                 </Link>
//             </Card.Grid>)
//         })}
//     </MainLayout>
// )