import Generate from "./components/generate";

export const metadata = {
  title: "BitTree | Make your page",
  description:
    "Create your page - links online to show your digital profile to everyone, it can help your to reach out.",
};

const page = () => {
  return <div>
    <Generate/>
  </div>;
};

export default page;
