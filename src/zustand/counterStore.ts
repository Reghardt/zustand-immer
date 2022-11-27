import produce from "immer";
import create from "zustand";

//interface of counterStore, can be seen as a schema
interface ICounterStore{
    values: {
        counter: number;
        //add any other values here
    },
    actions: {
        incrementCounter: () => void;
        //add any other actions here
    }
}

const useCounterStore = create<ICounterStore>((set) => ({
    values: {
        counter: 0
    },
    actions: { 
        incrementCounter: () => set(produce<ICounterStore>((state) => {
            state.values.counter++
        }))
    }
}))

export default useCounterStore;