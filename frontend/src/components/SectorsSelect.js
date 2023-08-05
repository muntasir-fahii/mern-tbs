const SectorsSelect = ({ type, value, onChange, placeholder }) => {
  const sectors = [
    { id: 1, name: "Manufacturing" },
    { id: 2, name: "Construction materials" },
    { id: 3, name: "Electronics and Optics" },
    { id: 4, name: "Food and Beverage " },
    { id: 5, name: "Bakery & Confectionary Products " },
    { id: 6, name: "Beverages " },
    { id: 7, name: "Fish & Fish Products " },
    { id: 8, name: "Meat & Meat Products " },
    { id: 9, name: "Milk & Dairy Products " },
    { id: 10, name: "Other " },
    { id: 11, name: "Sweet & Snacks food " },
    { id: 12, name: "Furniture " },
  ];
  return (
    <div className="flex justify-center items-center">
      <select value={value} onChange={onChange} required>
        <option value="value">{placeholder}</option>
        {sectors.map((sector) => (
          <option key={sector.id} value={sector.name}>
            {sector.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SectorsSelect;
