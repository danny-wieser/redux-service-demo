import { Action, createReducer } from '../src/redux-utils';

// another non-async redux service, just to demonstrate how the app handles multiple services
export const types = {
  someAction: 'someAction',
};

const someAction = (fieldA, fieldB) => (dispatch) => {
  dispatch(Action(types.someAction, { payload: { fieldA, fieldB } }));
};

export const actions = { someAction };
export const INITIAL_STATE = {};
export const someActionHandler = (state, data) => ({ ...state, ...data.payload });
export const reducer = createReducer(INITIAL_STATE, {
  [types.someAction]: (state, action) => someActionHandler(state, action),
});
