
export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries]
  state.isLoadingEntries = false
}

export const setLoadingEntry = (state, status) => {
  state.isLoadingEntry = status
}

export const updateEntry = (state, entry) => {
  state.entries = state.entries.map(e => e.id === entry.id ? entry : e)
}

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries]
}

export const deleteEntry = (state, entryId) => {
  state.entries = state.entries.filter(e => e.id !== entryId)
}