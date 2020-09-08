import { combineReducers} from "redux"
import homeReducer from "../../containers/home/store/reducer";

const rootReducer = combineReducers({
    ...homeReducer
})
export type AppState = ReturnType<typeof rootReducer>
export default rootReducer;