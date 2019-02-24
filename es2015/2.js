const evens = [2,4,6,8,10]

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)

console.log(odds, pairs, nums)

