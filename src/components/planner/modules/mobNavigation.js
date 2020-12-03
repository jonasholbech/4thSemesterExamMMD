import { closeExpand } from "./closeExpand";

export function done() {
  console.log("planner/modules || mobNavigation.js | done()");
  document.querySelector(".Done1").classList = "Done1 scrollList show";

  document.querySelector(".progress1").classList = "progress1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".Barrier1").classList = "Barrier1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  setTimeout(() => {
    document.querySelectorAll(".progress1, .Do1, .Barrier1").forEach((element) => {
      element.classList.add("hide");
    });
  }, 500);
  document.querySelector(".Done1").addEventListener("transitionend", function () {
    document.querySelector(".Done1").style.transform = "";
  });
  closeExpand();
}

export function doing() {
  console.log("planner/modules || mobNavigation.js | doing()");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".progress1").classList = "progress1 scrollList show";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".Barrier1").classList = "Barrier1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  setTimeout(() => {
    document.querySelectorAll(".Do1, .Done1, .Barrier1").forEach((element) => {
      element.classList.add("hide");
    });
  }, 500);
  document.querySelector(".progress1").addEventListener("transitionend", function () {
    document.querySelector(".progress1").style.transform = "";
  });
  closeExpand();
}
export function todo() {
  console.log("planner/modules || mobNavigation.js | todo()");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".progress1").classList = "progress1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList show";
  document.querySelector(".Barrier1").classList = "Barrier1 scrollList hidden";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  setTimeout(() => {
    document.querySelectorAll(".progress1, .Done1, .Barrier1").forEach((element) => {
      element.classList.add("hide");
    });
  }, 500);
  document.querySelector(".To.Do1").addEventListener("transitionend", function () {
    document.querySelector(".To.Do1").style.transform = "";
  });
  closeExpand();
}
export function barrier() {
  console.log("planner/modules/mobNavigation.js || barrier()");
  document.querySelector(".Done1").classList = "Done1 scrollList hidden";
  document.querySelector(".progress1").classList = "progress1 scrollList hidden";
  document.querySelector(".Do1").classList = "To Do1 scrollList hidden";
  document.querySelector(".Barrier1").classList = "Barrier1 scrollList show";
  document.querySelector(".NewTask").classList = "NewTask hidden";
  setTimeout(() => {
    document.querySelectorAll(".progress1, .Do1, .Done").forEach((element) => {
      element.classList.add("hide");
    });
  }, 500);
  document.querySelector(".Barrier1").addEventListener("transitionend", function () {
    document.querySelector(".Barrier1").style.transform = "";
  });
  closeExpand();
}
export function addTask() {
  console.log("planner/modules || mobNavigation.js | addTask()");
  document.querySelector(".NewTask").classList = "NewTask showNew";
  closeExpand();
}

export function closeNewTask() {
  console.log("planner/modules || mobNavigation.js | closeNewTask()");
  document.querySelector(".NewTask").classList = "NewTask hidden hide";
  closeExpand();
}
