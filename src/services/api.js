// API Functions
const API_URL =
  "https://676b9effbc36a202bb851ec4.mockapi.io/react-meals/v1/crud";

const fetchMeals = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch meals");
  return response.json();
};

const createMeal = async (mealData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mealData),
  });
  if (!response.ok) throw new Error("Failed to create meal");
  return response.json();
};

const updateMeal = async (id, mealData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mealData),
  });
  if (!response.ok) throw new Error("Failed to update meal");
  return response.json();
};

const deleteMeal = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete meal");
  return response.json();
};

export { createMeal, deleteMeal, fetchMeals, updateMeal };
