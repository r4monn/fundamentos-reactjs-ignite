import { Clipboard } from "phosphor-react";

function ToDoList() {
  return (
    <section className="empty">
      <Clipboard size={56}/>
      <h4>Você ainda não tem tarefas cadastradas</h4>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </section>
  )
}
export default ToDoList;