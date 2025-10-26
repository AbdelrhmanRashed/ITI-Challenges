var students = [
  { id: 1, name: "Sara", age: 22, Crs: "Math" },
  { id: 2, name: "Omar", age: 19, Crs: "Physics" },
  { id: 3, name: "Laila", age: 21, Crs: "CS" },
  { id: 4, name: "Hassan", age: 23, Crs: "Engineering" },
  { id: 5, name: "Mona", age: 20, Crs: "Biology" },
  { id: 6, name: "Kareem", age: 24, Crs: "Math" },
  { id: 7, name: "Noor", age: 18, Crs: "CS" },
  { id: 10, name: "Ali", age: 20, Crs: "CS" },
];
var studentsOptions = document.querySelector("#studentsID");
var studentRow = document.querySelector("#student");

//display StudentsID inside the select dropdown
var studentsContainer = students.map(function (student) {
  return `<option value="${student.id}">${student.id}</option>`;
});

studentsOptions.innerHTML += studentsContainer.join("");

//display student data in a table based on selected ID
function showStudentData(studentID) {
  if (studentID !== "select") {
    var student = students.find((student) => student.id === Number(studentID));
    studentRow.innerHTML = `
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.Crs}</td>
      `;
    console.log(studentID);
    console.log(student);
  } else {
    studentRow.innerHTML =
      "<td colspan='4'><p align='center'>Select Student ID</p></td>";
  }
}

studentsOptions.addEventListener("change", function (e) {
  showStudentData(e.target.value);
});

//print data from array as even indexes will printed with style different than odd ones
var arr = ["a", "b", "c", "d", "e", "f", "g"];

console.log("Yellow : even | red : odd");
arr.forEach(function (el) {
  if (arr.indexOf(el) % 2 === 0) {
    console.log(`%c ${el}`, "color:yellow ; font-size:14px");
  } else {
    console.log(`%c ${el}`, "color:red ; font-size:14px");
  }
});
