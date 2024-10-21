// Part 1: Classes and Object-Oriented Programming

class Task {
    private static totalTaskCount: number = 0;

    constructor(
      public title: string,
      public description: string,
      public completed: boolean = false
    ) {
      Task.totalTaskCount++;
    }

    markCompleted(): void {
      this.completed = true;
    }

    updateDescription(newDescription: string): void {
      this.description = newDescription;
    }

    static totalTasks(): number {
      return Task.totalTaskCount;
    }
}

  
// Part 2: Inheritance and Polymorphism
  
class PriorityTask extends Task {
    constructor(
      title: string,
      description: string,
      public priority: 'low' | 'medium' | 'high'
    ) {
      super(title, description);
    }

    override markCompleted(): void {
      super.markCompleted();
      console.log(`Priority task ${this.title} completed.`);
    }
}


  
// Part 3: Type Annotations and Interfaces
  
interface TeamMember {
    name: string;
    role: string;
    tasks: Task[];
}

function assignTask(member: TeamMember, task: Task): void {
    member.tasks.push(task);
}

  
// Part 4: Generics
  
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
      this.items.push(item);
    }

    dequeue(): T | undefined {
      return this.items.shift();
    }
}

  
// Part 5: Functions and Higher-Order Functions
  
function createTaskUpdater(updateFn: (task: Task) => void) {
    return function(task: Task): void {
      updateFn(task);
    };
}

function markAsUrgent(task: Task): void {
    if (task instanceof PriorityTask) {
      task.priority = 'high';
    }
}

const urgentUpdater = createTaskUpdater(markAsUrgent);

  
// Part 6: Asynchronous Programming
  
async function fetchTasks(): Promise<Task[]> {
    try {
      const response = await new Promise<Task[]>((resolve) => {
        setTimeout(() => {
          resolve([
            new Task('Task 1', 'Description 1'),
            new Task('Task 2', 'Description 2'),
            new Task('Task 3', 'Description 3'),
          ]);
        }, 1000);
      });
      return response;
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return [];
    }
}

  
// Part 7: Array Methods
  
function processTasks(tasks: Task[]): void {
    const taskTitles = tasks.map(task => task.title);
    console.log('Task titles:', taskTitles);

    const incompleteTasks = tasks.filter(task => !task.completed);
    console.log('Incomplete tasks:', incompleteTasks);

    const completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
    console.log('Completed task count:', completedTaskCount);
}

  
// Part 8: Error Handling
  
function parseTaskData(jsonData: string): Task[] | string {
    try {
      const parsedData = JSON.parse(jsonData);
      if (!Array.isArray(parsedData)) {
        throw new Error('Invalid data format');
      }
      return parsedData.map(item => new Task(item.title, item.description, item.completed));
    } catch (error) {
      return `Error parsing task data: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
}