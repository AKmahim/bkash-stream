import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signUpError, setSignUpError] = useState('');

    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError("")


    }

    return (
        <div className='h-[650px] flex justify-center items-center'>
            <div className='w-96 p-7 shadow-2xl'>
                <h2 className='text-2xl text-center font-bold '>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input {...register("name", {
                            required: 'Name is required',
                        })} className="input input-bordered w-full max-w-xs" type="text" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input {...register("email", {
                            required: 'Email is required'
                        })} className="input input-bordered w-full max-w-xs" type="email" />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input {...register("password", {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be 6 character long' },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase special character and number' }
                        })} className="input input-bordered w-full max-w-xs" type="password" />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </div>
                    <input className='btn btn-info w-full mt-6' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError}</p>}
                </form>
                <p className='mt-2'>Already have an account<Link to='/signIn' className='text-accent'> Please Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;