import {useDispatch, useSelector} from "react-redux";
import {rootReducersType} from "../redux/reduxStore";
import {loginSelector} from "../redux/auth-selector";
import {loginOut} from "../redux/auth_reducer";

export const useMyHeader = () => {
    const isAuth = useSelector(({auth}: rootReducersType) => auth.isAuth)
    const login = useSelector(loginSelector)
    const dispatch = useDispatch()

    const logOutUser = () => {
        dispatch(loginOut())
    }
    return {isAuth,login,logOutUser}
}