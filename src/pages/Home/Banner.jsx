import image from '../../assets/concert.jpg'
import Counter from './Counter';


const Banner = () => {
    return (
        <>
            <div>
                <img src={image} alt="" className='w-screen h-screen object-cover bg-no-repeat ' />
            </div>
            <div>
                <h1 className='absolute w-9/12 top-[40%] md:top-[45%] lg:top-[45%] transform -translate-y-1/2 -translate-x-1/2 left-[50%] md:left-[50%] text-white text-2xl lg:text-4xl font-bold'>bKash CONCERT 2023. <br /> 1 JUNE 2023, DHAKA</h1>
            </div>
            <div>
                <Counter></Counter>
            </div>

        </>
    );
};

export default Banner;