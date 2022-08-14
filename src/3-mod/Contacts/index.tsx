import React from 'react';

interface IProps {
  classname?: string;
}

export default function ModContacts(p: IProps) {
  return (
    <div className={p.classname}>
      <div>Телефон</div>
      <div>Email</div>
      <div>Whatsapp</div>
    </div>
  );
}
