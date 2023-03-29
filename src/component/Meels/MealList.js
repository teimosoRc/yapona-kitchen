<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import React from "react";
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
import style from "./MealList.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

<<<<<<< HEAD
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
=======
const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Ролл "Наоми"',
    description:
      "Сыр Филадельфия, куриное филе, масаго, помидор, огурец, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососе",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суши с угрем",
    description: "Угорь копченый, соус унаги, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке с лососем"',
    description:
      "Рис, лосось, огурец, чука, нори, стружка тунца, соус ореховый",
    price: 7.99,
  },
];

function MealList() {
  const mealList = DUMMY_MEALS.map((meal) => (
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
<<<<<<< HEAD

=======
>>>>>>> a1e14b9ad97dfb47b8240a2ee0bcd48ab0528213
  return (
    <section className={style.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
}

export default MealList;
