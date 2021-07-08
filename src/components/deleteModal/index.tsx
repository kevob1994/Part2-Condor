import { DeleteFilled } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import { Task } from "../../interfaces/interfaces";
import "./index.scss";

interface TaskModalProps {
    showModal: boolean;
    onCancel(): void;
    taskSelected: Task | null;
    deleteTask: (id: string) => void;
}

export const DeleteModal = ({
    showModal,
    onCancel,
    taskSelected,
    deleteTask
}: TaskModalProps) => {
    return (
        <>
            {taskSelected ? (
                <Modal
                    title="Remove task"
                    visible={showModal}
                    onOk={() => {
                        deleteTask(taskSelected.id)
                        onCancel();
                    }}
                    onCancel={onCancel}
                    destroyOnClose={true}
                    centered
                >
                    <div className="modal-content">
                        <DeleteFilled className="icon-modal" />
                        <p>
                            Estas seguro que deseas eliminar la tarea "
                            {taskSelected.task}"?
                        </p>
                    </div>
                </Modal>
            ) : null}
        </>
    );
};
