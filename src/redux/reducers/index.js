import { combineReducers } from "redux";

import sequenceReducer from "./sequenceReducer";

const rootReducer = combineReducers({
  sequenceData: sequenceReducer,
});

export default rootReducer;
