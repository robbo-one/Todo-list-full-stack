import { listTasks } from '../apis/apis'

export const SHOW_THE_TASKS = 'SHOW_THE_TASKS'

export const listAllTheTasks = (tasks) => {
  return {
    type: SHOW_THE_TASKS,
    tasks
  }
}

/*
{
  type: 'SHOW_THE_TASKS',
  tasks: [{
  id: 10,
  detail: "CHeck tHis is working",
  completed: false
  }]
  }
  */