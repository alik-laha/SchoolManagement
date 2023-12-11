import "./StockEntry.css";

const StockEntry = () => {
  return (
    <div className="Stock">
      <label className="inp">
        Serial No
        <input type="number" className="small" />
      </label>
      <label className="inp">
        Item type
        <input type="text" className="big" />
      </label>
    </div>
  );
};
export default StockEntry;
