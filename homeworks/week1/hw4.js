export const isPalindromes = (str) => {
  return str.split('').reverse().join('')==str.split('').join('')
}