import cn from 'classnames';
import React from 'react';

import Icon, { kind, size } from '5-cmp/Icon';

export { kind, size };

interface IProps {
  className?: string;
  onClick: () => void;
  kind: kind;
  size?: size;
  ariaLabel: string;
}

export default function Btn(p: IProps) {
  return (
    <Icon
      kind={p.kind}
      {...(p.size && { size: p.size })}
      {...(p.className && { className: p.className })}
      render={(cls, st) => (
        <button
          className={cn(cls, p.className)}
          onClick={p.onClick}
          type='button'
          aria-label={p.ariaLabel}
          style={st}
        />
      )}
    />
  );
}
