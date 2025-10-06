//& Metwally code:

var sd = (ave = n = a = b = 0);
var x = [];

n = Number(prompt("n=?"));

for (var i = 0; i < n; i++) {
  x[i] = Number(prompt("x[" + i + "]"));
  ave += x[i];
}

ave = ave / n;

//console.log(ave);

for (var i = 0; i < n; i++) {
  a += Math.pow(x[i] - ave, 2);
}

b = a / n;

sd = Math.sqrt(b);
console.log(sd);
