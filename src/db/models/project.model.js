import { Model } from "objection";
import knex from "../knex.js";
import User from "./user.model.js";
import Marker from "./marker.model.js";

Model.knex(knex);

class Project extends Model {
	static get tableName() {
		return "projects";
	}

    static get relationMappings() {
		return {
			user: {
				relation: Model.HasOneRelation,
				modelClass: User,
				join: {
					from: "projects.user_id",
					to: "users.id",
				},
			},
            marker: {
				relation: Model.HasOneRelation,
				modelClass: Marker,
				join: {
					from: "projects.marker_id",
					to: "markers.id",
				},
			},
		}
	}
}

export default Project;