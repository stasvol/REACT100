import React from 'react';

type PropsContactType = {
  contactTitle: string | null;
  contactValue: string | null;
};

const Contact: React.FC<PropsContactType> = ({ contactTitle, contactValue }) => (
  <div>
    <b>{contactTitle}</b> : <i>{contactValue}</i>
  </div>
);

export default Contact;
