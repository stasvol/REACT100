import userReducer, {follow, initialStateUserType, unfollow} from "../../redux/user_reducer";

let  state: initialStateUserType;

beforeEach(()=>{
//@ts-ignore
   state = {
      users: [
         {id:0,  name:'Anna',followed: false, photos:{small:null,large:null}, status:'status 0'},
         {id:1,  name:'Dima',followed: false, photos:{small:null,large:null}, status:'status 1'},
         {id:2,  name:'Vova',followed: true, photos:{small:null,large:null}, status:'status 2'},
         {id:3,  name:'Archi',followed: true, photos:{small:null,large:null}, status:'status 3'},
      ] ,
      pageSize: 5,
      totalUsersCount: 0,
      currentPage: 1,
      isLoading: true,
      pageNumberSizes: 10,
      disableButton: []
   }
});

test('follow success',() =>{

    const newState = userReducer(state,follow(1))

   expect(newState.users[0].followed).toBeFalsy();
   expect(newState.users[1].followed).toBeTruthy();
});
test('unfollow success',() =>{

   const newState = userReducer(state,unfollow(3))

   expect(newState.users[2].followed).toBeTruthy();
   expect(newState.users[3].followed).toBeFalsy();
})