import * as Action from "./reduxActions";

const initialState = {
  entries: []
};

// Note that reducer does NOT mutate state or the action payload. See
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// and https://www.samanthaming.com/tidbits/70-3-ways-to-clone-objects for how
// the Spread syntax is used for cloning objects and arrays.

export default function entries(state = initialState, action) {
  switch (action.type) {
    case Action.TYPE_SET_ENTRIES:
      return {
        ...state,
        entries: [...action.entries]
      };
    case Action.TYPE_ADD_ENTRY:
      return {
        ...state,
        entries: [...state.entries, { ...action.entry }]
      };
    case Action.TYPE_DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter(entry => entry.id !== action.entryId)
      };
    default:
      return state;
  }
}
