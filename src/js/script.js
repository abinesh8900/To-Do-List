const addTask = document.getElementById("addtask");
const addTaskImgContainer = document.getElementById("addtask-img");
const toDoListContainer = document.getElementById("todo-list-container");
const addImage = document.getElementById("add-images");
const addImageIcon = addImage.parentElement;
const addTaslkImg = document.createElement("img");

function delectTasksInList() {
  const delectTasks = toDoListContainer.querySelectorAll(".close-btn");
  for (delectTask of delectTasks) {
    delectTask.addEventListener("click", function () {
      console.log("delect");
      this.parentElement.remove();
    });
  }
}
function completedInList() {
  const completedTasks = toDoListContainer.querySelectorAll(".competed-btn");
  for (completedTask of completedTasks) {
    completedTask.addEventListener("click", function () {
      console.log("comlpect");
      this.parentElement.classList.add("completed");
    });
  }
}
window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTaskImgContainer.classList.remove("active");
    const toDoList = document.createElement("div");
    toDoList.classList.add("todo-list");

    const completedBtn = document.createElement("span");
    completedBtn.classList.add("inline-block", "competed-btn");

    const tickMark = document.createElement("span");
    tickMark.classList.add("tick-mark", "inline-block");

    const tickMarkImg = document.createElement("img");
    tickMarkImg.setAttribute("src", "dist/images/tick-mark.svg");

    const toDoListText = document.createElement("p");
    toDoListText.classList.add("inline-block", "todo-list__text");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("inline-block", "close-btn");

    const closeBtnImg = document.createElement("img");
    closeBtnImg.setAttribute("src", "dist/images/close.svg");
    if (addTask.value.length === 0) {
      console.log("cant add text");
    } else {
      toDoListText.textContent = addTask.value;

      toDoListContainer.append(toDoList);
      toDoList.append(completedBtn, toDoListText, closeBtn); //imageContainer
      completedBtn.append(tickMark);
      tickMark.append(tickMarkImg);
      closeBtn.append(closeBtnImg);

      addTask.value = "";
      delectTasksInList();
      completedInList();
    }
    if (fileURl === "") {
      console.log(" cant add img");
    } else {
      console.log("work");
      const imageContainer = document.createElement("div");
      imageContainer.classList.add("image-container");
      const uplodedImg = document.createElement("img");
      uplodedImg.setAttribute("src", `${fileURl}`);

      toDoListContainer.append(toDoList);
      toDoList.append(completedBtn, toDoListText, closeBtn);
      completedBtn.append(tickMark);
      tickMark.append(tickMarkImg);
      closeBtn.append(closeBtnImg);
      toDoList.append(imageContainer);
      imageContainer.append(uplodedImg);

      delectTasksInList();
      completedInList();
    }
    fileURl = "";
  }
});

let file;
let fileURl = "";
addImageIcon.addEventListener("click", () => {
  addImage.click();
});
addImage.addEventListener("change", pushImg);
function pushImg() {
  {
    file = this.files[0];
    console.log(file);
    const fileType = file.type.split("/");
    fileType.pop();
    if (fileType.join() === "image") {
      let fileReader = new FileReader();
      fileReader.onload = function () {
        fileURl = fileReader.result;
        addTaskImgContainer.classList.toggle("active");
        addTaslkImg.setAttribute("src", `${fileURl}`);
        addTaskImgContainer.append(addTaslkImg);
        console.log(addTaslkImg);
      };
      fileReader.readAsDataURL(file);
    } else {
      console.log("file not suppoted");
    }
  }
}
