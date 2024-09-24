interface Counter {
  next(): number
}

function counter(start: number = 0, step: number = 1): Counter {
  let counter = start
  const next = () => {
    const nextValue = counter
    counter += step
    return nextValue
  }
  return { next }
}

const cnt = counter(1)
console.log(cnt.next())
const f = cnt.next
console.log(f())



class CounterImplementation implements Counter {
  private counter: number
  private step: number

  constructor(start: number = 0, step: number = 1) {
    this.counter = start
    this.step = step
  }

  next() {
    const nextValue = this.counter
    this.counter += this.step
    return nextValue
  }
}

const i = new CounterImplementation(1)
console.log(i.next())
const n = i.next
console.log(n())
