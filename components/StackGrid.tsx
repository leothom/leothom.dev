"use client";
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
    <div className="min-h-screen justify-center">
      <div className="mt-10 grid grid-cols-3 lg:grid-cols-4 gap-4 align-middle items-center">
        {stack.map(
          (stackItem, index) =>
            stackItem.image && (
              <div className="group relative flex cursor-pointer" key={index}>
                <motion.img
                  key={index}
                  initial={{
                    y: -200,
                  }}
                  transition={{ duration: 1.5 }}
                  whileInView={{
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  src={stackItem.image}
                  alt={stackItem.name}
                  className="p-2 filter group-hover:grayscale transition duration-25 ease-in-out z-0 w-24 h-24"
                />
                <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24">
                  <div className="flex items-center justify-center h-full">
                    <p className="text-md font-bold text-black opacity-100 z-20">
                      {stackItem.name}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
