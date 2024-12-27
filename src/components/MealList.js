import React, { useState, useEffect } from "react";
import AdminModal from "./AdminModal";
import {
  fetchMeals,
  createMeal,
  deleteMeal,
  updateMeal,
} from "../services/api";
import styles from "./styles.module.css";
// import Loader from "lucide-react";

const MealList = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [editingMeal, setEditingMeal] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    loadMeals();
  }, []);

  const loadMeals = async () => {
    try {
      const data = await fetchMeals();
      setMeals(data);
      setError(null);
    } catch (err) {
      setError("Failed to load meals");
    } finally {
      setLoading(false);
    }
  };

  const handleSaveMeal = async (mealData) => {
    try {
      if (editingMeal) {
        const updated = await updateMeal(editingMeal.id, mealData);
        setMeals(
          meals.map((meal) => (meal.id === editingMeal.id ? updated : meal))
        );
      } else {
        const created = await createMeal(mealData);
        setMeals([...meals, created]);
      }
      setEditingMeal(null);
    } catch (err) {
      console.error("Error saving meal:", err);
    }
  };

  const handleDeleteMeal = async (id) => {
    if (!window.confirm("Are you sure you want to delete this meal?")) return;

    try {
      await deleteMeal(id);
      setMeals(meals.filter((meal) => meal.id !== id));
    } catch (err) {
      console.error("Error deleting meal:", err);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        {/* <Loader className="animate-spin" size={48} /> */}
        loading
      </div>
    );
  if (error)
    return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h1>React Meals</h1>
          <div className="flex gap-4">
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={styles.button}
            >
              {isAdmin ? "Exit Admin" : "Admin Mode"}
            </button>
            {isAdmin && (
              <button
                onClick={() => {
                  setEditingMeal(null);
                  setIsAdminModalOpen(true);
                }}
                className={styles.adminButton}
              >
                Add New Meal
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Description Section */}
      <div>
        <div className={styles.titleSection}>
          <h2>Delicious Food, Delivered To You</h2>
          <p className="mb-2">
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>

      {/* Meals List */}
      <div className={styles.meals}>
        <div className={styles.mealItem}>
          {meals.map((meal) => (
            <div
              key={meal.id}
              className="flex justify-between items-center border-b pb-4"
            >
              <div>
                <h3 className={styles.mealItem}>{meal.name}</h3>
                <p className={styles.description}>{meal.description}</p>
                <p className={styles.price}>${Number(meal.price).toFixed(2)}</p>
              </div>
              {isAdmin && (
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setEditingMeal(meal);
                      setIsAdminModalOpen(true);
                    }}
                    className={styles.editButton}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMeal(meal.id)}
                    className={styles.deleteButton}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Admin Modal */}
      <AdminModal
        isOpen={isAdminModalOpen}
        onClose={() => {
          setIsAdminModalOpen(false);
          setEditingMeal(null);
        }}
        onSave={handleSaveMeal}
        initialData={editingMeal}
      />
    </div>
  );
};

export default MealList;
