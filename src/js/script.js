const addTask = document.getElementById("addtask");
const toDoListContainer = document.getElementById("todo-list-container");
addTask.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    if (addTask.value.length === 0) {
      console.log("cant do ant thing");
    } else {
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
      toDoListText.textContent = addTask.value;

      const closeBtn = document.createElement("span");
      closeBtn.classList.add("inline-block", "close-btn");

      const closeBtnImg = document.createElement("img");
      closeBtnImg.setAttribute("src", "dist/images/close.svg");

      toDoListContainer.append(toDoList);
      toDoList.append(completedBtn, toDoListText, closeBtn);
      completedBtn.append(tickMark);
      tickMark.append(tickMarkImg);
      closeBtn.append(closeBtnImg);

      addTask.value = "";

      const delectTasks = toDoListContainer.querySelectorAll(".close-btn");
      for (delectTask of delectTasks) {
        delectTask.addEventListener("click", function () {
          this.parentElement.remove();
        });
      }

      const toDoTasks = toDoListContainer.querySelectorAll(".todo-list");
      const completedTasks =
        toDoListContainer.querySelectorAll(".competed-btn");
      for (completedTask of completedTasks) {
        completedTask.addEventListener("click", function () {
          this.parentElement.classList.add("completed");
        });
      }
    }
  }
});
