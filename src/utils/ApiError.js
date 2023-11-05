class ApiError extends Error {

	constructor(httpStatus, msg, ...params ){
		super(...params);
		this.httpStatus = httpStatus;
		this.msg = msg;
	}
}

export default ApiError;