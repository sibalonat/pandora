import { Button } from "@/components/Button/Button";
import { ConditionalFeedback } from "@/components/Input/Index";

import { Input } from "@/components/Input/Input";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import { selectUser, login } from "@/services/userSlice";
import { RootState, AppDispatch } from "@/store";

import styled from "@emotion/styled";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

export type LoginForm = {
  identifier: string;
  password: string;
};

const StyledInput = styled(Input)`
  margin-bottom: 1rem;
`;

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const router = useRouter()

  const {jwt, error } = useSelector<RootState, RootState['user']>(selectUser)

  const dispatch = useDispatch<AppDispatch>();

  if (Boolean(jwt) && !error) {
      router.push('/user')
  }

  const onSubmit = (data: LoginForm) => {
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CenteredTile header="Login">
        <h3>
          <ConditionalFeedback>{error?.message}</ConditionalFeedback>
        </h3>
        <StyledInput
          label="Identifier"
          placeholder="username or email"
          height={7}
          feedback={
            <ConditionalFeedback>
              {errors.identifier?.message}
            </ConditionalFeedback>
          }
          {...register("identifier", {
            required: "Required Field",
            minLength: { value: 6, message: "To Short" },
          })}
        />
        <StyledInput
          height={7}
          label="Password"
          type="password"
          role="textbox"
          feedback={
            <ConditionalFeedback>
              {errors.password?.message}
            </ConditionalFeedback>
          }
          placeholder="password"
          {...register("password", {
            required: "Required Field",
            minLength: { value: 8, message: "To Short" },
          })}
        />
        <Button type="submit">Sign In</Button>
        <h3>
          <Link href="/registration" passHref>
            <StyledLink underline>Create Account</StyledLink>
          </Link>
        </h3>
      </CenteredTile>
    </form>
  );
};

export default Login;
