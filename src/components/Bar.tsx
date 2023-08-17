type BarProps = {
  value: number;
  maxAmount: number;
};

const Bar: React.FunctionComponent<BarProps> = ({ value, maxAmount }) => {
  /* the value 180 comes from the height of the graph (200px) */
  return (
    <li className="bar" style={{ height: `${(180 * value) / maxAmount}px` }}>
      {" "}
    </li>
  );
};

export default Bar;
