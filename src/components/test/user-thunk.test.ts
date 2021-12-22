import {
    disableButtonFol,
    follow,
    FollowThunkCreator,
    togglePreloader,
    unfollow,
    unFollowThunkCreator
} from "../../redux/user_reducer";
import {userApi} from "../../api/api-users";
import {ApiResponseType, resultCodeEnum} from "../../api/api";

jest.mock("../../api/api-users")

const userApiMock = userApi as jest.Mocked<typeof userApi>
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(()=>{
    dispatchMock.mockClear()
    getStateMock.mockClear()
    userApiMock.postUser.mockClear()
    userApiMock.deleteUser.mockClear()
})

const result:ApiResponseType={
    resultCode:resultCodeEnum.success,
    messages:[],
    data:{}
}

userApiMock.postUser.mockReturnValue(Promise.resolve(result))
test('thunk follow user success',async () =>{

    const thunk = FollowThunkCreator(1)

    // const dispatchMock = jest.fn()
    // const getStateMock = jest.fn()

    await thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,disableButtonFol(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2,follow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3,disableButtonFol(false, 1));

});

userApiMock.deleteUser.mockReturnValue(Promise.resolve(result))

test('thunk unfollov  user success',async () =>{

    const thunk = unFollowThunkCreator(1)

    // const dispatchMock = jest.fn()
    // const getStateMock = jest.fn()

    await thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(3);
    expect(dispatchMock).toHaveBeenNthCalledWith(1,disableButtonFol(true, 1));
    expect(dispatchMock).toHaveBeenNthCalledWith(2,unfollow(1));
    expect(dispatchMock).toHaveBeenNthCalledWith(3,disableButtonFol(false, 1));

});