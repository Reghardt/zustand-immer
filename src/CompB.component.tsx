import useCounterStore from "./zustand/counterStore"

const CompB = () => {
    const Z_counter = useCounterStore(state => state.values.counter)
    
    console.log("update B!")
    return(
        <div>
            <p>Comp B</p>
            <p>{Z_counter}</p>
        </div>
    
    )
}

export default CompB