import { useState } from 'react'
import CompA from './CompA.component'
import CompB from './CompB.component'
import { incrementFromService } from './services/counter.service'
import useCounterStore from './zustand/counterStore'

function App() {

  console.log("update App!")

  const ZF_incrementCounter = useCounterStore(state => state.actions.incrementCounter);

  return (
    <div>
      <button onClick={() => ZF_incrementCounter()}>Increment using hook</button> <br/>
      <button onClick={() => incrementFromService()}>Increment using service hook</button>

      <CompA/>
      <CompB/>
    </div>
  )
}

export default App
