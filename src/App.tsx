import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";
import React from "react";
import { feedbackTypes, Widget } from "./components";
import { CloseButton } from "./components/Widget/components/WidgetForm/components/CloseButton";
import { FeedbackTypeStep } from "./components/Widget/components/WidgetForm/components/FeedbackTypeStep";
import { WidgetForm } from "./components/Widget/components/WidgetForm/WidgetForm";

function App() {
  return (
    <>
      <Widget
        popoverButton={
          <WidgetPopoverButton
            icon={<ChatTeardropDots className="w-6 h-6" />}
            text="Feedback"
          />
        }
        form={
          <WidgetForm
            header={
              <WidgetHeader
                title={
                  <span className="text-xl leading-6">Deixe seu feedback</span>
                }
                closeButton={<CloseButton />}
              />
            }
            firstStep={<FeedbackTypeStep feedbackTypes={feedbackTypes} />}
            footerContent={
              <span>
                Feito com ♥ pela{" "}
                <a
                  href="https://rocketseat.com.br"
                  className="underline underline-offset-2"
                >
                  Rocketseat
                </a>
              </span>
            }
          />
        }
      />
    </>
  );
}

export default App;

interface WidgetHeader {
  returnButton?: React.ReactNode;
  title: React.ReactNode;
  closeButton: React.ReactNode;
}

function WidgetHeader({
  returnButton: ReturnButton = null,
  title: Title,
  closeButton: CloseButton,
}: WidgetHeader) {
  return (
    <header>
      {ReturnButton !== null ? ReturnButton : null}

      {Title !== null ? Title : null}

      {CloseButton}
    </header>
  );
}

interface WidgetPopoverButtonProps {
  icon: React.ReactNode;
  text: string;
}

function WidgetPopoverButton({ icon: Icon, text }: WidgetPopoverButtonProps) {
  return (
    <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
      {Icon}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2"></span>
        {text}
      </span>
    </Popover.Button>
  );
}
