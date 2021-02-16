// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const PENDING_LIST_KEY = "pending-list";
const FINISHED_LIST_KEY = "finished-list";
let pendingList = [];
let finishedList = [];

const form = document.querySelector("form");

function addPending(task) {
  pendingList.push({
    title: task,
    id: Date.now(),
  });
  localStorage.setItem(PENDING_LIST_KEY, JSON.stringify(pendingList));
}

const pendingElement = document.querySelector("#pending");

function drawPending() {
  removeAllChildNodes(pendingElement);
  pendingList.forEach((task) => {
    const li = document.createElement("li");
    li.id = task.id;
    li.insertAdjacentText("afterbegin", task.title);
    li.appendChild(makePendingDeleteBtn());
    li.appendChild(makeMoveFinishedBtn());
    pendingElement.appendChild(li);
  });
}

const finishedElement = document.querySelector("#finished");

function drawFinished() {
  removeAllChildNodes(finishedElement);
  finishedList.forEach((task) => {
    const li = document.createElement("li");
    li.id = task.id;
    li.insertAdjacentText("afterbegin", task.title);
    li.appendChild(makeFinishedDeleteBtn());
    li.appendChild(makeMovePendingBtn());
    finishedElement.appendChild(li);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function makePendingDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", (event) => {
    pendingList = pendingList.filter((task) => {
      return task.id !== parseInt(event.target.parentNode.id);
    });
    localStorage.setItem(PENDING_LIST_KEY, JSON.stringify(pendingList));
    event.target.parentNode.remove();
  });
  return deleteBtn;
}

function makeFinishedDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.addEventListener("click", (event) => {
    finishedList = finishedList.filter((task) => {
      return task.id !== parseInt(event.target.parentNode.id);
    });
    localStorage.setItem(FINISHED_LIST_KEY, JSON.stringify(finishedList));
    event.target.parentNode.remove();
  });
  return deleteBtn;
}

function makeMoveFinishedBtn() {
  const moveFinishedBtn = document.createElement("button");
  moveFinishedBtn.innerText = "✔";
  moveFinishedBtn.addEventListener("click", (event) => {
    pendingList = pendingList.filter((task) => {
      if (task.id === parseInt(event.target.parentNode.id)) {
        finishedList.push(task);
        return false;
      }

      return true;
    });
    localStorage.setItem(PENDING_LIST_KEY, JSON.stringify(pendingList));
    localStorage.setItem(FINISHED_LIST_KEY, JSON.stringify(finishedList));
    drawPending();
    drawFinished();
  });
  return moveFinishedBtn;
}

function makeMovePendingBtn() {
  const movePendingBtn = document.createElement("button");
  movePendingBtn.innerText = "<<";
  movePendingBtn.addEventListener("click", (event) => {
    finishedList = finishedList.filter((task) => {
      if (task.id === parseInt(event.target.parentNode.id)) {
        pendingList.push(task);
        return false;
      }
      return true;
    });
    localStorage.setItem(PENDING_LIST_KEY, JSON.stringify(pendingList));
    localStorage.setItem(FINISHED_LIST_KEY, JSON.stringify(finishedList));
    drawPending();
    drawFinished();
  });
  return movePendingBtn;
}

function init() {
  const pendingListJson = localStorage.getItem(PENDING_LIST_KEY);
  if (pendingListJson !== null) {
    pendingList = JSON.parse(pendingListJson);
  }

  drawPending();

  const finishedListJson = localStorage.getItem(FINISHED_LIST_KEY);
  if (finishedListJson !== null) {
    finishedList = JSON.parse(finishedListJson);
  }

  drawFinished();

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskInput = event.target.querySelector("input");

    addPending(taskInput.value);
    drawPending();
    taskInput.value = "";
  });
}

init();
