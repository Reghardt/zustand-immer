import useCounterStore from "./zustand/counterStore"

const CompA = () => {

    const Z_counter = useCounterStore(state => state.values.counter)

    console.log("update A!")
    return(
        <div>
            <p>Comp A</p>
            <p>{Z_counter}</p>
        </div>
    
    )
}

export default CompA