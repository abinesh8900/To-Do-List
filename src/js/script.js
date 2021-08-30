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
      // console.log("delect");
      this.parentElement.remove();
    });
  }
}
function completedInList() {
  const completedTasks = toDoListContainer.querySelectorAll(".competed-btn");
  for (completedTask of completedTasks) {
    completedTask.addEventListener("click", function () {
      // console.log("comlpect");
      this.parentElement.classList.add("completed");
    });
  }
}
function showTastInList(notedTask, selectedImg) {
  if (selectedImg == undefined) {
    imageContainer = "hidden";
    console.log("hidden");
    selectedImg = "";
  } else {
    imageContainer = "image-container";
    console.log("show");
  }

  const toDoList = document.createElement("div");
  toDoList.classList.add("todo-list");

  toDoListContainer.append(toDoList);
  toDoList.innerHTML = `
  <span class="inline-block competed-btn ">
    <span class="tick-mark ">
      <img src="dist/images/tick-mark.svg" alt="" />
    </span>
  </span>
  <p class="inline-block todo-list__text"> ${notedTask}</p>
  <span class="inline-block close-btn">
    <img src="dist/images/close.svg" alt="" />
  </span>
  <div class=${imageContainer}>
  <img src="${selectedImg}">
  `;
}
window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    // addTaskImgContainer.querySelector("img").remove();

    if (addTask.value.length === 0) {
      // console.log("cant add text");
    } else {
      // toDoListText.textContent = addTask.value;
      showTastInList(addTask.value);
      // toDoListContainer.append(toDoList);
      // toDoList.innerHTML = `
      // <span class="inline-block competed-btn ">
      //   <span class="tick-mark ">
      //     <img src="dist/images/tick-mark.svg" alt="" />
      //   </span>
      // </span>
      // <p class="inline-block todo-list__text"> ${addTask.value}</p>
      // <span class="inline-block close-btn">
      //   <img src="dist/images/close.svg" alt="" />
      // </span>`;

      // addTask.value = "";
      delectTasksInList();
      completedInList();
    }
    if (fileURl === "") {
      addTask.value = "";
    } else {
      addTaskImgContainer.classList.remove("active");
      showTastInList(addTask.value, fileURl);
      // console.log("work");
      // toDoListContainer.append(toDoList);
      // toDoList.innerHTML = `
      // <span class="inline-block competed-btn ">
      //   <span class="tick-mark ">
      //     <img src="dist/images/tick-mark.svg" alt="" />
      //   </span>
      // </span>
      // <p class="inline-block todo-list__text"> ${addTask.value}</p>
      // <span class="inline-block close-btn">
      //   <img src="dist/images/close.svg" alt="" />
      // </span>
      // <div class="image-container">
      // <img src="${fileURl}">
      // <div>
      // `;
      console.log(addTask.value);
      delectTasksInList();
      completedInList();
      addTask.value = "";
      fileURl = "";
    }
  }
});

let file;
let fileURl = "";
addImageIcon.addEventListener("click", () => {
  addImage.click();
});
addImage.addEventListener("change", showImage);
function showImage() {
  {
    file = this.files[0];
    console.log(file);
    if (file != undefined) {
      const fileType = file.type.split("/");
      fileType.pop();
      if (fileType.join() === "image") {
        let fileReader = new FileReader();
        fileReader.onload = function () {
          fileURl = fileReader.result;
          addTaskImgContainer.classList.add("active");
          addTaslkImg.setAttribute("src", `${fileURl}`);
          addTaskImgContainer.append(addTaslkImg);
          console.log(addTaslkImg);
        };
        fileReader.readAsDataURL(file);
      } else {
        console.log("file not suppoted");
      }
    } else {
      console.log("fail to select img");
    }
  }
}
