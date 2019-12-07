import * as Action from "./reduxActions";

const initialState = {
  entries: []
};

// Remember that reducer does NOT mutate state or the action payload
export default function entries(state = initialState, action) {
  switch (action.type) {
    case Action.TYPE_SET_ENTRIES:
      return {
        ...state,
        entries: [...action.entries]
      };
    case Action.TYPE_ADD_ENTRY:
      // There are two Spread operators here. The first one clones
      // the entries array, the second one clones the entry object,
      // and together they create a new entries array.
      let newEntries = [...state.entries, { ...action.entry }];
      // Another Spread here. It clones state, then sets the value
      // of entries to newEntries (similar to merging two objects
      // with spread syntax {...obj1, ...obj2})
      return {
        ...state,
        entries: newEntries
      };
    default:
      return state;
  }
}
