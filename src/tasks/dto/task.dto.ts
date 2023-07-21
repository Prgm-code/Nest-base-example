import { TaskStatus } from "../task.entity";
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title: string

     @IsString()
    description: string                                             

}

export class updateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string
   
    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
    status?: TaskStatus
}