import { Button } from "@/components/Button/Button";
import { CenteredTile } from "@/components/Tile/CenteredTile";
import type { NextPage } from "next";

const User: NextPage = () => {
  const logoutHandler = async() => {
    console.log('logout');
  }

  return (
    <CenteredTile header="Profile">
      <h3>User Name</h3>
      <h3>User Email</h3>
      <Button onClick={logoutHandler}> Logout </Button>
    </CenteredTile>
  );
};

export default User;
