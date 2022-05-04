import React, { useState } from "react";

import { FeedbackType } from "../../Widget";
import { FeedBackContentStep } from "./components/FeedbackContentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";

interface Props {
  footerContent: React.ReactNode;
  firstStep: React.ReactElement;
}

export function WidgetForm({ footerContent, firstStep }: Props) {
  // Panel navigation states
  // const [currentPannel, setCurrentPannel] = useState("home")
  const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);

  // Form states
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setIsFeedbackSubmited(false);
    setFeedbackType(null);
  }

  const FeedbackTypeStep = firstStep;
  const FooterContent = footerContent;

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSubmitted ? (
        <FeedbackSuccessStep onReturn={handleRestartFeedback} />
      ) : !feedbackType ? (
        React.cloneElement(FeedbackTypeStep, {
          onFeedbackTypeChange: setFeedbackType,
        })
      ) : (
        <FeedBackContentStep
          feedbackType={feedbackType}
          onReturn={handleRestartFeedback}
          onSubmit={() => setIsFeedbackSubmited(true)}
        />
      )}

      <footer className="text-xs text-neutral-400">{FooterContent}</footer>
    </div>
  );
}
