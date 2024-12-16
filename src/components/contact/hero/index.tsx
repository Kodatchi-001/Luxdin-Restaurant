import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Hero() {
    return <>
        <section className="w-full h-full flex justify-center">
            <div className='w-full 2xl:max-w-[1600px] h-full my-20 lg:mt-20 flex flex-wrap gap-8 lg:gap-5 xl:gap-0 px-5 xl:px-20 pt-16 lg:py-20 xl:py-28 2xl:py-32'>
                <div className="w-full xl:w-[40%] h-full text-4xl lg:text-5xl xl:text-7xl">
                    <h1 className="w-5/6 lg:w-5/6 lg:leading-[80px]">Connect with LuxDin</h1>
                </div>
                <div className="w-full xl:w-[60%] h-full flex flex-col gap-4 xl:pl-10 2xl:pl-5">
                    <div className="w-full flex gap-4">
                        <Box className="w-1/2">
                            <TextField fullWidth type="text" className="w-full" size="medium" label="First Name" name='FirstName' sx={{ color: 'black' }} />
                        </Box>
                        <Box className="w-1/2">
                            <TextField fullWidth type="text" className="w-full" size="medium" label="Last Name" name='LastName' sx={{ color: 'black' }} />
                        </Box>
                    </div>
                    <Box className="w-full">
                        <TextField fullWidth type="email" className="w-full" size="medium" label="Your Email" name='Email' sx={{ color: 'black' }} />
                    </Box>
                    <Box className="w-full">
                        <TextField fullWidth multiline rows={4} type="text" className="w-full" size="medium" label="Write Message.." name='Email' sx={{ color: 'black' }} />
                    </Box>
                    <button className='w-full py-4 bg-[#d1a374] border border-[#d1a374] text-white text-lg rounded-md hover:bg-transparent hover:text-[#d1a374] duration-500'>
                        Submit
                    </button>
                </div>
            </div>
        </section>
    </>
}
