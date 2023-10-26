import axiosClient from "../axiosClient";


export function getMainData(){
    return axiosClient.get('/main');
}