import bugImageUrl from "../../../../../assets/bug.svg";
import ideaImageUrl from "../../../../../assets/idea.svg";
import thoughtImageUrl from "../../../../../assets/thought.svg";
import { WidgetHomeHeader } from "../WidgetForm";

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
export type FeedbackType = keyof typeof feedbackTypes;

interface Props {
  onFeedbackTypeChange: (type: FeedbackType) => void;
  homeHeader: WidgetHomeHeader;
}

export function FeedbackTypeStep({ onFeedbackTypeChange, homeHeader }: Props) {
  const WidgetCloseButton = homeHeader.closeButton;
  return (
    <>
      <header>
        <span className="text-xl leading-6">{homeHeader.title}</span>

        {WidgetCloseButton}
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChange(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
