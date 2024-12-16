import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function Reservation_Information() {
    return <>
        <section className="w-full flex justify-center lg:px-6 xl:px-24 mt-10">
            <div className="w-full 2xl:max-w-[1600px] h-full flex flex-col gap-8 px-5 lg:px-10 py-10 lg:p-16 bg-[#173534] text-white">
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField fullWidth type="text" className="w-full" size="medium" label="First Name" name='FirstName'
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }}
                        />
                    </Box>
                    <Box className="w-1/2">
                        <TextField fullWidth type="text" className="w-full" size="medium" label="Last Name"
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }} />
                    </Box>
                </div>
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField fullWidth type="text" className="w-full" size="medium" label="Phone Number" name='FirstName'
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }} />
                    </Box>
                    <Box className="w-1/2">
                        <TextField fullWidth type="email" className="w-full" size="medium" label="Email"
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }} />
                    </Box>
                </div>
                <Box className="w-full">
                    <TextField fullWidth type="number" className="w-full" size="medium" label="Number of Guests"
                        sx={{
                            // Bordure par défaut
                            '& fieldset': {
                                borderColor: '#d1a374', // Couleur de la bordure par défaut
                            },
                            // Bordure en focus
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: '#d1a374', // Bordure rouge en focus
                            },
                            // Couleur du label par défaut
                            '& .MuiInputLabel-root': {
                                color: '#d1a374',
                            },
                            // Couleur du label en focus
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d1a374',
                            },
                            // Texte (valeur entrée) en blanc
                            '& .MuiInputBase-input': {
                                color: 'white', // Texte en blanc
                            },
                        }} />
                </Box>
                <div className="w-full flex gap-4">
                    <Box className="w-1/2">
                        <TextField fullWidth type="date" className="w-full" size="medium" label="Date"
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }} />
                    </Box>
                    <Box className="w-1/2">
                        <TextField fullWidth type="time" className="w-full" size="medium" label="Time"
                            sx={{
                                // Bordure par défaut
                                '& fieldset': {
                                    borderColor: '#d1a374', // Couleur de la bordure par défaut
                                },
                                // Bordure en focus
                                '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                    borderColor: '#d1a374', // Bordure rouge en focus
                                },
                                // Couleur du label par défaut
                                '& .MuiInputLabel-root': {
                                    color: '#d1a374',
                                },
                                // Couleur du label en focus
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: '#d1a374',
                                },
                                // Texte (valeur entrée) en blanc
                                '& .MuiInputBase-input': {
                                    color: 'white', // Texte en blanc
                                },
                            }} />
                    </Box>
                </div>
                <Box className="w-full">
                    <TextField fullWidth multiline rows={4} type="text" className="w-full" size="medium" label="Additional Info" name='Email'
                        sx={{
                            // Bordure par défaut
                            '& fieldset': {
                                borderColor: '#d1a374', // Couleur de la bordure par défaut
                            },
                            // Bordure en focus
                            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
                                borderColor: '#d1a374', // Bordure rouge en focus
                            },
                            // Couleur du label par défaut
                            '& .MuiInputLabel-root': {
                                color: '#d1a374',
                            },
                            // Couleur du label en focus
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: '#d1a374',
                            },
                            // Texte (valeur entrée) en blanc
                            '& .MuiInputBase-input': {
                                color: 'white', // Texte en blanc
                            },
                        }} />
                </Box>
                <button className='w-full py-4 bg-[#d1a374] border border-[#d1a374] text-white text-lg rounded-md hover:bg-transparent hover:text-[#d1a374] duration-500'>
                    Submit
                </button>
            </div>
        </section>
    </>
}