export default class BaseRepository {
	constructor(model) {
		this.model = model;
		this.trx = undefined;
	}

	async get(id) {
		return await this.model 
			.query()
			.findById(id);
	}
	async getAll(pagSize = 5, pagNum = 1) {
		return await this.model.query().page(pagNum, pagSize);
	}
	async create(entity) {
		return await this.model.query().insert(entity);
	}
	async update(id, entity) {
		return await this.model.query().patchAndFetchById(id, entity);
	}
	async delete(id) {
		return await this.model.query().patchAndFetchById(id, { estado: 1 });
	}

	async createWithTransaction(entity) {
		return await this.model.query(this.trx).insert(entity);
	}

	transaction(trx) {
		this.trx = trx;
		return this;
	}
}