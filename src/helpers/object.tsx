/**
 * Get value from property of object
 * @param key
 * @param obj
 */
export const getPropertyFromObject = (key: string, obj: object) => {
  return obj.hasOwnProperty(key)? Object.assign(obj)[key]: null
}
