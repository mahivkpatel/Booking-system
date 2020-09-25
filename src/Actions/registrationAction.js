import {LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS} from "../Helpers/constants";
import { userService } from '../Services';
import { alertActions } from './alertAction';
import { history } from '../Helpers/history';
export const userActions = {
    register,
    logout
};
function logout() {
    userService.logout();
    return { type: LOGOUT };
}

function register(user) {
    return dispatch => {
       // dispatch(request(user));
        localStorage.setItem('user', JSON.stringify(user));
        debugger
        //history.push('/login');
        // userService.register(user)
        //     .then(
        //         user => {
        //             debugger
        //             dispatch(success());
        //             history.push('/login');
        //             dispatch(alertActions.success('Registration successful'));
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //             dispatch(alertActions.error(error.toString()));
        //         }
        //     );
    };

    function request(user) { return { type: REGISTER_REQUEST, user } }
    function success(user) { return { type: REGISTER_SUCCESS, user } }
    function failure(error) { return { type: REGISTER_FAILURE, error } }
}
