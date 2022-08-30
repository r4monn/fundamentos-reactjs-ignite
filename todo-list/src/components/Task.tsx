import { ChangeEvent, useState } from 'react'
import '../index.css'
import { Trash } from 'phosphor-react'
import { TaskIn } from '../interfaces/Interfaces';

interface TaskProps {
  task: TaskIn;
  id: string;
  onDeleteTask: (taskId: string) => void;
  onCompleteTask: (taskId: string) => void;
  /*tasks: TaskIn<[]>
  deleteTask: () => void;
  onCheckTask: (checkTaskById: string) => void;
  onCompletedTasksCount: () => void;*/
}

function Task({ task, id, onDeleteTask, onCompleteTask }: TaskProps) {

  const isComplete = false;

  function handleDeleteTask() {
    onDeleteTask(task.id)
    console.log(task)
  }
/*
  function handleCheckCompletedTask(event: ChangeEvent<HTMLInputElement>) {
    console.log('Check completed task')
    
    setIsChecked(isChecked => !isChecked);
    onCheckTask(task.id)
    onCompletedTasksCount()

    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
      
      const findTask = tasks.find((task) => task.id === event.target.value)
      findTask.isComplete = true;
      setIsCheckedCount(isCheckedCount + 1)
    } else {
      console.log('⛔️ Checkbox is NOT checked');

      const findTask = tasks.find((task) => task.id === event.target.value)
      findTask.isComplete = false;
      setIsCheckedCount(isCheckedCount - 1)
    }
  }
*/
  const labelClass = `${task.isComplete ? 'checked'  : ''}`

  return (
    <div className="task">
      <input 
        type="checkbox" 
        name="isCompleteRadio" 
        id={`checkbox${id}`}

      />
      <label htmlFor={`checkbox${id}`} className='checkbox' onClick={() => onCompleteTask(task.id) }/>
      <div className='titulo'>
        <label className={labelClass}>{task.title}</label>
      </div>
      <button 
        className='trash' 
        onClick={handleDeleteTask}>
          <Trash size={17} />
      </button>
    </div>
  );
}
export default Task;
