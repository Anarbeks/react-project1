import React from "react";

function Categories() {
  const [activeIndex, setActiveindex] = React.useState(0);

  const categories = ["Все", "Сеты", "Роллы"];
  const onClickCategory = (index) => {
    setActiveindex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li
            key={i}
            onClick={() => setActiveindex(i)}
            className={activeIndex === i ? "active" : ""}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
