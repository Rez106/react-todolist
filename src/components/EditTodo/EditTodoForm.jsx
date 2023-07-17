import { CloseSquare, Edit } from "iconsax-react";
import { useContext, useEffect, useRef } from "react";
import TodoContext from "../../store/todoContext";

const EditTodoForm = (props) => {
    const todoContext = useContext(TodoContext);

    const filteredCategory = todoContext.categories.filter(c => c.name !== "All");

    const enteredTodo = useRef();
    const enteredCategory = useRef();

    const onEditSubmitHandler = (e) => {
        e.preventDefault();

        const todoText = enteredTodo.current.value;
        const todoCategory = enteredCategory.current.value;

        todoContext.editTodo({ id: props.item.id, text: todoText, category: todoCategory });
        props.close(false);
    }

    const onCloseEditHandler = () => {
        props.close(false);
    }

    return (
        <form
            className="w-full h-full truncate flex items-center gap-11
                        max-md:flex-col max-md:gap-2
            "
            onSubmit={onEditSubmitHandler}>
            <div className="w-1/3 max-md:w-11/12">
                <input
                    ref={enteredTodo}
                    name="editinput"
                    className="bg-transparent border-b-2 w-full text-white outline-none
                             py-2 text-lg font-semibold"
                    type="text"
                    defaultValue={props.item.text}
                />
            </div>
            <select
                ref={enteredCategory}
                defaultValue={props.item.category}
                className='w-1/3 max-md:w-11/12 bg-transparent border-2 my-4 outline-none py-3 px-2 text-white font-semibold
                    rounded-xl'
                id="categorySelect"
            >
                <option className='bg-slate-600 text-white' value="default">Select a Category</option>
                {
                    filteredCategory.map((category) => (
                        <option
                            className='font-semibold bg-slate-600 text-white'
                            key={category.id}
                            value={category.name}
                        >
                            {category.name}
                        </option>
                    ))
                }
            </select>
            <div className="w-1/3 max-md:w-11/12 max-md:justify-center flex justify-end gap-5">
                <button
                    type="button"
                    className="flex font-semibold text-white border-2 border-red-700 py-3 px-3 rounded-xl bg-red-700
                                duration-300 ease-in-out hover:border-white hover:scale-95 "
                    onClick={onCloseEditHandler}
                >
                    <CloseSquare className="mr-2 max-md:hidden" />
                    Cancel
                </button>
                <button
                    className="flex font-semibold text-white border-2 border-cyan-800 py-3 px-5 rounded-xl bg-cyan-800
                duration-300 ease-in-out hover:border-white hover:scale-95"
                    type="submit"
                >
                    <Edit className="mr-2 max-md:hidden" />
                    Edit
                </button>
            </div>
        </form >
    );
}

export default EditTodoForm;