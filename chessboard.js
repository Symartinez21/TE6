var chess = ""
var size = 8

for (var b = 0; b < chess; b++){
  for (var w = 0; w < chess; w++) {
  if ((b + w) % 2 == 0)
  size += "";
  else
  size += "#";
}
chess += "\n"
}
console.log(chess);
