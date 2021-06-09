const compareNumbersAsc = (a, b) => {
  return a-b
 }

 const compareNumbersDesc = (a, b) => {
  return b-a
 }

 const flip=(d, a)=>{
   if (d === 'R') {
     return a.sort(compareNumbersAsc)
   }
    if (d === 'L') {
     return a.sort(compareNumbersDesc)
   }
 }