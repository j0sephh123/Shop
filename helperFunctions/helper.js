import React from 'react';

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

//  Count number of occurences
// export const countProperties = array.reduce((allNames, name) => {
//   if(name.category in allNames){
//     allNames[name.category] ++ ;
//   } else {
//     allNames[name.category] = 1;
//   }
//   return allNames;
// }, {});

// 
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


// 3. Completed function to show count of how many items there are in a category
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

// 4. Add classes to inputs on valid/invalid
export const inputClassNameFn = (stateErrors) => {
  let formControl = 'form-control';
  if(stateErrors === 'invalidLength'){
    return ({
      className: `${formControl} is-invalid`,
      message: <div className="invalid-feedback">Name must be between 4 and 15 characters</div>
    });
  } else if(stateErrors === 'empty') {
    return ({
      className: `${formControl} is-valid`,
      message: <div className="valid-feedback">Success</div>
    });
  } else {
    return formControl;
  }
} // add classes to input