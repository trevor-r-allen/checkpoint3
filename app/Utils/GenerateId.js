  
/**
 * @returns {string} A random string of characters to be used as an Id.
 */

export const generateId = function () {
  let result = ""
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  for (let i = 0; i < 10; i++) {
    result += characters[Math.floor(Math.random() * characters.length)]
  }
  return result
}