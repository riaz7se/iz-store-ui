
const [items, setItems] = useState([
  {
    id: 1,
    checked: true,
    item: iPhone,
  },
]);

//iterate over list & set checked item to true

const handleClick = (checkedId) => {
  const listItems = items.map((item) =>
    item.id === checkedId ? 
        { ...item, checked: !item.checked } : item
  );
  setItems(listItems);
};
