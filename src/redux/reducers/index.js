import { combineReducers } from "redux";
import sequenceReducer from "./sequenceReducer";
import arpeggioReducer from "./arpeggioReducer";
import modusReducer from "./modusReducer";

const rootReducer = combineReducers({
  sequenceData: sequenceReducer,
  arpeggioData: arpeggioReducer,
  modusData: modusReducer,
});

export default rootReducer;
