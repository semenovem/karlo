import React from 'react';

import Icon, { kind } from '../Btn';

interface IProps {
  className?: string;
  onClick: () => void;
}

const Cross: React.FC<IProps> = ({ className, onClick }: IProps) => (
  <Icon onClick={onClick} className={className} kind={kind.cross} ariaLabel='Закрыть' />
);

export default Cross;
