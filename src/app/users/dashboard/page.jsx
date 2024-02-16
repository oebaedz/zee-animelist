import HeaderMenu from "@/app/components/Utilities/HeaderMenu";
import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";

const Dashboard = async () => {
  const user = await authUserSession();
  return (
    <>
      <HeaderMenu title="Dashboard" />
      <div className="text-color-primary font-light flex flex-col items-center gap-2 justify-center">
        <div>Welcome home, {user?.name}</div>
        <Image src={user?.image} alt='user' width={200} height={200} className="rounded-full"/>
      <div className="flex mt-2 gap-2">
        <Link href='/users/dashboard/favorite' className="text-color-dark bg-color-accent px-6 py-1 font-bold">My Favorite</Link>
        <Link href='/users/dashboard/comment' className="text-color-dark bg-color-accent px-6 py-1 font-bold">My Comments</Link>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
