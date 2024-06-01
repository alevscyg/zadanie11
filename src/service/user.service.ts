import { myDataSource } from '../db';
import { User } from "../User.model"
import { UserDto } from "../dto/create.user.dto"

export class UserService {
    constructor(private userRepository = myDataSource.getRepository(User)){}

    createUser = async(dto: UserDto) => {
        return await this.userRepository.save(dto)
        .catch(err => console.log(err));
    }

    getUsers = async() => {
        return await this.userRepository.find()
        .catch(err => console.log(err));
    }

    getUserById = async(id: number) => {
        return await this.userRepository.findOneBy({id})
        .catch(err => console.log(err));
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
