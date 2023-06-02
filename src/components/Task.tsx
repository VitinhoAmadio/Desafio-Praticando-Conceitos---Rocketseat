import { Trash } from '@phosphor-icons/react';
import { AiFillCheckCircle } from 'react-icons/ai'
import styles from './Task.module.css';
import { ITask } from '../App';

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task({ task, onDelete, onComplete }: Props) {
  return(
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
         {task.isCompleted ? <AiFillCheckCircle   /> : <div />}
      </button>
        <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>
      <button className={styles.delete} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}