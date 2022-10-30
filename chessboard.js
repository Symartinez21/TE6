var chess = ""
var size = 8

for (var b = 0; b < size; b++){
  for (var w = 0; w < size; w++) {
  if ((b + w) % 2 == 0)
  chess += " ";
  else
  chess += "#";
}
chess += "\n"
}
console.log(chess);
