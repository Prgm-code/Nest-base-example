// BEGIN: abpxx6d04wxr
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity.js';
import { v4  } from 'uuid';
import { updateTaskDto } from './dto/task.dto.js';
import { NotFoundException } from '@nestjs/common';


// END: abpxx6d04wxrimport { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks : Task[] = [
        {
          id: '1',
          title: 'First task',
          description: 'This is the first task',
          status: TaskStatus.PENDING, 
        },
      ];

      
  getAllTasks() {
    return this.tasks ;
  }
  createTask( title: string, description: string) {
    const task: Task = {
        id: v4(),
        title,
        description,
        status: TaskStatus.PENDING, 
      };
      this.tasks.push(task);
      return task;
  }

  
  getTaskById(id : string) :Task  {

    return this.tasks.find(task => task.id === id);
  }
  
  updateTask (id : string, updateFields :updateTaskDto ) :Task  {
    const task = this.getTaskById(id);
    if (task) {
      const newTask = Object.assign(task, updateFields);
      this.tasks = this.tasks.map(task => task.id === id ? newTask : task);
      return newTask;
    } else {
      throw new NotFoundException('Task not found');
    }


  }
  

  deleteTask(id :string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
    
}
    