function disemvowel(str) {
  let trollStr = ''
  for (let i = 0; i < str.length; i++) {
    if("aeiou".includes(str[i].toLowerCase())) continue;
    trollStr += str[i];
  }
  return trollStr;
}