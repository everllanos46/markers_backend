import { Model } from "objection";
import knex from "../knex.js";

Model.knex(knex);

class Marker extends Model {
	static get tableName() {
		return "markers";
	}
}

export default Marker;