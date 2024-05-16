import journalApi from '@/api/journalApi'

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get('/entries.json')
  if (!data) {
    commit('setEntries', [])
    return
  }
  const entries = []

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }

  commit('setEntries', entries)
}

export const updateEntry = async ({ commit }, entry) => {
  commit('setLoadingEntry', true)

  const { id, ...entryData } = entry
  await journalApi.put(`/entries/${id}.json`, entryData)

  commit('updateEntry', entry)
  commit('setLoadingEntry', false)
}

export const createEntry = async ({ commit }, payload) => {
  commit('setLoadingEntry', true)
  const entryData = {
    ...payload,
    date: new Date().getTime(),
  }

  const { data } = await journalApi.post('/entries.json', entryData)
  entryData.id = data.name

  commit('addEntry', entryData)
  commit('setLoadingEntry', false)
  return {
    ok: true,
    id: data.name,
    message: 'Entrada creada exitosamente',
  }
}

export const deleteEntry = async ({ commit }, id) => {
  commit('setLoadingEntry', true)

  await journalApi.delete(`/entries/${id}.json`)

  commit('deleteEntry', id)
  commit('setLoadingEntry', false)
  return {
    ok: true,
    message: 'Entrada eliminada exitosamente',
  }
}