export const TYPE_SET_ENTRIES = "SET_ENTRIES";
export const TYPE_ADD_ENTRY = "ADD_ENTRY";

export const setEntries = entries => ({
  type: TYPE_SET_ENTRIES,
  entries
});

export const addEntry = entry => ({
  type: TYPE_ADD_ENTRY,
  entry
});
