import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string }
}

export default async function Page ({ params }: Props) {

  const page = await getPage(params.slug);

  return (
    <div>
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5'>{page.title}</h1>
      <div className="text-lg mt-10 prose dark:prose-invert">
        <PortableText value={page.content} />
      </div>
    </div>

  )
}