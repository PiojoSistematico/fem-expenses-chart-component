import { useState } from "react";

type BarProps = {
  today: boolean;
  value: number;
  maxAmount: number;
};

const Bar: React.FunctionComponent<BarProps> = ({
  today,
  value,
  maxAmount,
}) => {
  const [showValue, setShowValue] = useState(false);
  /* the value 180 comes from the height of the graph (200px) */
  return (
    <li>
      <div
        className={today ? "today bar" : "bar"}
        style={{ height: `${(180 * value) / maxAmount}px` }}
        onMouseEnter={() => setShowValue(true)}
        onMouseLeave={() => setShowValue(false)}
      ></div>
      <span
        className={showValue ? "show bar-value" : "bar-value"}
      >{`$${value}`}</span>
    </li>
  );
};

export default Bar;
