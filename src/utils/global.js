export const globalConst = {};

export const getUser =()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
}