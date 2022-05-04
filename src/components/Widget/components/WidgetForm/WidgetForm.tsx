import { useState } from "react";

import { FeedBackContentStep } from "./components/FeedbackContentStep";
import { FeedbackSuccessStep } from "./components/FeedbackSuccessStep";
import { FeedbackType, FeedbackTypeStep } from "./components/FeedbackTypeStep";

export interface WidgetHomeHeader {
  title: string;
  closeButton: React.ReactNode;
}
interface Props {
  homeHeader: WidgetHomeHeader;
  footerContent: React.ReactNode;
}

export function WidgetForm({ homeHeader, footerContent }: Props) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [isFeedbackSubmitted, setIsFeedbackSubmited] = useState(false);

  function handleRestartFeedback() {
    setIsFeedbackSubmited(false);
    setFeedbackType(null);
  }

  const FooterContent = footerContent;

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {isFeedbackSubmitted ? (
        <FeedbackSuccessStep onReturn={handleRestartFeedback} />
      ) : !feedbackType ? (
        <FeedbackTypeStep
          homeHeader={homeHeader}
          onFeedbackTypeChange={setFeedbackType}
        />
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
