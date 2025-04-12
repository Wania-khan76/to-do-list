import React from "react";
import Todo from "./pages/Todo";



function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">📝 To-Do List</h1>
      <Todo />
    </div>
  );
}

export default App;
