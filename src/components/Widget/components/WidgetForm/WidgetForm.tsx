import { ArrowLeft } from "phosphor-react";
import React, { cloneElement, useState } from "react";

import { FeedbackType, feedbackTypes } from "../../Widget";
import { FeedBackContentStep } from "./components/FeedbackContentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";

interface Props {
  header: React.ReactElement;
  footerContent: React.ReactNode;
  firstStep: React.ReactElement;
}

export function WidgetForm({
  header: Header,
  footerContent: FooterContent,
  firstStep: FeedbackTypeStep,
}: Props) {
  // Panel navigation states
  // const [currentPannel, setCurrentPannel] = useState("home")
  const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);

  // Form states
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setIsFeedbackSubmited(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSubmitted ? (
        <>
          {cloneElement(Header, {
            returnButton: null,
            title: null,
          })}
          <FeedbackSuccessStep onReturn={handleRestartFeedback} />
        </>
      ) : feedbackType !== null ? (
        <>
          {cloneElement(Header, {
            returnButton: <ReturnButton onClick={handleRestartFeedback} />,
            title: (
              <WidgetTitle
                image={
                  <img
                    alt={feedbackTypes[feedbackType].image.alt}
                    src={feedbackTypes[feedbackType].image.source}
                  />
                }
                text={feedbackTypes[feedbackType].title}
              />
            ),
          })}
          <FeedBackContentStep onSubmit={() => setIsFeedbackSubmited(true)} />
        </>
      ) : (
        <>
          {Header}
          {cloneElement(FeedbackTypeStep, {
            onFeedbackTypeChange: setFeedbackType,
          })}
        </>
      )}

      <footer className="text-xs text-neutral-400">{FooterContent}</footer>
    </div>
  );
}

function ReturnButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
    >
      <ArrowLeft weight="bold" className="w-4 h-4" />
    </button>
  );
}

function WidgetTitle({
  image: Image,
  text,
}: {
  image: React.ReactElement;
  text: string;
}) {
  return (
    <span className="text-xl leading-6 flex items-center gap-2">
      {Image}
      {text}
    </span>
  );
}
