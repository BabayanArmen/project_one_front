import { create } from "zustand";

// type CounterState = {
//     count: number,
//     user: {
//         name: string,
//         address: {
//             street: string,
//             zipcode: string
//         }
//     }
//     actions: {
//         increment: () => void
//         decrement: () => void
//         reset: () => void
//         updateStreet: (value: string) => void
//     }
// }

// export const useCounterStore = create<CounterState>(set => {
//     return {
//         count: 0,
//         user: {
//             name: "John",
//             address: {
//                 street: "Main St",
//                 zipcode: "123"
//             }
//         },
//         actions: {
//             increment() {
//                 set(state => ({count: state.count + 1}))
//             },
//             decrement() {
//                 set(state => ({count: state.count - 1}))    
//             },
//             reset() {
//                 set({count: 0})
//             },

//             updateStreet(value) {
//                 set(state => ({
//                     user: {
//                         ...state.user,
//                         address: {
//                             ...state.user.address,
//                             street: value
//                         }
//                     }
//                 }))
//             }
//         }
//     }
// })

//////////////////////////////// persist version  ////////////////////////////////
// import { persist } from "zustand/middleware";
// export const useCounterStore = create<CounterState>()
//     persist( // to save state in localstorage
//         () => {
//             return {
//                 count: 0
//             }
//         },
//         { name: "count" }
//     )

//////////////////////////////// immer version ////////////////////////////////
import { immer } from "zustand/middleware/immer";

type CounterState = {
    count: number,
    user: {
        name: string,
        address: {
            street: string,
            zipcode: string
        }
    }
}

export const useCounterStore = create<CounterState>()(
    immer(
        () => {
            return {
                count: 0,
                user: {
                    name: "John",
                    address: {
                        street: "Main St",
                        zipcode: "123"
                    },
                },
            }
        },
    )
)

export function increment() {
    useCounterStore.setState(state => ({count: state.count + 1}))
}

export function decrement() {
    useCounterStore.setState(state => ({count: state.count - 1}))    
}

export function reset() {
    useCounterStore.setState({count: 0})
}

export function updateStreet(value: string) {
    useCounterStore.setState(state => state.user.address.street = value)
}