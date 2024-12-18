'use client'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdditionalInfo, setDate, setEmail, setFirstName, setLastName, setNumberGuels, setPhoneNumber, setTime } from "@/slices/reservationSlice";
import { Reservation_ContactType } from '@/types';

export default function Reservation_Information() {
    const [state, setState] = useState<Reservation_ContactType>({
        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Email: '',
        NumberGuels: 0,
        Date: '',
        Time: '',
        AdditionalInfo: ''
    });

    const dispatch = useDispatch();
    const HandelChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target
        const NewValue = name === 'numberGuests' ? parseInt(value) : value
        setState((prevState: Reservation_ContactType) => ({ ...prevState, [name]: NewValue }))
    }
    const HandleRservation = (): void => {
        dispatch(setFirstName(state.FirstName));
        dispatch(setLastName(state.LastName));
        dispatch(setPhoneNumber(state.PhoneNumber || ''));
        dispatch(setEmail(state.Email));
        dispatch(setNumberGuels(state.NumberGuels || 0));
        dispatch(setDate(state.Date || ''));
        dispatch(setTime(state.Time || ''));
        dispatch(setAdditionalInfo(state.AdditionalInfo || ''));
    };

    return (
        <section className="w-full flex justify-center lg:px-6 xl:px-24 mt-10">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-col gap-8 px-5 lg:px-10 py-10 lg:p-16 bg-[#173534] text-white">
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="text"
                            className="w-full"
                            size="medium"
                            label="First Name"
                            name="FirstName"
                            value={state.FirstName}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="text"
                            className="w-full"
                            size="medium"
                            label="Last Name"
                            name="LastName"
                            value={state.LastName}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                </div>
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="text"
                            className="w-full"
                            size="medium"
                            label="Phone Number"
                            name="PhoneNumber"
                            value={state.PhoneNumber}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="email"
                            className="w-full"
                            size="medium"
                            label="Email"
                            name="Email"
                            value={state.Email}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                </div>
                <Box className="w-full">
                    <TextField
                        fullWidth
                        type="number"
                        className="w-full"
                        size="medium"
                        label="Number of Guests"
                        name="NumberGuels"
                        value={state.NumberGuels}
                        onChange={HandelChanges}
                        sx={{
                            '& fieldset': {
                                borderColor: '#d1a374',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: '#d1a374',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#d1a374',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d1a374',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                </Box>
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="date"
                            className="w-full"
                            size="medium"
                            label="Date"
                            name="Date"
                            value={state.Date}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                    <Box className="w-1/2">
                        <TextField
                            fullWidth
                            type="time"
                            className="w-full"
                            size="medium"
                            label="Time"
                            name="Time"
                            value={state.Time}
                            onChange={HandelChanges}
                            sx={{
                                '& fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374',
                                },
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </Box>
                </div>
                <Box className="w-full">
                    <TextField
                        fullWidth
                        multiline
                        rows={4}
                        type="text"
                        className="w-full"
                        size="medium"
                        label="Additional Info"
                        name="AdditionalInfo"
                        value={state.AdditionalInfo}
                        onChange={HandelChanges}
                        sx={{
                            '& fieldset': {
                                borderColor: '#d1a374',
                            },
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: '#d1a374',
                            },
                            '& .MuiInputLabel-root': {
                                color: '#d1a374',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d1a374',
                            },
                            '& .MuiInputBase-input': {
                                color: 'white',
                            },
                        }}
                    />
                </Box>
                <button
                    onClick={HandleRservation}
                    className='w-full py-4 bg-[#d1a374] border border-[#d1a374] text-white text-lg rounded-md hover:bg-transparent hover:text-[#d1a374] duration-500'>
                    Submit
                </button>
            </div>
        </section>
    );
}
