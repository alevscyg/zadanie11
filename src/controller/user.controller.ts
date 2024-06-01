import { Controller, Get, Param, Post, Body, Put, Delete,} from 'routing-controllers';
import { UserService } from '../service/user.service';
import "reflect-metadata";
import { UserDto } from "../dto/create.user.dto"

@Controller()
  export class UserController {
    constructor(private userService = new UserService()) {}
    
    @Get('/users')
    getAll() {
      return this.userService.getUsers();
    }

    @Get('/users/:id')
    getOne(@Param('id') id: number) {
      return this.userService.getUserById(id);
    }

    @Post('/users')
    post(@Body() user: UserDto) {
      return this.userService.createUser(user);
    }

    @Put('/users/:id')
    put(@Param('id') id: number, @Body() user: UserDto) {
      return this.userService.updateUser(user, id);
    }

    @Delete('/users/:id')
    remove(@Param('id') id: number) {
      return this.userService.deleteUserById(id);
    }
}

