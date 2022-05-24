import React from "react";
import { Popover } from "@headlessui/react";

import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Um balão de pensamento",
    },
  },
};
export interface FeedbackTypeObject {
  title: string;
  image: {
    source: string;
    alt: string;
  };
}
export type FeedbackType = keyof typeof feedbackTypes;

interface Props {
  button: React.ReactNode;
  pannel: React.ReactNode;
}

export function Widget({ button: Button, pannel: Pannel }: Props) {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {Pannel}
      </Popover.Panel>
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        {Button}
      </Popover.Button>
    </Popover>
  );
}
