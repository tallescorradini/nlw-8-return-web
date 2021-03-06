import { ArrowLeft } from "phosphor-react";
import React, { cloneElement, useState } from "react";
import { WidgetHeaderProps } from "../../../../App";

import { FeedbackType, feedbackTypes } from "../../Widget";
import { FeedBackContentStep } from "./components/FeedbackContentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";

interface Props {
  header: React.ReactElement<WidgetHeaderProps>;
  footer: React.ReactNode;
  firstStep: React.ReactElement;
}

export function WidgetForm({
  header: Header,
  footer: Footer,
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
    <>
      {isFeedbackSubmitted ? (
        <>
          {cloneElement(Header, {
            returnButton: null,
            text: "",
          })}
          <FeedbackSuccessStep onReturn={handleRestartFeedback} />
        </>
      ) : feedbackType !== null ? (
        <>
          {cloneElement(Header, {
            returnButton: <ReturnButton onClick={handleRestartFeedback} />,
            text: feedbackTypes[feedbackType].title,
            icon: (
              <img
                alt={feedbackTypes[feedbackType].image.alt}
                src={feedbackTypes[feedbackType].image.source}
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

      {Footer}
    </>
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
