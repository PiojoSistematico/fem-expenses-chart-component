import icon from "./assets/images/logo.svg";

function App() {
  const today = new Date();

  console.log(today.getDay());

  return (
    <main>
      <header className="flex-between">
        <div>
          <span>My balance</span>
          <h1>$921.48</h1>
        </div>
        <img src={icon} alt="" />
      </header>
      <section className="spending-section">
        <h2>Spending - Last 7 days</h2>
        <section className="graph-section">
          <ul className="days">
            <li className="bar"> </li>
            <li className="bar"> </li>
            <li className="bar"> </li>
            <li className="bar"> </li>
            <li className="bar"> </li>
            <li className="bar"> </li>
            <li className="bar"> </li>
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
      </section>
    </main>
  );
}

export default App;
