import { useState, useEffect } from "react";
import style from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

function MealList() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const fetchMeals = async () => {
      const responce = await fetch(
        "https://yapona-kitchen-default-rtdb.firebaseio.com/meals.json"
      );
      const responceData = await responce.json();
      const loadedMeals = [];

      for (const key in responceData) {
        loadedMeals.push({
          id: key,
          name: responceData[key].name,
          description: responceData[key].description,
          price: responceData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: "center" }}>
        <p>Загрузка...</p>
      </section>
    );
  }

  const mealList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default MealList;
