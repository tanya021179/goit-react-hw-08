import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div>
      <h1 className={s.title}>Welkom!</h1>
      <h2 className={s.text}>Hier is your phonebook</h2>
    </div>
  );
};

export default HomePage;
