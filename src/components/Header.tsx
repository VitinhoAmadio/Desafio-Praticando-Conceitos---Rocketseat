import styles from './Header.module.css';
import logo from '../assests/logo.svg';
import { PlusCircle } from '@phosphor-icons/react'
import { useState, FormEvent, ChangeEvent  } from 'react';

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState('')

  function handleSubmit(event: FormEvent){
    event.preventDefault()

    onAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }


  return(
    <header className={styles.header}>
      <img src={logo} alt="" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input type="text" name="InputText" id="" placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
        <button>
          Criar 
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}