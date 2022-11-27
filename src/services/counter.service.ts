import useCounterStore from "../zustand/counterStore";

export function incrementFromService()
{
    console.log("service fired!")
    //get action from special getState() function in useCounterStore. values can be gotten this way aswell
    const ZF_incrementCounter = useCounterStore.getState().actions.incrementCounter

    
    console.log(`counter value from service is (before mutation): ${useCounterStore.getState().values.counter}`)
    ZF_incrementCounter()
    console.log(`counter value from service is (after mutation): ${useCounterStore.getState().values.counter}`)
    
}