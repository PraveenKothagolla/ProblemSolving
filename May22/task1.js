str = "HelloWorld";
emp = [];
for (i of str) {
  if (!emp.includes(i)) {
    emp.push(i);
  }
}
emp.sort();
cap = "";
for (i of emp) {
  c = 0;
  for (j of str) {
    if (i == j) {
      c++;
    }
  }
  if (i == i.toUpperCase()) {
    cap = cap + i;
  } else {
    console.log(i, c);
  }
}
for (i of cap) {
  count = 0;
  for (j of str) {
    if (i == j) {
      count++;
    }
  }
  console.log(i, count);
}
