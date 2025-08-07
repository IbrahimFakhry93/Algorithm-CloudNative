const s = [9, 10, 11, 12, 13, 15];
const e = [11, 11, 12, 14, 15, 16];
const r = [9];
let j = 0;
for (let i = 1; i < s.length; i++) {
  if (s[i] >= e[j]) {
    r.push(s[i]);
    j = i;
  } else continue;
}

console.log(r);
