import useToggleValue from "hooks/useToggleValue";
import React, { useEffect } from "react";
import LayoutAuthentication from "layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Checkbox } from "components/checkbox";
import { Button } from "components/button";
import { useDispatch, useSelector } from "react-redux";
import { authLogin, authRegister, authSignUp } from "store/auth/auth-slice";
import { toast } from "react-toastify";

// import slugify from "slugify";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(1, "Password must be 1 character "),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // const { currentUser } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  const handleSignUp = async (values) => {
    dispatch(
      authRegister({
        fullName: values.name,
        email: values.email,
        password: values.password,
        avatar:
          "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/329850244_581124607217235_4231346006075250628_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RPo4_5-LdvUAX-hGyoO&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDLJ6gTyf6TaYhpJxw8H2S61RmxlYwJqjst9F4ghBY46A&oe=641520A4",
      })
    );
    dispatch(
      authSignUp({
        fullName: values.name,
        email: values.email,
        password: values.password,
        avatar:
          "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/329850244_581124607217235_4231346006075250628_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RPo4_5-LdvUAX-hGyoO&_nc_ht=scontent-hkt1-2.xx&oh=00_AfDLJ6gTyf6TaYhpJxw8H2S61RmxlYwJqjst9F4ghBY46A&oe=641520A4",
      })
    );
  };
  if (currentUser) {
    navigate("/home");
  }

  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/login" className="font-medium underline text-primary">
          Login
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the
              <span className="underline text-secondary">
                {" "}
                Terms of Use
              </span>{" "}
              and have read and understand the
              <span className="underline text-secondary"> Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button
          className="w-full"
          kind="primary"
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Create my account
        </Button>

        {/* <Button
          className="w-full"
          kind="primary"
          type="button"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          onClick={signInWithGoogle}
        >
          Create my account
        </Button> */}
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
