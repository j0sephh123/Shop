// // 1. Maps all different categories in one array
export function convertObjToArr(state){
  addCategoriesAsProps(state);
  return Object.entries(state).map(([k, v]) => {
    v.map((item, index, array) => {
      return item;
    });
    return v;
  }).reduce((tot, cur) => [...tot, ...cur]);
}


// 2. Adds all categories as properties in the values
function addCategoriesAsProps(state){
  Object.entries(state).map(([k, v], index, array) => {
    v.map((item, i, a) => a[i]['category'] = k)
    return v;
  });
} 

// 3. Count number of occurences
// export const countProperties = array.reduce((allNames, name) => {
//   if(name.category in allNames){
//     allNames[name.category] ++ ;
//   } else {
//     allNames[name.category] = 1;
//   }
//   return allNames;
// }, {});

// 4. 
// export function convertObjToArr(state){
//   return Object.entries(state)
//   .map(([k, v]) => {
//     v.map((item, index, array) => {
//       return item;
//     });
//     return v;
//   })
//   .reduce((tot, cur) => [...tot, ...cur]) // convert to array
//   .reduce((allNames, name) => {
//     if(name.category in allNames){
//       allNames[name.category] ++ ;
//     } else {
//       allNames[name.category] = 1;
//     }
//     return allNames;
//   }, {});
// }


// Completed function to show count of how many items there are in a category
export const addCategoriesToArrays = (state) => {
  const addCategoriesAsProps = Object.entries(state).map(([k, v], index, array) => {
    v.map((item, i, a) => a[i]['category'] = k)
    return v;
  }).reduce((tot, cur) => [...tot, ...cur]);

  return addCategoriesAsProps.reduce((allNames, name) => {
    if(name.category in allNames){
      allNames[name.category] ++ ;
    } else {
      allNames[name.category] = 1;
    }
    return allNames;
  }, {});
}