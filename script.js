// Task:
// 1. Create a new array using forEach that has all usernames with a "!" to each of the usernames. Example: ["john!", "becky!", ...].
// 2. Create another new array using map that has all usernames with a "?" to each of the usernames. Example: ["john?", "becky?", ...].
// 3. Filter the original array of users to only include users who are on team: red.
// 4. In filtered array find out the total score of all filtered users and print all user's data into table with <tfoot>Final summ</tfoot> tag.

var users = [
  ["john", "red", 5, ["ball", "book", "pen"]],
  ["becky", "blue", 10, ["tape", "backpack", "pen"]],
  ["susy", "red", 55, ["ball", "eraser", "pen"]],
  ["tyson", "green", 1, ["book", "pen"]],
];
let newUsersFirst = [];
let newUsersSecond = [];
let summ = 0;

users.forEach(function (currentValue) {
  newUsersFirst.push(currentValue[0] + "!");
});

users.forEach(function (currentValue) {
  newUsersSecond.push(currentValue[0] + "?");
});

let usersFiltered = users.filter(function (currentValue) {
  return currentValue[1] == "red";
});

let usersSumm = usersFiltered.forEach(function (currentValue) {
  return (summ += currentValue[2]);
});

let usersMaped = usersFiltered.map(function (currentValue) {
  return `<tr>
	<td>Nick: ${currentValue[0]}</td>
  <td>Color: ${currentValue[1]}</td>
  <td>Age: ${currentValue[2]}</td>
  <td>Things: ${currentValue[3]}</td>
	</tr>
  `;
});
console.log(newUsersFirst);
console.log(newUsersSecond);
document.write(
  `<table border="1">
  <tbody>${usersMaped}</tbody>
  <tfoot><tr><td>Final summ: </td><td></td><td>${summ}</td></tr></tfoot>
  </table>`
);
console.log(summ);
