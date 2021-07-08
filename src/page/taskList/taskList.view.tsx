import React from "react";
import { Row, Col } from "antd";
import { ListTask } from "../../components/listTask";
import "./styles.scss";
import { ContextProps, Task } from "../../interfaces/interfaces";
import TaskModal from "../../components/taskModal";
import { DeleteModal } from "../../components/deleteModal";

interface TaskListViewProps extends ContextProps {
    taskList: Task[];
    listPendingTask: Task[];
    listFinisTask: Task[];
    showModal: boolean;
    onOk?(): void;
    onCancel(): void;
    onOpen(): void;
    onDeleteOpen(): void;
    showDeleteModal: boolean;
    onDeleteCancel(): void;
    taskSelected: Task | null;
    selectTask: (task: Task | null) => void;
}

enum TitleEnum {
    Pending = "Pendiente",
    Complete = "Completado",
  }

export const TaskListView = (props: TaskListViewProps) => {
    return (
        <div className="container">
            <Row className="content-list">
                <Col sm={24} md={12}>
                    <ListTask
                        title={TitleEnum.Pending}
                        taskList={props.taskList}
                        onOpen={props.onOpen}
                        selectTask={props.selectTask}
                        onDeleteOpen={props.onDeleteOpen}
                        editTask={props.editTask}
                    />
                </Col>
                <Col sm={24} md={12}>
                    <ListTask
                        title={TitleEnum.Complete}
                        taskList={props.taskList}
                        onOpen={props.onOpen}
                        selectTask={props.selectTask}
                        onDeleteOpen={props.onDeleteOpen}
                        editTask={props.editTask}
                    />
                </Col>
                <TaskModal
                    showModal={props.showModal}
                    onCancel={props.onCancel}
                    taskSelected={props.taskSelected}
                    editTask={props.editTask}
                    createTask={props.addTask}
                />
                <DeleteModal
                    showModal={props.showDeleteModal}
                    onCancel={props.onDeleteCancel}
                    taskSelected={props.taskSelected}
                    deleteTask={props.deleteTask}
                />
            </Row>
        </div>
    );
};
