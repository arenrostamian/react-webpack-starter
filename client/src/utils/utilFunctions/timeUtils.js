export const getTimeElapsed = (timestamp) => {
  const currTimestamp = Date.now()
  const dateNow = new Date(currTimestamp)
  const dateThen = new Date(timestamp)
  const yearNow = dateNow.getFullYear()
  const yearThen = dateThen.getFullYear()
  const secsElapsed = ((currTimestamp - timestamp) / 1000)

  const secs = Math.floor(secsElapsed)
  const mins = Math.floor(secsElapsed / 60)
  const hours = Math.floor(secsElapsed / 3600)
  const days = dateNow.getDate() - dateThen.getDate()
  const weeks = days / 7
  const months = dateNow.getMonth() - dateThen.getMonth()
  const year = yearNow - yearThen

  if (secsElapsed < 60) {
    return `${secs} ${secs > 1 ? 'seconds' : 'second'} ago`
  }
  if (secsElapsed < 3600) {
    return `${mins} ${mins > 1 ? 'minutes' : 'minute'} ago`
  }
  if (secsElapsed < 86400) {
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`
  }
  if (secsElapsed < 604800) {
    return `${days} ${days > 1 ? 'days' : 'day'} ago`
  }
  if (secsElapsed < 2592000) {
    return `${weeks} ${weeks > 1 ? 'weeks' : 'week'} ago`
  }
  if (year === 0) {
    return `${months} ${months > 1 ? 'months' : 'month'} ago`
  }
  return year === 1 ? 'last year' : `${year} years ago`
}

export const getDateFromTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const locale = undefined
  const year = date.getFullYear()
  const month = date.toLocaleString(locale, { month: 'short' })
  const day = date.getDate()
  return `${month} ${day} ${year}`
}

export const getTimeFromTimestamp = (timestamp) => {
  const date = new Date(timestamp)
  const hour = date.getHours() % 12
  const minute = date.getMinutes()
  const ampm = date.getHours() < 12 ? 'am' : 'pm'
  return `${hour}:${minute}${ampm}`
}
