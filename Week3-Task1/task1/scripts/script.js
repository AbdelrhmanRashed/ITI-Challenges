var STD_URL = "https://api.jsonbin.io/v3/b/68fcf992d0ea881f40bb2b6c";

//fetching data from api using ajax
function getStudentsData(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, "true");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      console.log("Request successful");
      showStudentsData(JSON.parse(this.responseText).record);
    } else {
      console.log("Request failed");
    }
  };
}
//display students data into a table
function showStudentsData(studentsArr) {
  var tableBody = document.querySelector("#tableBody");

  var studentsRows = studentsArr
    .map(function (student) {
      return `<tr>
          <td>${student.firstName}</td>
          <td>${student.lastName}</td>
          <td>${student.phone}</td>
          <td>${student.address}</td>
          <td>${student.track}</td>
          <td>${handleCourses(student.courses)}</td>
          <td><img src=${student.image} class="tableImage"></td>
          <td>${student.position}</td>
        </tr>`;
    })
    .join("");
  tableBody.innerHTML = studentsRows;
}
//handle Courses Array
function handleCourses(coursesArr) {
  return coursesArr
    .map(function (course) {
      return `${course} <br/>`;
    })
    .join("");
}

getStudentsData(STD_URL);
