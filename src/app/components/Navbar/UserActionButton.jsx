import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? 'Sign Out' : 'Sign In'
  const actionUrl = user ? 'api/auth/signout' : 'api/auth/signin'

  return (
    <div>
      <Link href={actionUrl}>{actionLabel}</Link>
    </div>
  );
};

export default UserActionButton;
