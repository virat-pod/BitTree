import { Suspense } from "react";
import Generate from "./components/generatePage";

export const metadata = {
  title: "BitTree | Make your page",
  description:
    "Create your page - links online to show your digital profile to everyone, it can help your to reach out.",
};

const page = () => {
  return <Suspense fallback={<div>Loading...</div>}> <div>
    <Generate/>
  </div>
  </Suspense>
};

export default page;
