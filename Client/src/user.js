import AppData from './data'
export default function({avatarUrl,name,lastname,myTodayMode,email}){
    let user = {
        avatarUrl:AppData.ServerURL+avatarUrl,
        name,
        lastname, 
        myTodayMode,
        email,
    }
    return { 
        getTodayMode:()=>{
            return user.myTodayMode
        },
        getAvatarUrl:()=>{
            return user.avatarUrl
        },
        getFullName:()=>{
            return user.name+' '+user.lastname;
        }, 
    }
}