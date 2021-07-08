import React, { ReactNode, useState } from "react";
import { Task, ContextProps} from "../interfaces/interfaces";


export const TaskContext = React.createContext<ContextProps | null>(null);

interface TaskProviderProps {
    children: ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
    const [taskList, setTaskList] = useState<Task[]>([]);

    const addTask = (newTask: Task) => {
        setTaskList([...taskList, newTask])
      }
  
    const deleteTask = (id: string) => {
        const list : Task[] = taskList.filter((task) => task.id !== id);
        setTaskList(list)
      }
  
      const editTask = (taskEdit: Task) => {
        const list : Task[] = taskList.map((task: Task) => {
          if (taskEdit.id === task.id) {
            return {
              ...task,
              task: taskEdit.task,
              checked: taskEdit.checked,
            };
          }
          return task;
        })
        setTaskList(list)
      }

    const valueProvider: ContextProps = {
        taskList,
        addTask,
        deleteTask,
        editTask
    };

    return (
        <TaskContext.Provider value={valueProvider}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskProvider;