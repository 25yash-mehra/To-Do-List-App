const confirmBtn = document.getElementById("confirmBtn");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
confirmBtn.addEventListener("click", () => {
  let textData = document.getElementById("textInput").value;
  if (textData.trim().length === 0) {
    alert("ache se bhar");
    return;
  }
  let ele = document.createElement("h1");
  let textnode = document.createTextNode(textData);
  ele.appendChild(textnode);
  document.getElementById("text").appendChild(ele);
  document.getElementById("textInput").value = " ";
  let done = document.createElement("button");
  let doneText = document.createTextNode("done");
  done.appendChild(doneText);
  document.getElementById("text").appendChild(done);
  done.addEventListener("click", () => {
    ele.style.textDecoration = "line-through";
    ele.style.color = "red";
  });
  let button = document.createElement("button");
  let delbutton = document.createTextNode("delet");
  button.appendChild(delbutton);
  document.getElementById("text").appendChild(button);
  button.addEventListener("click", () => {
    ele.remove();
    button.remove();
    done.remove();
  });
  document.getElementById("clear").addEventListener("click", () => {
    ele.remove();
    button.remove();
    done.remove();
  });
});
