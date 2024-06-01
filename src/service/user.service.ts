import { myDataSource } from '../db';
import { User } from "../User.model"
import { UserDto } from "../dto/create.user.dto"

export class UserService {
    constructor(private userRepository = myDataSource.getRepository(User)){}

    createUser = async(dto: UserDto) => {
        const newUser = this.userRepository.create({name: dto.name, age: dto.age});
        await this.userRepository.save(newUser);
        return newUser;
    }

    getUsers = async() => {
        return await this.userRepository.find()
        .catch(err => console.log(err));
    }

    getUserById = async(id: number) => {
        return await this.userRepository.findOneBy({id});
    }

    deleteUserById = async(id: number) => {
        const result = await this.userRepository.delete(id);
        return result.affected ? `Пользователь с id = ${id} был удален`: "Пользователь не найден";
    }

    updateUser = async(dto: UserDto, id: number) => {
        const user = await this.userRepository.findOneBy({id})
        if(!user) {
            return `Пользователь с id = ${id} не найден`;
        }
        this.userRepository.merge(user, dto);
        await this.userRepository.save(user);
        return user;
    }
}
