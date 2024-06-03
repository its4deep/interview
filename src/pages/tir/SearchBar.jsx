export default function SearchBar({
  filterText,
  isStockChecked,
  onChangeFiterText,
  onIsStockChecked,
}) {
  return (
    <>
      <form>
        <input
          value={filterText}
          type="text"
          placeholder="Search here"
          onChange={(e) => onChangeFiterText(e.target.value)}
        ></input>
        <br />
        <label>
          <input
            checked={isStockChecked}
            type="checkbox"
            onChange={(e) => onIsStockChecked(e.target.checked)}
          ></input>
          Check and filter stocked item only
        </label>
      </form>
    </>
  );
}
