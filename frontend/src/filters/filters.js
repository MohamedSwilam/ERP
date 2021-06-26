import Vue from 'vue'

Vue.filter('capitalize', value => {
  if (!value) return ''
  // eslint-disable-next-line no-param-reassign
  value = value.toString()
  const arr = value.split('_')
  const capitalizedArray = []
  arr.forEach(word => {
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1)
    capitalizedArray.push(capitalized)
  })
  return capitalizedArray.join(' ')
})

Vue.filter('truncate', (value, limit) => value.substring(0, limit))

Vue.filter('tailing', (value, tail) => value + tail)

Vue.filter('time_difference', (previous, current) => {
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = current - previous

  if (elapsed < msPerMinute) {
    return `${Math.round(elapsed / 1000)} seconds ago`
  }

  if (elapsed < msPerHour) {
    return `${Math.round(elapsed / msPerMinute)} minutes ago`
  }

  if (elapsed < msPerDay) {
    return `${Math.round(elapsed / msPerHour)} hours ago`
  }

  if (elapsed < msPerMonth) {
    return `${Math.round(elapsed / msPerDay)} days ago`
  }

  if (elapsed < msPerYear) {
    return `${Math.round(elapsed / msPerMonth)} months ago`
  }

  return `${Math.round(elapsed / msPerYear)} years ago`
})

// eslint-disable-next-line consistent-return
Vue.filter('time', (seconds, is24HrFormat = false) => {
  if (seconds) {
    const date = new Date(seconds)
    let hours = date.getHours()
    const min = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
    if (!is24HrFormat) {
      const time = hours > 12 ? 'PM' : 'AM'
      hours = hours % 12 || 12
      return `${hours}:${min} ${time}`
    }
    return `${hours}:${min}`
  }
})

Vue.filter('date', (seconds, fullDate = false) => {
  const value = String(new Date(seconds))
  const date = value.slice(8, 10).trim()
  const month = value.slice(4, 7).trim()
  const year = value.slice(11, 15)

  if (!fullDate) return `${date} ${month}`
  return `${date} ${month}, ${year}`
})

Vue.filter('stringDate', (value, fullDate = false) => {
  // eslint-disable-next-line no-param-reassign
  value = String(value)
  const date = value.slice(8, 10).trim()
  const month = value.slice(4, 7).trim()
  const year = value.slice(11, 15)

  if (!fullDate) return `${date} ${month}`
  return `${date} ${month} ${year}`
})

Vue.filter('month', (val, showYear = true) => {
  // eslint-disable-next-line no-param-reassign
  val = String(val)

  const regx = /\w+\s(\w+)\s\d+\s(\d+)./
  if (!showYear) {
    return regx.exec(val)[1]
  }
  return `${regx.exec(val)[1]} ${regx.exec(val)[2]}`
})

Vue.filter('csv', value => value.join(', '))

Vue.filter('filter_tags', value => value.replace(/<\/?[^>]+(>|$)/g, ''))

Vue.filter('k_formatter', num => (num > 999 ? `${(num / 1000).toFixed(1)}k` : num))
