import { Button } from "@/components/ui/button";

import { SigninDialog } from "./signin-dialog";
import { UserProfileDropdown } from "./user-profile-dropdown";
import getSession from "@/lib/session";

const renderSigninDialog = () => (
  <SigninDialog>
    <Button size="sm">Sign In</Button>
  </SigninDialog>
);

export const UserProfile = async () => {
  const session = await getSession();
  if (!session?.user) {
    return renderSigninDialog();
  }

  return <UserProfileDropdown user={session?.user} />;
};
