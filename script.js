const confirmBtn = document.getElementById("confirmBtn");
const form = document.getElementById("form");
const textDiv = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

confirmBtn.addEventListener("click", () => {
  let textData = document.getElementById("textInput").value;
  if (textData.trim().length === 0) {
    alert("Please fill out the field");
    return;
  }

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let taskText = document.createElement("span");
  taskText.textContent = textData;
  taskDiv.appendChild(taskText);

  let doneBtn = document.createElement("button");
  doneBtn.classList.add("done");
  doneBtn.textContent = "Done";
  taskDiv.appendChild(doneBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.textContent = "Delete";
  taskDiv.appendChild(deleteBtn);

  textDiv.appendChild(taskDiv);
  document.getElementById("textInput").value = "";

  doneBtn.addEventListener("click", () => {
    taskText.style.textDecoration = "line-through";
    taskText.style.color = "red";
  });

  deleteBtn.addEventListener("click", () => {
    taskDiv.remove();
  });

  document.getElementById("clear").addEventListener("click", () => {
    taskDiv.remove();
  });
});
