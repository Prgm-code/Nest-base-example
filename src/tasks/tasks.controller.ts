import { Body, Controller, Get, Post, Delete, Param, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto, updateTaskDto } from './dto/task.dto.js';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    console.log(newTask);
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(`:id`)
  deleteTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(`:id`)
  updateTask(@Param('id') id: string, @Body() updateFields: updateTaskDto) {

    return this.tasksService.updateTask(id, updateFields);
  }
}
