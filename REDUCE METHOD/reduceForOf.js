let marks = [5,10,15,20,25]

const val = marks.reduce((acc, cur) => update(acc, cur), initialValue);
console.log(val);

// Is equivalent to:
let value = initialValue;
for (const cur of marks) {
  val = update(value, cur);
}