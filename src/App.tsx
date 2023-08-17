import { useEffect, useState } from "react";
import icon from "./assets/images/logo.svg";
import Bar from "./components/Bar";

type DataElement = {
  day: string;
  amount: number;
};

function App() {
  const today = new Date();
  const [data, setData] = useState<DataElement[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  let maxAmount: number = 0;

  if (data.length > 0) {
    maxAmount = data.reduce(
      (max, elem) => (elem.amount > max ? elem.amount : max),
      data[0].amount
    );
  }

  console.log("day", today.getDay());
  console.log("max", maxAmount);

  return (
    <>
      <header className="flex-between">
        <div>
          <span>My balance</span>
          <h1>$921.48</h1>
        </div>
        <img src={icon} alt="" />
      </header>
      <main>
        <h2>Spending - Last 7 days</h2>
        <section className="graph-section">
          <ul className="days graph">
            {data.map((elem) => (
              <Bar value={elem.amount} maxAmount={maxAmount}></Bar>
            ))}
          </ul>
          <ul className="days">
            <li>mon</li>
            <li>tue</li>
            <li>wed</li>
            <li>thu</li>
            <li>fri</li>
            <li>sat</li>
            <li>sun</li>
          </ul>
        </section>
        <section className="summary-section">
          <h4>Total this month</h4>
          <div className="flex-between">
            <h3>$478.33</h3>
            <div className="details-section">
              <span className="change">+2.4%</span>
              <span>from last month</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
