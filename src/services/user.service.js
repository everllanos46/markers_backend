import BaseService from "./base.service.js";

let _userRepository = null;

export default class UserService extends BaseService {
  constructor({
    UserRepository,
  }) {
    super(
      UserRepository
    );
    _userRepository = UserRepository;
  }

  async findUserById(userId) {
    const user = await _userRepository.getUserById(userId);
    return user;
  }

  async findUserByUserName(userName, password) {
    const user = await _userRepository.getUserByUserNameAndPass(userName, password);
    return user;
  }

  async get() {
    const user = await _userRepository.get();
    return user;
  }

  async add(userToAdd) {
    const userValidated = await this.validarUsuario(userToAdd);
    if (userValidated) {
      const user = await _userRepository.create(userValidated);
      return user;
    }
    return userValidated;

  }

  async validarUsuario(userToAdd) {
    if (!userToAdd || !userToAdd.usern || !userToAdd.pass || !userToAdd.email) {
      return null;
    }
    const userFind = await _userRepository.getUserByUserName(userToAdd.usern);
    const emailFind = await _userRepository.getUserByEmail(userToAdd.email);

    if (userFind || emailFind) {
      return null;
    }
    return userToAdd;
  }


}
