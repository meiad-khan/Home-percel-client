import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import { Link } from 'react-router';

const Register = () => {

  const {register, handleSubmit, formState:{errors} } = useForm();
  const { registerUser } = useAuth();

  const handleRegister = (data) => {
    // console.log('data is ', data);
    registerUser(data.email, data.password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
    })
  }

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center font-bold">Please Register</h3>
      <form className="card-body" onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input"
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <p className="text-red-600">Email is required</p>
          )}

          {/* password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
            })}
            className="input"
            placeholder="Password"
          />

          {errors.password?.type === "required" && (
            <p className="text-red-600">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-600">Password must be 6 character</p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-600">
              At least one upperCase, one lowerCase, one digit and one special
              character
            </p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>Already Have a account. <Link className='text-secondary underline' to={'/login'}>login</Link></p>
        <SocialLogin></SocialLogin>
      </form>
    </div>
  );
};

export default Register;