import { useState, FormEvent } from "react";

import { ScreenshotButton } from "./ScreenshotButton";

interface Props {
  onSubmit: () => void;
}

export function FeedBackContentStep({ onSubmit }: Props) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  function handleSubmitFeedback(e: FormEvent) {
    e.preventDefault();
    console.log({ screenshot, comment });

    onSubmit();
  }

  return (
    <>
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
