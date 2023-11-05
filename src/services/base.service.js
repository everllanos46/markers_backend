import ApiError from "../utils/ApiError.js";

export default class BaseService {
	constructor(repository) {
		this.repository = repository;
	}

	async get(id) {
		if (!id) {
			throw new ApiError(400, "el id es requerido");
		}

		const entity = await this.repository.get(id);

		if (!entity) {
			throw new ApiError(404, "entidad no encontrada");
		}

		return entity;
	}

	async getAll(pagSize, pagNum) {
		return this.repository.getAll(pagSize, pagNum);
	}

	async create(entity) {
		return this.repository.create(entity);
	}

	async update(id, entity) {
		if (!id) {
			throw new ApiError(400, "el id es requerido");
			
		}

		// verifica si existe la entidad
		await this.get(id);

		return this.repository.update(id, entity);
	}
	
	async delete(id) {
		if (!id) {
			throw new ApiError(400, "el id es requerido");
		}

		return this.repository.delete(id);
	}
}
