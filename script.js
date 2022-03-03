const num = Math.ceil(Math.random() * 10)
console.log(num)
const pnum = +prompt('Number?')
if (pnum === num) {
    console.log('Good')
} else {
    console.log('Miss')
}
