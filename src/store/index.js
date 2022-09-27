import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter-slice";
import AuthenticationSlice from "./authentication-slice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: AuthenticationSlice.reducer,
  },
});

export default store;

// const countSubscriber=()=>{
//     const latestState = store.getState();
//     console.log(latestState);
// }

// count.subscribe(countSubscriber);

// count.dispatch({type:"increment"});
// count.dispatch({type:"decrement"});
