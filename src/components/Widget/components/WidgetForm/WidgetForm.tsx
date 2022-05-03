import { useState } from "react";

import { FeedBackContentStep } from "./components/FeedbackContentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";
import { FeedbackType, FeedbackTypeStep } from "./components/FeedbackTypeStep";

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);

  function handleRestartFeedback() {
    setIsFeedbackSubmited(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSubmitted ? (
        <FeedbackSuccessStep onReturn={handleRestartFeedback} />
      ) : !feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
      ) : (
        <FeedBackContentStep
          feedbackType={feedbackType}
          onReturn={handleRestartFeedback}
          onSubmit={() => setIsFeedbackSubmited(true)}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          href="https://rocketseat.com.br"
          className="underline underline-offset-2"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
