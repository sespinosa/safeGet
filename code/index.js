
const safeGet = (obj, props, defaultValue) => {
  const keys = props.split('.')
  for(let i = 0 ; i < keys.length ; i++) {
    obj = obj[keys[i]]
    if(!obj) return defaultValue
    if(i === keys.length - 1) return obj || defaultValue
  }
}

export default safeGet