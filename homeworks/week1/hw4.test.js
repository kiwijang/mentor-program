import {isPalindromes} from './hw4'

describe("hw4", () => {
  it("should return correct answer when str = abcba", () => {
    expect(isPalindromes('abcba')).toBe(true)
  })
  it("should return correct answer when str = abcba",()=>{
    expect(isPalindromes('apple')).toBe(false)
  })
  it("should return correct answer when str = apple",()=>{
    expect(isPalindromes('aaaaa')).toBe(true)
  })
  it("should return correct answer when str = apple",()=>{
    expect(isPalindromes('applppa')).toBe(true)
  })
})