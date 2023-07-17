import Card from "../UI/Card";
import TodoItem from "./TodoItem";

// const todos = [
//     { id: 1, text: "asdkasbhfkjasfj", category: "c1", date: '2022-06-18T18:56:30.306Z', isDone: false },
//     { id: 2, text: "jhgjhgkhgjghjhg", category: "c2", date: '2021-06-18T18:56:30.306Z', isDone: false },
//     { id: 3, text: "oiuoioiuoiupuoi", category: "c3", date: '2024-06-18T18:56:30.306Z', isDone: false },
//     { id: 4, text: "xzczxczxczxcxcz", category: "c3", date: '2023-06-18T18:56:30.306Z', isDone: false },
//     { id: 5, text: "mbnmnbmnbmnbmmb", category: "c5", date: '2020-06-18T18:56:30.306Z', isDone: false },
// ];

const TodoList = () => {
    return (
        <>
            <h3 className="font-semibold text-3xl text-slate-300 text-center">My Todos</h3>
            <Card className="todo-list 2xl:w-2/4 rounded-xl p-4 mt-4 mx-auto max-h-[600px] 
                        overflow-auto border-slate-600 flex flex-col gap-4 items-center
                        xl:w-3/4 lg:w-4/5 max-lg:w-4/5 md:w-full max-md:w-11/12 max-md:grid max-md:grid-cols-2
                        max-md:place-content-center max-md:gap-x-24 max-sm:block
                        ">
                <TodoItem />
            </Card>
        </>
    );
}

export default TodoList;