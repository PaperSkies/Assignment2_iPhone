const clockContainer = document.getElementById('clock')
const time = new Date()

let h = time.getHours();
let m = time.getMinutes();

// % 12 is modulo
h = h % 12 

if (h === 0) h = 12


setInterval(() => {
  m = new Date().getMinutes()
}, 6000)

const clock = `${h}:${m}`

console.log(time)
clockContainer.innerText = clock;