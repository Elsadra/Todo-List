let $ = document;
let todos = $.querySelector(".todos");
let deleteBtn = $.querySelectorAll(".delete");
let input = $.querySelector("input");

input.addEventListener("keydown", function (event) {
  let inputValue = input.value.trim();
  if (event.key == "Enter") {
    event.preventDefault();
    if (input.value == "") {
      alert("Please write the unfinished work");
    } else {
      let liNode = $.createElement("li");
      let iNode = $.createElement("i");
      liNode.className =
        "list-group-item d-flex justify-content-between align-items-center";
      iNode.setAttribute("class", "fa fa-trash-o delete");
      liNode.innerHTML += `
          <span>${inputValue}</span>
            `;
      liNode.append(iNode);
      todos.append(liNode);
      iNode.addEventListener("click", function (eventINode) {
        eventINode.target.parentElement.remove();
      });
      input.value = "";
    }
  }
});

deleteBtn.forEach(function (event) {
  event.addEventListener("click", function () {
    event.parentElement.remove();
  });
});
