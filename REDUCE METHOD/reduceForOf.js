let marks = [12,20,25,13]

const val = marks.reduce((acc, cur) => (acc+ cur), 0);
console.log(val);

// Is equivalent to:
/* let value = initialValue;
for (const cur of marks) {
  val = update(value, cur);
}
console.log(object) */;



