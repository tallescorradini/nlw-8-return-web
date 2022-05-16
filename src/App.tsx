import { ChatTeardropDots } from "phosphor-react";
import { feedbackTypes, Widget } from "./components";
import { CloseButton } from "./components/Widget/components/WidgetForm/components/CloseButton";
import { FeedbackTypeStep } from "./components/Widget/components/WidgetForm/components/FeedbackTypeStep";
import { WidgetForm } from "./components/Widget/components/WidgetForm/WidgetForm";

function App() {
  return (
    <>
      <Widget
        form={
          <WidgetForm
            firstStep={
              <FeedbackTypeStep
                header={{
                  title: "Deixe seu feedback",
                  closeButton: <CloseButton />,
                }}
                feedbackTypes={feedbackTypes}
              />
            }
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
        button={{ icon: <ChatTeardropDots />, text: "Feedback" }}
      />
    </>
  );
}

export default App;
