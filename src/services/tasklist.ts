/*
    This is the service for the to-do list. This will be responsible for adding tasks to
    the list and removing tasks from the list.
 */
import { Task } from '../models/task';

export class TaskListService {

    private tasks: Task[] = [];

    addItem(name: string) {
        this.tasks.push(new Task(name));
        console.log(this.tasks);
    }

    addItems(items: Task[]) {
        this.tasks.push(...items);
    }

    getItems() {
        return this.tasks.slice();
    }

    removeItem(index: number) {
        this.tasks.splice(index, 1);
    }
}