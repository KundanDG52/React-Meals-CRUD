// Admin Modal Component
import React from "react";
import { useState, useEffect } from "react";
import { X, Loader } from "lucide-react";
import styles from "./styles.module.css";
const AdminModal = ({ isOpen, onClose, onSave, initialData = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error("Error saving meal:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-lg w-[500px]">
        <div className="p-6">
          <div className="">
            <h2 className="text-2xl font-bold">
              {initialData ? "Edit" : "Add"} Meal
            </h2>
            <button onClick={onClose} className={styles.closeButton}>
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className={styles.addMealForm}>
            <div className={styles.formControl}>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                style={{ border: "none" }}
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <div className={styles.formControl}>
              <label>Description</label>
              <textarea
                style={{ border: "none" }}
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className=""
                required
              />
            </div>
            <div className={styles.formControl}>
              <label>Price</label>
              <input
                style={{ border: "none" }}
                type={"number"}
                step="0.01"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full border rounded-md p-2"
                required
              />
            </div>
            <button type="submit" disabled={loading} className={styles.button}>
              {loading ? (
                <Loader className="animate-spin mx-auto" />
              ) : (
                (initialData ? "Update" : "Add") + " Meal"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminModal;
