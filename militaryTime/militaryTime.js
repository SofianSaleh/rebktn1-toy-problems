/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/
let timeToMilitary = {
  "1": "13",
  "2": "14",
  "3": "15",
  "4": "16",
  "5": "17",
  "6": "18",
  "7": "19",
  "8": "20",
  "9": "21",
  "10": "22",
  "11": "23",
  "12": "00"

}

function toMilitary(time) {
  // your code here...
  var str = ''
  time = time.split(':')
  if (time[1].includes('pm') && time[0] !== '12') {
    str += `${timeToMilitary[time[0]]}:${time[1].slice(0, 2)}`
    return str
  } else if (time[1].includes('am') && time[0] === '12') {
    str += `${timeToMilitary[time[0]]}:${time[1].slice(0, 2)}`
    return str

  }
  return time.join(':')
}
console.log(toMilitary("8:00pm"))