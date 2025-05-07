import { legacy_createStore as createStore } from "redux"
import appReducers from "./layouts/redux/reducers/reducers"

const store = createStore(appReducers)
export default store