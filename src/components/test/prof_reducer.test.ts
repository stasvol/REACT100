import profReducer, { addPost, deletePost } from '../../redux/prof_reducer';

let state = {
  PostData: [
    { id: 1, like: 20, message: 'Super' },
    { id: 2, like: 3, message: 'Kliovo' },
    { id: 3, like: 9, message: 'Class' },
  ],

  newText: 'Hello',
  profile: null,
  status: '',
};

test('add new post', () => {
  let action = addPost('Hello World');
  let newState = profReducer(state, action);
  expect(newState.PostData.length).toBe(4);
});
test("add new message 'Hello World' in post", () => {
  let action = addPost('Hello World');
  let newState = profReducer(state, action);
  expect(newState.PostData[3].message).toBe('Hello World');
});

test('deleted in post and  length  decrement in post ', () => {
  let action = deletePost(1);
  let newState = profReducer(state, action);
  expect(newState.PostData.length).toBe(2);
});
