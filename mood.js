const h1 = document.querySelector("h1");
const happyBtn = document.querySelector("#Happy");
const sadBtn = document.querySelector("#Sad");
const angryBtn = document.querySelector("#Angry");
const confusedBtn = document.querySelector("#Confused");

happyBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "Happy", payload: { mood: "^_^", color: "green" } });
});

sadBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "Sad", payload: { mood: "⊙︿⊙", color: "blue" } });
});

angryBtn.addEventListener("click", function (e) {
  store.dispatch({ type: "Angry", payload: { mood: "ಠ╭╮ಠ", color: "red" } });
});

confusedBtn.addEventListener("click", function (e) {
  store.dispatch({
    type: "Confused",
    payload: { mood: "ↂ_ↂ", color: "yellow" },
  });
});
