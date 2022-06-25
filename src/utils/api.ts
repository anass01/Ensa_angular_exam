import axios from "axios"

export const API = {
  host: 'https://62b70010491a19c97aece3a1.mockapi.io/',
  RESSOURCE : 'Course',
}

export const getCourses = () => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.get(`${API.host}${API.RESSOURCE}`);
    let dataList = res.data;
    if(dataList){
      resolve(dataList);
    } else {
      reject();
    }
  })
}

export const getCourse = (index: any) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.get(`${API.host}${API.RESSOURCE}/${index}`);
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const createCourse = (data: any) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.post(`${API.host}${API.RESSOURCE}`, {...data});
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const updateCourse = (index: any, data: any) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.put(`${API.host}${API.RESSOURCE}/${index}`, {...data});
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}

export const deleteCourse = (index: any) => {
  return new Promise(async (resolve, reject)=>{
    let res = await axios.delete(`${API.host}${API.RESSOURCE}/${index}`);
    let dataEntity = res.data;
    if(dataEntity){
      resolve(dataEntity);
    } else {
      reject();
    }
  })
}
