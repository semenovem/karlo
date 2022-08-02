import React from "react";
import cn from "classnames";

import Icon, {kind, size} from "cmp/Icon"

export {
  kind, size
}

export interface Props {
  className?: string;
  onClick: () => void;
  kind: kind;
  size?: size;
  ariaLabel: string;
}

export default function Btn(p: Props) {
  return <Icon
    kind={p.kind}
    {...(p.size && {size: p.size})}
    {...(p.className && {className: p.className})}
    render={(cls, st) => (
      <button
        className={cn(cls, p.className)}
        onClick={p.onClick}
        type="button"
        aria-label={p.ariaLabel}
        style={st}
      />
    )}/>
}
