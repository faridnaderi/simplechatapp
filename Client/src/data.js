const ServerURL = 'http://localhost:3000'
export default {
    ServerURL,
    socket:null,
    socketId:'',
    user:{} 
}

// var user={
//     avatarUrl:'https://randomuser.me/api/portraits/men/4.jpg',
//     name:'Dale',
//     lastname:'Gray',  
// }   
// var socket = null;

// export function getUser(){
//     return user;
// }
// export function setSocket(s){
//     socket = s;
// }

// var needUpdate=[];
// export const AppData={ 
//     socket:null,
//     user:{
//         getData:()=>{return user;},
//         setData:data=>{
//            for(var k in data){
//               user[k] = data[k];
//            };
//         },
//         getFullName:()=>{
//             return  user.name +' '+ user.lastname;
//         }
//     },
//     isLoggedIn:false,
//     removeLoginAfterAnimation:false,
//     NeedUpdate:needUpdate,
//     callUpdate:()=>{
//         needUpdate.map(callback=>{
//             callback();
//         });
//     }
// }; 