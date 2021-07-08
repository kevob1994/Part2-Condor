export interface Task {
    id: string;
    checked: boolean;
    task: string;
}

export interface ContextProps {
    taskList: Task[];
    addTask: (newTask: Task) => void;
    deleteTask: (id: string) => void;
    editTask: (taskEdit: Task) => void;
}
