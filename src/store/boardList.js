import { atom } from "recoil";

const boardListState = atom({
  key: 'boardListState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export {boardListState};