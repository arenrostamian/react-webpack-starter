export const bindAll = (methods, context) => {
  methods.forEach(method => {
    method = method.bind(context)
  })
}

const removeItem = item => localStorage.removeItem(item)
const setItem = item => localStorage.setItem(item[0], item[1])

export const handleSession = (type, items) => {
  const action = type === 'remove' ? removeItem : setItem
  return new Promise((resolve, reject) => {
    items.forEach(item => action(item))
    resolve()
  })
}
