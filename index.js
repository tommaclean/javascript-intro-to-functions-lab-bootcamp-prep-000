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
  return whisper.toLowerCase()
}