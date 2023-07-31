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
              <motion.img
                key={index}
                initial={{
                  opacity: 0,
                  y: -200,
                }}
                transition={{ duration: 2 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                src={stackItem.image}
                alt={stackItem.name}
                className="object-cover p-2"
                width={100}
                height={100}
              />
            )
        )}
      </div>
    </div>
  );
}
