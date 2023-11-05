import BaseRepository from "./base.repository.js";

let _marker = null;

export default class MarkerRepository extends BaseRepository {
    constructor({ Marker }) {
        super(Marker);
        _marker = Marker;
    }

    async create(entity) {
		return await _marker.query().insert(entity);
	}

    async update(entity,id) {
		return await _marker.query().patch(entity).where("id", id);
	}
}