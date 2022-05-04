import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

import { WidgetForm } from "./components/WidgetForm/WidgetForm";
import React from "react";
import { CloseButton } from "./components/WidgetForm/components/CloseButton";

interface WidgetButton {
  icon: React.ReactElement;
  text: string;
}
interface Props {
  button: WidgetButton;
}

export function Widget({ button }: Props) {
  const WidgetButtonIcon = button.icon;
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm
          homeHeader={{
            title: "Deixe seu feedback",
            closeButton: <CloseButton />,
          }}
          // homeContent={{formField}} maybe WidgetForm should have context to interact with the rest of the form fields
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
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        {React.cloneElement(WidgetButtonIcon, { className: "w-6 h-6" })}

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          {button.text}
        </span>
      </Popover.Button>
    </Popover>
  );
}
