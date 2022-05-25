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
        button={
          <WidgetPopoverButton
            icon={<ChatTeardropDots className="w-6 h-6" />}
            text="Feedback"
          />
        }
        pannel={
          <WidgetForm
            header={
              <WidgetHeader
                text="Deixe seu feedback"
                closeButton={<CloseButton />}
              />
            }
            firstStep={<FeedbackTypeStep feedbackTypes={feedbackTypes} />}
            footer={
              <WidgetPannelFooter
                message="Feito com ♥ pela Rocketseat"
                link={{ text: "Rocketseat", href: "https://rocketseat.com.br" }}
              />
            }
          />
        }
      />
    </>
  );
}

export default App;

export interface WidgetHeaderProps {
  returnButton?: React.ReactNode;
  text: string;
  icon?: React.ReactNode;
  closeButton: React.ReactNode;
}

function WidgetHeader({
  returnButton: ReturnButton = null,
  text,
  icon: Icon,
  closeButton: CloseButton,
}: WidgetHeaderProps) {
  const TitleWithoutIcon = <span className="text-xl leading-6">{text}</span>;
  const TitleWithIcon = (
    <span className="text-xl leading-6 flex items-center gap-2">
      {Icon}
      {text}
    </span>
  );
  const Title = Icon === null ? TitleWithoutIcon : TitleWithIcon;

  return (
    <header>
      {ReturnButton !== null ? ReturnButton : null}

      {text !== "" ? Title : null}

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
    <>
      {Icon}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
        <span className="pl-2"></span>
        {text}
      </span>
    </>
  );
}

interface WidgetPannelFooterProps {
  message: string;
  link: { text: string; href: string };
}

function WidgetPannelFooter({ message, link }: WidgetPannelFooterProps) {
  const composedMessage = message.replace(link.text, "");
  return (
    <footer className="text-xs text-neutral-400">
      {composedMessage}
      <a href={link.href} className="underline underline-offset-2">
        {link.text}
      </a>
    </footer>
  );
}
