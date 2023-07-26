import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page ({ params }: Props) {

  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{page.title}</h1>
      <div className="text-lg mt-10 prose prose-slate">
        <PortableText value={page.content} />
      </div>
    </div>

  )
}