import BaseRepository from "./base.repository.js";

let _project = null;

export default class ProjectRepository extends BaseRepository {
    constructor({ Project }) {
        super(Project);
        _project = Project;
    }

    async get() {
        return await _project.query()
            .withGraphFetched('user')
            .withGraphFetched('marker').select();
    }

    async create(entity) {
        return await _project.query().insert(entity);
    }

    async update(entity, id) {
        return await _project.query().patch(entity).where("id", id);
    }
    async filterByYear(year) {
        return await _project.query()
          .withGraphFetched('user')
          .withGraphFetched('marker')
          .whereRaw(`YEAR([date]) >= ?`, [year])
          .select();
      }
}