## Links

- **Deployment URL:** [https://stopshop-kxdb.onrender.com](https://stopshop-kxdb.onrender.com)

# Stop Shop

Stop Shop is an e-commerce web application designed to provide users with a seamless shopping experience. It offers a wide range of products, allows users to add items to their cart, and facilitates the checkout process.

## Features

- Browse products from various categories.
- Add items to the shopping cart.
- View and edit the shopping cart.
- Proceed to checkout and place orders.
- User authentication and account management.

## Technologies Used

- **React.js:** Frontend framework for building user interfaces.
- **Redux:** State management library for managing application state.
- **Firebase:** Backend service for authentication and database.
- **Axios:** HTTP client for making API requests.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/bobbyrepo/e-comm-react-firebase
```

2.  Navigate to the project directory:

```bash
cd e-comm-react-firebase
```

3.  Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add the following environment variables mentioned in the .env.example
5. Start the development server:

```bash
npm run dev`
```

6. Open your web browser

## Development Process

The development of Stop Shop involved the following key steps:

1. **Designing the User Interface:** The UI was designed to be intuitive and user-friendly, using Tailwind CSS for styling and React components for the frontend.

2. **Implementing Functionality:** Functionality such as adding items to the cart, managing user authentication, and processing orders was implemented using React.js and Redux for state management.

3. **Integrating with Backend:** API calls to fetch product data, manage user authentication, and process orders were integrated using Axios. Firebase was used for authentication and Firestore for storing order data.

4. **Testing and Debugging:** The application was thoroughly tested to ensure all features work as expected and debugged to resolve any issues encountered during development.

## Challenges Faced and Solutions Implemented

### Challenge: Managing State

Solution: Redux was used for state management, allowing for centralized and predictable state management across components.

### Challenge: Integrating with Firebase

Solution: Firebase SDK was integrated into the application to handle user authentication and data storage, providing a reliable backend infrastructure.

### Challenge: Styling Consistency

Solution: Tailwind CSS utility classes were used for styling to ensure consistency and maintainability across the application.
