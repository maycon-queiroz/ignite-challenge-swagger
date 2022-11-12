import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const userExists = this.usersRepository.findById(user_id);
    if (!userExists) {
      throw new Error("To list user need to be admin");
    }

    if (!userExists.admin) {
      throw new Error("To list user need to be admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
