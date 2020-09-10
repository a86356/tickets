import { combineReducers} from "redux"
import homeReducer from "../../containers/home/store/reducer";
import queryReducer from "../../containers/query/store/reducer";
const rootReducer = combineReducers({
     homeReducer,
     queryReducer
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;