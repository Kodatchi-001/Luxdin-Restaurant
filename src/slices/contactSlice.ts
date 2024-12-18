import { Reservation_ContactType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Reservation_ContactType = {
    FirstName: '',
    LastName: '',
    Email: '',
    Message: ''
}

export const ContactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setFirstName(state, action: PayloadAction<string>) {
            state.FirstName = action.payload;
        },
        setLastName(state, action: PayloadAction<string>) {
            state.LastName = action.payload;
        },
        setEmail(state, action: PayloadAction<string>) {
            state.Email = action.payload;
        },
        setMessage(state, action: PayloadAction<string>) {
            state.Message = action.payload;
        },
    }
})

export const { setFirstName, setLastName, setEmail, setMessage } = ContactSlice.actions;
export default ContactSlice.reducer
