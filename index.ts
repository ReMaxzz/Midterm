import { calculateTotalCompletedTasks } from './taskUtils';

const tasks: Task[] = [
  new Task('Task 1', 'Description 1', true),
  new Task('Task 2', 'Description 2'),
  new Task('Task 3', 'Description 3', true)
];

console.log('Total completed tasks:', calculateTotalCompletedTasks(tasks));