import { PropsWithChildren, ReactNode } from "react";
import { To } from "react-router-dom";
import TransitionLink from "./transition-link";
import { Icon } from "zmp-ui";

export interface SectionProps {
  title: ReactNode;
  viewMoreTo?: To;
  className?: string;
  onClick?: () => void;
}

export default function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <div
      className={"bg-section ".concat(props.className ?? "")}
      onClick={props.onClick}
    >
      <div className="flex items-center justify-between px-2">
        <div className="text-sm font-medium truncate p-2 pt-3 w-full">
          {props.title}
        </div>
        {props.viewMoreTo && (
          <TransitionLink
            className="text-sm font-medium text-primary flex items-center space-x-1 p-2 cursor-pointer flex-none"
            to={props.viewMoreTo}
          >
            <span>Xem thêm</span>
            <Icon icon="zi-chevron-right" />
          </TransitionLink>
        )}
      </div>
      {props.children}
    </div>
  );
}
