// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const placasApi = createApi({
//   reducerPath: 'placaApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4040/placa'}),
//   tagTypes: ['Get'],
//   endpoints: (build) => ({
//     getPlacaByDate: build.query({
//       query: () => 'placa',
//     }),
//   }),
// });


// const fetch = (...args) =>
//   import('node-fetch').then(({ default: fetch }) => fetch(...args));



// export async function requestPlacaByDate(date) {
//   try{
//       const response = await fetch('http://localhost:4040/placa/', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(),
//     });
//     const body = await response.json();
//     if(response.status !== 200){
//       console.log("no carga");
//       return;
//     };
//     for(let i of body){
//       if(new Date(date).toLocaleDateString() === (new Date(i.fecha)).toLocaleDateString()){
//         return((new Date(i.fecha)).toLocaleDateString());
//       };
//     };
//     // console.log(new Date(body[0].fecha).toLocaleDateString());
//     }catch(error){
//       console.error(error);
//     };
// };


