import { configureStore } from "@reduxjs/toolkit";
import ReservationSlice from "@/slices/reservationSlice";
import ContactSlice from "@/slices/contactSlice";

export const store = configureStore({
    reducer: {
        reservation: ReservationSlice,
        contact: ContactSlice
    }
})