function ListItem({ title, value }) {
  return (
    <li>
      <span className="font-bold">{title} :</span> {value}
    </li>
  );
}

export default ListItem;
