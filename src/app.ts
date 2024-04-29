import { RowDataPacket } from "mysql2";
import { modify, select } from "./utils/db";

interface Todo extends RowDataPacket {
    id: number;
    name: string;
    content: string;
    created_at: string;
    updated_at: string;
}

select<Todo>("SELECT * FROM todos;")
    .then((todos) => console.log(todos))
    .catch((e) => console.error(e));

modify("UPDATE todos SET name = 'Name' WHERE id = :id;", { id: 1 })
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
