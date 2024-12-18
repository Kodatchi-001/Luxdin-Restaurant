import { Reservation_ContactType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Reservation_ContactType = {
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    NumberGuels: 0,
    Date: '',
    Time: '',
    AdditionalInfo: ''
}

export const ReservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setFirstName(state, action: PayloadAction<string>) {
            state.FirstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string>) {
            state.LastName = action.payload;
        },
        setPhoneNumber(state, action: PayloadAction<string>) {
            state.PhoneNumber = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.Email = action.payload;
        },
        setNumberGuels(state, action: PayloadAction<number>) {
            state.NumberGuels = action.payload;
        },
        setDate(state, action: PayloadAction<string | Date>) {
            state.Date = action.payload;
        },
        setTime(state, action: PayloadAction<string>) {
            state.Time = action.payload;
        },
        setAdditionalInfo(state, action: PayloadAction<string>) {
            state.AdditionalInfo = action.payload;
        }
    }
})

export const {
    setFirstName,
    setLastName,
    setPhoneNumber,
    setEmail,
    setNumberGuels,
    setDate,
    setTime,
    setAdditionalInfo
} = ReservationSlice.actions

export default ReservationSlice.reducer;
