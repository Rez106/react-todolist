import classes from './NewTodo.module.css';
import Card from '../UI/Card';
import NewToDoForm from './NewTodoForm';
import { useContext } from 'react';
import TodoContext from '../../store/todoContext';
import ReactDOM from 'react-dom';


const NewToDo = (props) => {
    const todoContext = useContext(TodoContext);

    const onAddNewClickHandler = () => {
        todoContext.setIsAddNewShown(!todoContext.isAddShown);
    }

    return (
        <>
            <div className='w-1/2 mx-auto text-center pt-10'>
                <button
                    className='py-3 px-6 bg-teal-600 text-white rounded-xl
                                duration-300 ease-in-out hover:bg-teal-700
                                font-semibold hover:scale-90'
                    type='button'
                    onClick={onAddNewClickHandler}
                >
                    Add New Todo
                </button>
            </div>
            {todoContext.isAddShown
                ?
                <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-40 z-10" onClick={onAddNewClickHandler}></div>
                :
                ''
            }
            <Card className={`2xl:w-1/4 xl:w-2/5 max-xl:w-2/5 lg:w-3/5 max-lg:w-3/5 max-md:w-4/5 p-5 flex z-20 flex-col items-center transition-all ease-in-out duration-500 bg-transparent
                          ${todoContext.isAddShown ? 'top-1/3' : '-top-full'}
                          justify-center fixed left-1/2 
                          -translate-y-1/2 -translate-x-1/2`}>
                <NewToDoForm />
            </Card>
        </>
    );
}

export default NewToDo;