import { LOGIN_REQUEST , LOGIN_SUCCESS , LOGIN_FAILURE , LOGOUT } from "../Helpers/constants";
import { userService } from '../Services';
import { history } from '../Helpers/history';
export const userActions = {
    login,
    logout
};

function login(username, password, from) {
    return dispatch => {
        debugger
        dispatch(request({ username }));
        debugger
        history.push(from);
        // userService.login(username, password)
        //     .then(
        //         user => {
        //             dispatch(success(user));
        //             history.push(from);
        //         },
        //         error => {
        //             dispatch(failure(error.toString()));
        //         }
        //     );
    };

    function request(user) { return { type: LOGIN_REQUEST, user } }
    function success(user) { return { type: LOGIN_SUCCESS, user } }
    function failure(error) { return { type: LOGIN_FAILURE, error } }
}


function logout() {
    userService.logout();
    return { type: LOGOUT };
}