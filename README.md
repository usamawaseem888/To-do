
# ToDo App with React and Bootstrap

A simple and efficient ToDo application built using React, Bootstrap, and Vite. This app allows users to add, edit, and delete tasks while persisting data in local storage. The app is designed with a user-friendly interface, featuring responsive design and seamless state management.

## Features

- **Add Tasks**: Enter a task in the input field and press the "Add" button or press "Enter" to add the task to the list.
- **Edit Tasks**: Click on an existing task to load it into the input field for editing.
- **Delete Tasks**: Remove tasks from the list by clicking the delete button next to each task.
- **Persistent Storage**: Tasks are stored in the browser's local storage, so they persist even after refreshing the page.
- **Responsive Design**: The app uses Bootstrap for styling, ensuring a responsive and visually appealing interface.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Usage

- Enter a task in the input field.
- Press the "Add" button or hit "Enter" to add the task.
- Edit tasks by clicking on them.
- Delete tasks by clicking the delete button next to each task.

## Code Overview

### Components

- **App**: The main component managing the state and rendering the interface.
- **TodoList**: A component that displays the list of tasks, along with edit and delete buttons.

### State Management

- The state is managed using React's `useState` hook.
- Local storage is used to persist the tasks across page reloads.
- `useEffect` is used to load tasks from local storage when the app mounts.

### Form Handling

- The input field updates the state on change.
- The "Add" button and "Enter" key both trigger the task addition.
- The add button is disabled when the input field is empty.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements and bug fixes.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

