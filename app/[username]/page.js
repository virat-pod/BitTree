import { connectDB } from "@/lib/db/connectDB";
import links from "@/lib/model/links";
import UserProfile from "./components/userLink";
import NotFound from "../not-found";

export async function generateMetadata({ params }) {
  const { username } = await params;
  console.log(username)

  await connectDB();
  const user = await links.findOne({ handle: username });
  console.log(user)

  return {
    title: user ? `BitTree | ${user.handle}` : "User Not Found",
    description: user
      ? `Check out ${user.handle}'s profile on BitTree`
      : "User not found",
  };
}

const User = async ({ params }) => {
  const { username } = await params;
  await connectDB();
  const user = await links.findOne({ handle: username });
  if (!user) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-zinc-300 flex justify-center sm:items-start sm:pt-14">
      <UserProfile userInfo={JSON.parse(JSON.stringify(user))} />
    </div>
  );
};

export default User;
