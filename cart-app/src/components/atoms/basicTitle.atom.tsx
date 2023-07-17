import React from 'react';


type Props =  {
    title:string;
  value: number|string;
}

const BasicTitle: React.FC<Props> = ({ title,value }) => {
  return (
    <div>
      <strong>{title}:</strong> <span>{value}</span>
    </div>
  );
};

export default BasicTitle;