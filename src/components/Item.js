export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={() => onToggleItem(item.id)}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.num} {item.description}
      </span>
      <button key={item.id} onClick={() => onDeleteItem(item)}>
        ❌
      </button>
    </li>
  );
}
