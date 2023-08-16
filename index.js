// Delete property of object inside a map and return object without that property
images.map(({image, ...rest}) => ({...rest, preview: image})) 

// Convert array of arrays with different length to an orderer array
const arr = [
  [{ a: 1 }, { a: 2 }, { a: 3 }],
  [{ b: 1 }, { b: 2 }],
  [{ c: 1 }, { c: 2 }, { c: 3 }, { c: 4 }],
];
const result = arr.reduce((acc, curr) => {
  curr.forEach((obj, i) => {
    if (acc[i]) {
      Object.assign(acc[i], obj);
    } else {
      acc[i] = obj;
    }
  });
  return acc;
}, []);
console.log(result);
//[
//  { a: 1, b: 1, c: 1 },
//  { a: 2, b: 2, c: 2 },
//  { a: 3, c: 3 },
//  { c: 4 }
//]
