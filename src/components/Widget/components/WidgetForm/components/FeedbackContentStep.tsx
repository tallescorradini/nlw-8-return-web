import { ArrowLeft } from "phosphor-react";
import { useState, FormEvent } from "react";

import { CloseButton } from "./CloseButton";
import { FeedbackType, feedbackTypes } from "./FeedbackTypeStep";
import { ScreenshotButton } from "./ScreenshotButton";

interface Props {
  feedbackType: FeedbackType;
  onReturn: () => void;
  onSubmit: () => void;
}

export function FeedBackContentStep({
  feedbackType,
  onReturn,
  onSubmit,
}: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log({ screenshot, comment });

    onSubmit();
  }

  return (
    <>
      <header>
        <button
          onClick={onReturn}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            alt={feedbackTypeInfo.image.alt}
            src={feedbackTypeInfo.image.source}
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          onChange={(e) => setComment(e.target.value)}
          placeholder="Conte com detalhes o que está acontecendo..."
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scroolbar-track-transparent scrollbar-thin"
        />

        <div className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.trim().length === 0}
            className="p-2 bg-brand-500 rounded border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </div>
      </form>
    </>
  );
}