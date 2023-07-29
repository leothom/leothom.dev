"use client"
import { useEffect, useState } from "react";
import { getStack } from "@/sanity/sanity-utils";
import { motion } from "framer-motion";

interface StackItem { 
  image: string;
  name: string;
}

export default function StackGrid() {
  const [stack, setStack] = useState<StackItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStack();
      setStack(data);
    };

    fetchData();
  }, []);

  return (
    
    <div className="h-screen justify-center">
      <h1 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-red-600 to-purple-500 dark:from-blue-700 dark:via-gray-500 dark:to-white bg-clip-text text-transparent'>Stack</h1>
      <div className='mt-10 grid grid-cols-3 lg:grid-cols-4 gap-4 align-middle'>
      {stack.map((stackItem, index) => (
          stackItem.image && (
            <motion.img
            key={index}
            initial={{
              opacity: 0,
            }}
            transition={{duration: 1}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            src={stackItem.image}
                alt={stackItem.name}
            className="object-cover p-2"
            width={100}
            height={100}
          />
          )
      ))}
      </div>
    </div>
      
    
  );
}
