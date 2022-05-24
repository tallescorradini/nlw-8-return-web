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
  children: React.ReactNode;
}

export function Widget({ children }: Props) {
  console.log(children);
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      {children}
    </Popover>
  );
}
