// Componentes
import Header from "./components/Header"
import List from "./components/List";
import AddTask from './components/AddTask';
// Proveedor de elementos de la lista To-DO
import TaskState from "./context/Task/TaskState"

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <TaskState>
          <AddTask />
          <main>
            <List title="Pending activities" />
          </main>
        </TaskState>
      </div>

    </>
  );
}

export default App;
