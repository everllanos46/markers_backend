import BaseRepository from "./base.repository.js";

let _user = null;

export default class UserRepository extends BaseRepository {
	constructor({ User }) {
		super(User);
		_user = User;
	}

	async getUserById(userId) {
		return _user
			.query()
			.select()
			.findOne('id', userId).first();
	}

	async getUserByUserNameAndPass(userName, password) {
		return _user
			.query()
			.select()
			.where('usern', userName)
			.where('pass', password).first();
	}
	async getUserByUserName(userName) {
		return _user
			.query()
			.select()
			.where('usern', userName).first();
	}

	async getUserByEmail(email) {
		return _user
			.query()
			.select()
			.where('email', email).first();
	}

	async updateById(id, entity) {
		return await _user.query().patch(entity).where("id", id);
	}

	async get() {
		return await _user.query().select();
	}

	async create(entity) {
		return await _user.query().insert(entity);
	}
}