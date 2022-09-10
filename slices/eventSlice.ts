import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { EventBriteEvent } from '../typings'
import eventsData from '../data/events.json'
// Define a type for the slice stat e
 interface stateData {
    events: EventBriteEvent[]
 }

// Define the initial state using that type
const initialState: stateData = {
    events: eventsData
}
    
export const eventSlice = createSlice({
  name: 'event',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    filterAllByLocation: (state, action: PayloadAction<string>) => {
        return {
            ...state,
            events: [...state.events].filter((event) => event.location__1.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { filterAllByLocation } = eventSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getAllEvents = (state: RootState) => state.event.events

// export const filterByLocation =(state: RootState) => state.event.events.filter((item)=> {
    // item.location.toLowerCase() === 
// })

export const getEventsCount = (state: RootState) => state.event.events.length

export default eventSlice.reducer