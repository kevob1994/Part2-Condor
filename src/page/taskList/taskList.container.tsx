import React, { useState } from "react";
import { TaskListView } from "./taskList.view";
import { ContextProps, Task } from "../../interfaces/interfaces";
import TaskProvider, { TaskContext } from "../../context";

export const TaskListContainer = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showModalDelete, setShowModalDelete] = useState<boolean>(false);
    const [taskSelected, setTaskSelected] = useState<Task | null>(null);
    const [listPendingTask, setListPendingTask] = useState<Task[]>([]);
    const [listFinisTask, setListFinisTask] = useState<Task[]>([]);

    const handleCloseModal = (): void => {
        setShowModal(false);
    };

    const handleOpenModal = (): void => {
        setShowModal(true);
    };

    const selectTask = (task: Task | null): void => {
        setTaskSelected(task);
    };

    const handleCloseDeleteModal = (): void => {
        setShowModalDelete(false);
    };

    const handleOpenDeleteModal = (): void => {
        setShowModalDelete(true);
    };

    const RenderTaskList = (props: ContextProps) => {
        return (
            <TaskListView
                showModal={showModal}
                onCancel={handleCloseModal}
                showDeleteModal={showModalDelete}
                onDeleteCancel={handleCloseDeleteModal}
                onOpen={handleOpenModal}
                onDeleteOpen={handleOpenDeleteModal}
                taskSelected={taskSelected}
                selectTask={selectTask}
                {...props}
                listPendingTask={listPendingTask}
                listFinisTask={listFinisTask}
            />
        );
    };

    return (
        <>
            <TaskProvider>
                <TaskContext.Consumer>
                    {(props: ContextProps | null) =>
                        props ? <RenderTaskList {...props} /> : null
                    }
                </TaskContext.Consumer>
            </TaskProvider>
        </>
    );
};
