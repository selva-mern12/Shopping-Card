Shopping Cart App
📌 Project Overview
This is a simple React-based shopping cart application that allows users to:

Add products to the cart

Update product quantities

Track progress towards earning a free gift when the cart subtotal reaches $1000

The application is built using React’s built-in state management with useState and useEffect.

🚀 How to Run the Project
1️⃣ Clone the Repository

git clone [<your-repo-link>](https://github.com/selva-mern12/Shopping-Card)
cd shopping_cart
2️⃣ Install Dependencies

npm install
3️⃣ Start the Development Server

npm start
This will start the app on http://localhost:3000/

🏗️ Project Structure

shopping_cart/
│── node_modules/          # Installed dependencies
│── public/                # Public assets
│── src/                   # Main source code
│   ├── components/        # UI Components
│   │   ├── Cart/          # Shopping cart UI & logic
│   │   ├── PriceTracker/  # Progress bar & free gift logic
│   │   ├── Products/      # Product list & interactions
│   ├── App.js             # Main application file
│   ├── index.js           # React root render
│   ├── index.css          # Global styles
│── .gitignore             # Files to ignore in Git
│── package.json           # Project dependencies & scripts
│── README.md              # Project documentation

🎯 Features Implemented
✅ Product Listing – Displays available products
✅ Add to Cart – Users can add items to their cart
✅ Quantity Selector – Increase or decrease item count
✅ Cart Management – Remove items from the cart
✅ Progress Bar – Tracks how much is left to earn a free gift
✅ Free Gift System – Automatically adds a free gift when subtotal ≥ $1000
✅ State Management – Uses useState & useEffect

🔧 Technologies Used
React.js – Frontend framework

CSS – Styling