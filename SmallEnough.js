function smallEnough(a, limit){
  let smalls = true;
  for (let i = 0; i < a.length; i++)
    if (a[i] > limit) {
      smalls = false;
    }
  return smalls;
}