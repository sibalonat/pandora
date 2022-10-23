import { Button } from "@/components/Button/Button";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import type { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { selectUser, logout } from "@/services/userSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";


const User: NextPage = () => {
  const { username, email, error } = useSelector<RootState, RootState["user"]>(
    selectUser
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!username || Boolean(error)) {
      dispatch(logout())
      router.push('/login')      
    }
  }, [])

  const router = useRouter();

  const logoutHandler = () => {
    dispatch(logout());
    router.push("/");
  };
  return username && email ? (
    <CenteredTile header="Profile">
      <h3>Name {username}</h3>
      <h3>Email {email}</h3>
      <Button onClick={logoutHandler}> Logout </Button>
    </CenteredTile>
  ) : null;
};

export default User;
