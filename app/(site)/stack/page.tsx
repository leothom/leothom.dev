"use client"
import { useEffect, useState } from "react";
import { getStack } from "@/sanity/sanity-utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function StackGrid() {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStack();
      setStack(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent'>Stack</h1>
      <div className='mt-10 grid grid-cols-3 lg:grid-cols-4 gap-4 align-middle'>
      {stack.map((stackItem, index) => (
          stackItem.image && (
            <motion.div
              key={index} // key prop added here
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .5 }}
            >
              <Image
                src={stackItem.image}
                alt={stackItem.name}
                className='object-cover py-5'
                width={75}
                height={75}
              />
            </motion.div>
          )
      ))}
      </div>
    </>
  );
}
