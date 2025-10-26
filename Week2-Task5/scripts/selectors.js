//html collection
var imgs = document.getElementsByTagName("img");
console.log(imgs);

var imgsNode = document.querySelectorAll("img");
console.log(imgsNode);

var img1 = document.getElementsByName("firstImage")[0];
var img2 = document.getElementById("secondImg");

console.log(img1, img2);

//find all options for city drop down list
var options = document
  .getElementsByName("City")[0]
  .getElementsByTagName("option");

console.log(options);

//find all elements that contains class name fontBlue
var fontBlueElements = document.getElementsByClassName("fontBlue");

console.log(fontBlueElements);

//get first anchor inside the second table then change it's href property to training.com and it's text to "Training"
var secondTable = document.getElementsByTagName("table")[1];

var firstAnchorInSecondTable =
  secondTable.children[0].children[0].children[0].children[0];

firstAnchorInSecondTable.innerText = "Training";
firstAnchorInSecondTable.href = "http://www.training.com";

console.log(firstAnchorInSecondTable);

//find last image and change it's borders to : solid pink 2px
var lastImage = document.getElementsByTagName("img")[1];
lastImage.style.border = "solid pink 2px";

console.log(lastImage);

//create Js function to find all checkboxs (checked) in userData form and alert their values
function findChecked() {
  var checkBoxs = document.getElementsByName("hoppy");
  var checkedBoxs = Array.from(checkBoxs).filter(function (checkBox) {
    return checkBox.checked;
  });

  if (checkedBoxs.length > 0) {
    var checkedValues = checkedBoxs.map(function (checked) {
      return checked.value;
    });

    alert("Checked values: " + checkedValues.join(", "));
  } else {
    alert("No checkboxes selected.");
  }
}

var submit = document.querySelector("input[type='submit']");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  findChecked();
});

//find element with id value "example" then change it's backgroundColor to pink
document.getElementById("example").style.backgroundColor = "pink";
