import React, { useEffect, useState } from "react";
import { Task } from "../../interfaces/interfaces";
import { Button, List, Input, Popover } from "antd";
import { ItemTask } from "../itemTask";
import { FilterFilled } from "@ant-design/icons";
import "./index.scss";

const { Search } = Input;

interface ListTaskProps {
    title: TitleEnum;
    taskList: Task[];
    onOpen(): void;
    onDeleteOpen(): void;
    selectTask: (task: Task | null) => void;
    editTask: (taskEdit: Task) => void;
}
enum TitleEnum {
    Pending = "Pendiente",
    Complete = "Completado",
}

export const ListTask = (props: ListTaskProps) => {
    const [list, setList] = useState<Task[]>(
        props.taskList.filter((task) =>
            props.title === TitleEnum.Pending ? !task.checked : task.checked
        )
    );
    const [search, setSearch] = useState<string>("");
    const [sortAlpha, setSortAlpha] = useState<boolean>(false);
    const [showPopover, setShowPopover] = useState<boolean>(false);

    const onSearch = (value: string) => console.log(value);

    useEffect(() => {
        let listTask = props.taskList.filter((task) =>
            props.title === TitleEnum.Pending ? !task.checked : task.checked
        );

        listTask = listTask.filter((task: Task) => task.task.includes(search));
        if (sortAlpha) {
            listTask = listTask.sort((a: Task, b: Task) => {
                if (a.task > b.task) {
                    return 0;
                }
                return -1;
            });
        }
        setList(listTask);
    }, [props.taskList, search, sortAlpha]);

    return (
        <div className="task-list">
            <div className="header">
                <h1>{props.title}</h1>
                <Search
                    size="large"
                    placeholder="Nombre de la tarea"
                    allowClear
                    onSearch={onSearch}
                    onChange={(event) => setSearch(event.target.value)}
                />
                <Popover
                    placement="bottom"
                    content={
                        <p
                            className="opt-popover"
                            onClick={() => {
                                setSortAlpha(!sortAlpha);
                                setShowPopover(false);
                            }}
                        >
                            Alfabético
                        </p>
                    }
                    title="Orden"
                    trigger="click"
                    visible={showPopover}
                    onVisibleChange={() => setShowPopover(true)}
                >
                    <FilterFilled className="icon-filter" />
                </Popover>
            </div>
            <List
                dataSource={list}
                renderItem={(task: Task) => (
                    <List.Item>
                        <ItemTask
                            task={task}
                            onOpen={props.onOpen}
                            selectTask={props.selectTask}
                            onDeleteOpen={props.onDeleteOpen}
                            editTask={props.editTask}
                        />
                    </List.Item>
                )}
            />
            <Button
                className="btn-add"
                type="primary"
                block
                onClick={() => {
                    props.selectTask(null);
                    props.onOpen();
                }}
            >
                +
            </Button>
        </div>
    );
};
