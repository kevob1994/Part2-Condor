import React, { useEffect, useState } from "react";
import { Checkbox, Input } from "antd";
import "./index.scss";
import {
    EditFilled,
    DeleteFilled,
    CloseCircleOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import { Task } from "../../interfaces/interfaces";

interface ItemTaskProps {
    task: Task;
    onOpen(): void;
    onDeleteOpen(): void;
    selectTask: (task: Task | null) => void;
    editTask: (taskEdit: Task) => void;
}

export const ItemTask = (props: ItemTaskProps) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [task, setTask] = useState(props.task.task);

    useEffect(() => {
        setTask(props.task.task)
    }, [props.task.task])
    return (
        <>
            <Checkbox
                checked={props.task.checked}
                onChange={() => {
                    const taskEdit = { ...props.task, checked: !props.task.checked, };
                    props.editTask(taskEdit);
                }}
            >
                {!edit ? props.task.task : null}
            </Checkbox>
            {edit ? (
                <Input
                    key="task"
                    defaultValue={props.task.task}
                    onChange={(event) => {setTask(event.target.value)}}
                />
            ) : null}
            <div className="content-icons">
                {!edit ? (
                    <EditFilled
                        onClick={() => {
                            setTask(props.task.task)
                            setEdit(true);
                        }}
                    />
                ) : (
                    <>
                        <CloseCircleOutlined
                            className="icon-cancel"
                            onClick={() => {
                                setEdit(false);
                            }}
                        />
                        <CheckCircleOutlined
                            className="icon-edit"
                            onClick={() => {
                                const taskEdit = { ...props.task, task };
                                props.editTask(taskEdit);
                                setEdit(false);
                            }}
                        />
                    </>
                )}
                <DeleteFilled
                    onClick={() => {
                        props.selectTask(props.task);
                        props.onDeleteOpen();
                    }}
                />
            </div>
        </>
    );
};
