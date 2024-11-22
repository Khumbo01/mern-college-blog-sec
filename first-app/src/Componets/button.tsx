import React from "react"

interface Props {
  children: string;
  color: string;
  onClick: () => void;
}

const ReactButton = ({ children, color = 'primary',onClick }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ReactButton;
