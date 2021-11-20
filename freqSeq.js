function freqSeq(str, sep) {
  const dic = {}
  str.split("").forEach((el) => { dic[el] = dic[el] ? (dic[el] += 1) : 1;});
  return str.split("").map(char => dic[char]).join(sep)
}

console.log(freqSeq("hello world", "-"))
console.log(freqSeq("19999999", ":"))
console.log(freqSeq("^^^**$", "x"))