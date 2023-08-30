const Home = () => {
  const names = ["Sonny", "Jay", "Elon", "Jeff", "Bill"];
  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={name}>
            The #{i} name in the list is {name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
