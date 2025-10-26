var students = [
  { name: "Ali", age: 20, Crs: "CS" },
  { name: "Sara", age: 22, Crs: "Math" },
  { name: "Omar", age: 19, Crs: "Physics" },
  { name: "Laila", age: 21, Crs: "CS" },
  { name: "Hassan", age: 23, Crs: "Engineering" },
  { name: "Mona", age: 20, Crs: "Biology" },
  { name: "Kareem", age: 24, Crs: "Math" },
  { name: "Noor", age: 18, Crs: "CS" },
];

//1- list Students in table with header of name , age , course
//2- enable text form for user to search for user by  name or course
//3- add dropdown list to sort students by age and by name and reflect result on table
var searchInp = document.querySelector("input[type='search']");
var searchForm = document.querySelector("#search");
var sortSelect = document.querySelector("#sortSelect");

// copy of students array
var filteredStudents = Array.from(students);
//current sort state
var currentSort = "";

//show students data in table
function showDataInTable(studentsArr) {
  var tableBody = document.getElementById("tableBody");

  if (studentsArr.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3">No students found</td></tr>`;
    return;
  }
  var studentsHtmlData = studentsArr
    .map(function (student) {
      return `<tr>
    <td>${student.name}</td>
    <td>${student.age}</td>
    <td>${student.Crs}</td>
    </tr>`;
    })
    .join("");

  tableBody.innerHTML = studentsHtmlData;
}

//handle Search
function handleSearch(e) {
  e.preventDefault();
  var searchQuery = searchInp.value.toLowerCase();
  filteredStudents = students.filter(function (student) {
    return (
      student.name.toLowerCase().includes(searchQuery) ||
      student.Crs.toLowerCase().includes(searchQuery)
    );
  });
  if (currentSort) applySort();
  else showDataInTable(filteredStudents);
}

//handle Sort
function handleSort(e) {
  currentSort = e.target.value;
  applySort();
}

function applySort() {
  //guard closure
  if (!currentSort) return;

  sortedStudents = Array.from(filteredStudents).sort(function (std1, std2) {
    if (currentSort === "age") return std1.age - std2.age;
    if (currentSort === "name")
      return std1.name.toLowerCase().localeCompare(std2.name.toLowerCase());
  });
  showDataInTable(sortedStudents);
}

//event listeners
searchForm.addEventListener("submit", handleSearch);
sortSelect.addEventListener("change", handleSort);

// initialiaze the table
function init() {
  showDataInTable(students);
}

init();
