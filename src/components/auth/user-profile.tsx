import { Button } from "@/components/ui/button";
import { database } from "@/db/database";

import { SigninDialog } from "./signin-dialog";
import { UserProfileDropdown } from "./user-profile-dropdown";
import { auth } from "@/auth";
import { eq } from "drizzle-orm";
import { users } from "@/db/schema";

const renderSigninDialog = () => (
  <SigninDialog>
    <Button size="sm">Sign In</Button>
  </SigninDialog>
);

export const UserProfile = async () => {
  const session = await auth();
  if (!session) {
    return renderSigninDialog();
  }

  const result = await database.query.users.findFirst({
    where: eq(users.id, session.user.id),
  });
  if (!result) {
    return renderSigninDialog();
  }

  return <UserProfileDropdown user={result} />;
};
