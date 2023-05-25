import { useEffect, useRef, useState } from "react";

const Counter = () => {


    const [days, setDays] = useState()
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState()


    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date('June 01 , 2023').getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setDays(days)
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    });


    const bg = {
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }


    return (
        <>
            <div className='absolute text-white w-9/12 top-[60%] md:top-[65%] lg:top-[65%] transform -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[50%] text-black '>

                <div className='flex justify-center items-center w-full '>
                    <div style={bg} className='relative w-full rounded-xl md:w-9/12 mx-2'>
                        <div className='border-gray-500 z-[999]  bg-blue-200 py-3 pl-4 pr-8 rounded-xl border-4 mx-auto grid justify-center  grid-cols-7 w-full  md:w-7/12 '>
                            <div>
                                <p className='text-4xl md:text-6xl font-bold'>{days}</p>
                                <p className='text-2xl font-bold'><small>Days</small></p>
                            </div>
                            <span className=' text-3xl md:text-5xl'>:</span>
                            <div >
                                <p className='text-4xl md:text-6xl font-bold'>{hours}</p>
                                <p className='text-2xl font-bold'><small>Hours</small></p>
                            </div>
                            <span className='text-5xl'>:</span>
                            <div >
                                <p className='text-4xl md:text-6xl font-bold'>{minutes}</p>
                                <p className='text-2xl font-bold'><small>Minutes</small></p>
                            </div>
                            <span className='text-5xl'>:</span>
                            <div >
                                <p className='text-4xl md:text-6xl font-bold'>{seconds}</p>
                                <p className='text-2xl font-bold'><small>Seconds</small></p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default Counter;