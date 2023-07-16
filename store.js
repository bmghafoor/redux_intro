const INITIAL_STATE = { mood: 0, color: "white" };

const moodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "Happy":
      return {
        ...state,
        mood: action.payload.mood,
        color: action.payload.color,
      };
    case "Sad":
      return {
        ...state,
        mood: action.payload.mood,
        color: action.payload.color,
      };
    case "Angry":
      return {
        ...state,
        mood: action.payload.mood,
        color: action.payload.color,
      };
    case "Confused":
      return {
        ...state,
        mood: action.payload.mood,
        color: action.payload.color,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(moodReducer);

const updateHeader = () => {
  const state = store.getState();
  document.querySelector("h1").innerText = state.mood;
  document.querySelector("body").style.backgroundColor = state.color;
};

store.subscribe(updateHeader);
