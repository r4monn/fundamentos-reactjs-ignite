import { FormContainer, MinutesInput, TaskInput } from "./styles";
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Dê um nome a sua tarefa'),
  minutes: zod.number()
    .min(5, 'O intervalo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O intervalo precisa ser de no máximo 60 minutos.'),
})

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {

  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    }
  });

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutes">durante</label>
      <MinutesInput
        type="number"
        id="minutes"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutes', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}