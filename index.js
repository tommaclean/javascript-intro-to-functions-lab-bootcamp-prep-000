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
  console.log(logShout.toUpperCase())
}

function logWhisper(string) {
  console.log(whisper.toLowerCase())
}

function sayHiToGrandma(string) {
  if string.toUpperCase() === string
  return "YES INDEED!"
} else if { string.toLowerCase() === string
  return "I can't hear you!"
}
  
}