import {
  incrementadorAction,
  decrementadorAction,
  multiplicadorAction,
  dividirAction,
  resetAction,
} from "./counter/counter.actions";
import { contadorReducer } from "./counter/counter.reducer";
import { Action, Reducer } from "./redux/ngrx";

import { createStore, Store } from "redux";

// class Store<T> {
//   constructor(private reducer: Reducer<T>, private state: T) {}

//   getState() {
//     return this.state;
//   }

//   dispatch(action: Action) {
//     this.state = this.reducer(this.state, action);
//   }
// }

// const store = new Store(contadorReducer, 10);

const store: Store = createStore(contadorReducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Implement Reducer

store.dispatch(incrementadorAction);
store.dispatch(incrementadorAction);

store.dispatch(incrementadorAction);
store.dispatch(multiplicadorAction);
