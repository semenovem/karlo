import React from "react";

import Icon, {kind} from "../Btn";

export interface Props {
  className?: string;
  onClick: () => void;
}

const Cross: React.FC<Props> = ({className, onClick}: Props) => (
  <Icon
    onClick={onClick}
    className={className}
    kind={kind.cross}
    ariaLabel="Закрыть"
  />
);

export default Cross;
