import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
export const useCommon = ()=>{
    const dispatch = useDispatch();
    const history = useHistory()

    return {
        dispatch,
        history
    }
}