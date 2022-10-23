import { Button } from "@/components/Button/Button";
import { ConditionalFeedback } from "@/components/Input/Index";

import { Input } from "@/components/Input/Input";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import {
  selectUser,
  registration,
  RegistrationData,
} from "@/services/userSlice";

import { RootState, AppDispatch } from "@/store";

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

export type RegistrationForm = {
  username: string;
  email: string;
  password: string;
};

const Registration: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>();

  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const { jwt, error } = useSelector<RootState, RootState["user"]>(selectUser);

  if (Boolean(jwt) && !error) {
    // Router
    router.push("/user");
  }

  const onSubmit = (data: RegistrationData) => {
    // console.log(data);
    dispatch(registration(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>
        <ConditionalFeedback>{error?.message}</ConditionalFeedback>
      </h3>

      <CenteredTile header="Create Account">
        <StyledInput
          label="username"
          placeholder="User Name"
          height={8}
          feedback={
            <ConditionalFeedback>
              {errors.username?.message}
            </ConditionalFeedback>
          }
          {...register("username", {
            required: "Required field",
            minLength: { value: 6, message: "Min Length!" },
            pattern: {
              value: /^[\w\d\s]+$/,
              message: "Only letters, numbers and spaces",
            },
          })}
        />
        <StyledInput
          label="Email"
          height={8}
          placeholder="User email"
          feedback={
            <ConditionalFeedback>{errors.email?.message}</ConditionalFeedback>
          }
          {...register("email", {
            required: "Required field",
            pattern: {
              value: /^\S+@\S+$/,
              message: "Invalid email",
            },
          })}
        />
        <StyledInput
          label="Password"
          height={8}
          placeholder="Enter a password"
          feedback={
            <ConditionalFeedback>
              {errors.password?.message}
            </ConditionalFeedback>
          }
          {...register("password", {
            required: "Required field",
            minLength: { value: 8, message: "Min Length 8!" },
          })}
        />

        <Button type="submit">Signup</Button>
        <h3>
          <Link href="/login" passHref>
            <StyledLink underline>Login</StyledLink>
          </Link>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default Registration;
