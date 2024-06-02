import { myDataSource } from '../db';
import { User } from "../User.model"
import { UserDto } from "../dto/create.user.dto"

export class UserService {
    constructor(private userRepository = myDataSource.getRepository(User)){}

    createUser = async(dto: UserDto) => {
        return await myDataSource
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([dto])
        .execute();
    }

    getUsers = async() => {
        return await myDataSource
        .getRepository(User)
        .createQueryBuilder()
        .getMany();
    }

    getUserById = async(id: number) => {
        return await myDataSource
        .getRepository(User)
        .createQueryBuilder()
        .where(`id = :id`, { id: id })
        .getOneOrFail();
    }

    deleteUserById = async(id: number) => {
        return await myDataSource
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id: id })
        .execute();
    }

    updateUser = async(dto: UserDto, id: number) => {
        return await myDataSource
        .createQueryBuilder()
        .update(User)
        .set({ name: dto.name , age: dto.age })
        .where("id = :id", { id: id })
        .execute();
    }
}
