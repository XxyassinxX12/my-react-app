import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './redux/countslice.js'

function Counter() {
  const value = useSelector((state) => state.count.value)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', padding: 24 }}>
      <h2>Count: {value}</h2>
      <button onClick={() => dispatch(decrement())}>−</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter