import React from "react";
import Modal from "antd/lib/modal/Modal";
import { Store } from "antd/lib/form/interface";
import "./index.scss";
import { Form, Input, Button, Checkbox } from "antd";
import uuid from "uuid";
import { Task } from "../../interfaces/interfaces";

interface TaskModalProps {
    showModal: boolean;
    onCancel?(): void;
    taskSelected: Task | null;
    editTask: (taskEdit: Task) => void;
    createTask: (newTask: Task) => void;
}

interface IStore extends Task, Store {}

const TaskModal = ({
    showModal,
    onCancel,
    taskSelected,
    editTask,
    createTask,
}: TaskModalProps) => {
    const onFinish = (values: IStore) => {

        let newTask: Task = {
            id: taskSelected ? taskSelected.id : uuid.v4(),
            checked: values.checked,
            task: values.task,
        };

        if (taskSelected) {
            editTask(newTask);
        } else {
            createTask(newTask);
        }

        /*// @ts-ignore */
        onCancel();
    };
    const closeModal = () => {
        /*// @ts-ignore */
        onCancel();
    };

    return (
        <>
            <Modal
                title={taskSelected ? "Editar tarea" : "Nueva tarea"}
                visible={showModal}
                onCancel={onCancel}
                destroyOnClose={true}
                footer={[
                    <Button key="back" onClick={() => closeModal()}>
                        Cancelar
                    </Button>,
                    <Button
                        form="myForm"
                        key="submit"
                        htmlType="submit"
                        type="primary"
                    >
                        {taskSelected ? "Editar" : "Crear"}
                    </Button>,
                ]}
                centered
            >
                <div>
                    <Form
                        labelCol={{ span: 4 }}
                        wrapperCol={{ span: 20 }}
                        layout="horizontal"
                        id="myForm"
                        onFinish={onFinish}
                        fields={[
                            {
                                name: ["task"],
                            },
                        ]}
                    >
                        <Form.Item
                            label="Tarea"
                            name="task"
                            rules={[
                                {
                                    required: true,
                                    message: "Por favor ingrese la tarea!",
                                },
                            ]}
                            initialValue={taskSelected ? taskSelected.task : ""}
                        >
                            <Input
                                key="task"
                                value={taskSelected ? taskSelected.task : ""}
                            />
                        </Form.Item>
                        <Form.Item
                            name="checked"
                            valuePropName="checked"
                            initialValue={
                                taskSelected ? taskSelected.checked : false
                            }
                        >
                            <Checkbox checked={taskSelected?.checked}>
                                Completada
                            </Checkbox>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </>
    );
};

export default TaskModal;
