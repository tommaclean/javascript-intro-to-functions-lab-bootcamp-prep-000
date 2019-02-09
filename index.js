var uppercase = "HELLO!"

uppercase.toUpperCase() ===  uppercase

var lowercase = 'hello!'

lowercase.toLowerCase() === lowercase

var mixedCase = 'Hi there!'

mixedCase.toLowerCase() === mixedCase

mixedCase.toUpperCase() === mixedCase

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return whisper.toLowerCase()
}

function logShout(string) {
  return logShout.toUpperCase()
}

function logWhisper(string) {
  return whisper.toLowerCase()
}

function sayHiToGrandma(string) {
  if string.toUpperCase() === string
  return sayHiToGrandma.toLowerCase()
}