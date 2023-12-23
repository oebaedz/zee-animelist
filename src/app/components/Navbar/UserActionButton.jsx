import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionUrl = user ? "api/auth/signout" : "api/auth/signin";

  return (
    <div className="flex justify-center items-center gap-4">
      { user ? <Link href='/users/dashboard' >Dashboard</Link> : null}
      <Link href={actionUrl} className="bg-color-dark text-color-accent rounded-md py-1 px-4">{actionLabel}</Link>
    </div>
  );
};

export default UserActionButton;
