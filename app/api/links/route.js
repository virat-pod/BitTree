import { connectDB } from "@/lib/db/connectDB";
import links from "@/lib/model/links";

export async function POST(req) {
  const body = await req.json();
  if (!body) return Response.json({ success: false, error: true, message: "No data" });
  await connectDB();

  const user = await links.findOne({handle: body.handle})
  if(user){
    return Response.json({success: false, error: false, message: "This bittree already existed"})
  }

  const result = await links.create({
    handle: body.handle,
    link: body.link.map((item) => ({
      url: item.url,
      linkText: item.linkText || "link",
    })),
    description: body.description || "",
    profile: body.profile || "",
  });

  return Response.json({
    success: true,
    error: false,
    message: "Has been added",
    result,
  });
}

