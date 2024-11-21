import { ChangeEvent, FormEvent, SetStateAction } from "react";


export interface TodoItem {
    _id: number;
    text: string;
}

export interface TaskCardProps {
    item: TodoItem;
    completedItems: number[];
    toggleCompletion: (id: number) => void;
}


export interface CustomModalProps {
    showModal: boolean;
    handleSubmit: (e: FormEvent) => void;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    task: string;
}

export interface CustomRoundedButtonProps {
    showModal: boolean;
    setShowModal: (value: SetStateAction<boolean>) => void;
}

export interface HeaderProps {
    data: TodoItem[];
    completedItems: number[];
    setData: (value: SetStateAction<TodoItem[]>) => void;
    setCompletedItems: (value: SetStateAction<number[]>) => void;
    onClick: () => void;
}