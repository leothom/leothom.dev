import { getStack } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function StackGrid() {
  const stack = await getStack();

  return (
    <>
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent md:py-10 py-5'>Stack</h1>
      <div className='mt-10 grid grid-cols-3 lg:grid-cols-4 gap-4 align-middle'>
      {stack.map((stackItem) => (
          stackItem.image && (
              <Image
                src={stackItem.image}
                alt={stackItem.name}
                className='object-cover py-5'
                width={75}
                height={75}
              />
          )
      ))}
      </div>
    </>
  )
}
