import axios from 'axios';
import {notification} from 'antd';

const RealJobUrl = 'https://blogpost-shecancode-api.herokuapp.com/api/v1/blo' ;


class RealJobApi{


    async loginAuth(data){

        try{
            const response = await axios.post(RealJobUrl +'/auth/signin', data)
            return response.data;
            
        }
        catch(e){
    notification.error({message:"User Not Found!"})
        }     
}


async signupAuth(data){
console.log(data)
    try{
        const response = await axios.post(RealJobUrl +'/auth/signup', data)
        return response.data;
        
    }
    catch(e){
notification.error({message:"SignUp Failed, Please Try Again!"})
    }     
}


// async getAllBlog(){
   
//     try{
//     const response = await axios.get(RealJobUrl + '/dash/all');
//     return response.data;


// }
// catch(e){
//     notification.error({message:"Failed to get All Blogs!"}) 
// }
// }



// async getOneBlog(id){

//     try{
//         const response = await axios.get(RealJobUrl + '/dash/' +id);
//         return response.data;
    
    
//     }
//     catch(e){
//         notification.error({message:"Failed to get All Blogs!"}) 
//     }
    


// }






}
export default  new RealJobApi();
