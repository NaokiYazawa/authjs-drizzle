import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ResponsiveDialog,
  ResponsiveDialogBody,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
  ResponsiveDialogTitle,
} from "@/components/responsive-dialog";
import { Separator } from "@/components/ui/separator";
import { User } from "@/db/schema";

type UserProfileDialogProps = {
  user: User;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const UserProfileDialog = ({
  user,
  isOpen,
  onOpenChange,
}: UserProfileDialogProps) => {
  const nameInitials = user.name
    ?.match(/\b(\w)/g)
    ?.join("")
    .slice(0, 2);

  return (
    <ResponsiveDialog open={isOpen} onOpenChange={onOpenChange}>
      <ResponsiveDialogContent>
        <ResponsiveDialogHeader>
          <ResponsiveDialogTitle>プロフィール</ResponsiveDialogTitle>
        </ResponsiveDialogHeader>
        <ResponsiveDialogBody className="flex flex-col gap-4 items-center">
          <Avatar className="h-28 w-28">
            <AvatarImage src={user.image ?? ""} alt="user profile image" />
            <AvatarFallback>{nameInitials}</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="text-medium">{user.name}</div>
            <div className="text-muted-foreground text-sm">{user.email}</div>
          </div>
          <div className="flex flex-col gap-3 py-4 text-sm w-full">
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span>アカウント作成日</span>
                <span>
                  {new Intl.DateTimeFormat("ja-JP", {
                    dateStyle: "full",
                  }).format(new Date(user.createdAt))}
                </span>
              </div>
            </div>
          </div>
        </ResponsiveDialogBody>
      </ResponsiveDialogContent>
    </ResponsiveDialog>
  );
};
