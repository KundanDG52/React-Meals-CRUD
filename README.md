# React Meals CRUD

A React-based application for managing meal records, featuring Create, Read, Update, and Delete (CRUD) operations using Axios for API interactions.

## Features
- **Meal Management**: Add, view, update, and delete meals.
- **Admin Modal**: A modal interface for admin interactions.
- **API Integration**: Connects to a mock API for persistent data handling.
- **Responsive Design**: Optimized for various screen sizes.

## Tech Stack
- **Frontend**: React.js
- **Styling**: CSS Modules
- **API Calls**: Axios

## Installation

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:KundanDG52/React-Meals-CRUD.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd React-Meals-CRUD-master
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Start the Application**:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
React-Meals-CRUD/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── AdminModal.js
│   │   ├── MealList.js
│   │   └── styles.module.css
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── package-lock.json
```

## API Endpoints
This project uses a mock API to manage meals. You can replace it with your own backend if needed.

### Example Endpoints:
- **Get Meals**: `GET /meals`
- **Add Meal**: `POST /meals`
- **Update Meal**: `PUT /meals/:id`
- **Delete Meal**: `DELETE /meals/:id`

## Usage
1. Launch the app.
2. Perform CRUD operations via the UI:
   - Add a new meal.
   - View a list of meals.
   - Edit an existing meal.
   - Delete a meal.

## Contributing
Feel free to fork this repository and submit pull requests for new features, bug fixes, or improvements.

## License
This project is licensed under the [MIT License](LICENSE).

---

### Author
**Kundan Gahalot**  
Email: [gahalotkundan@gmail.com](mailto:gahalotkundan@gmail.com)
