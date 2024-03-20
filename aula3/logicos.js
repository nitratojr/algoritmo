true && true// true
false && true//false
true && false//false
false && false//false

const v1 = 50
const v2 = 50
const v3 = 25

console.log(v1 === v2 && v1 > v3 && v1 === v2)
console.log(v1 === v2 && v1 > v3 && v1 > v3)
console.log(v1 === v2 && v1 > v3 && v1 === v3)
console.log(v1 === v2 && v1 > v3 && v1 < v3)
console.log(v1 === v2 && v1 > v3 && v1 !== v3)

true || true//true
true || false//true
false || true//true
false || false//false

const a = true
const b = false
const c = true

console.log(a || b)//true
console.log(b || c)//false
console.log(a || c)//true
console.log(a || b)//true

!true//false
!false//true
// inverte o resutado !








