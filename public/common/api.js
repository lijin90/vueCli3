import axios from 'axios' // 引用axios
export const apiAxios=(url)=>new Promise((resolve,reject)=>{
        axios.get(url).then(function(res){
              resolve(res);
           }).catch(function (error) {
               reject(error);
           });
});
export const getpost=(url, params)=>{
    return new Promise((resolve, reject)=>{
        axios.post(url).then((res)=> {
           resolve(res);
       }).catch((err)=>{
           reject(err.data)
       })
   });
}
export const a='ll'