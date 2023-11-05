function Response(statusCode, message, data) {
    this.type = statusCode === 200 ? 'success' : 'error';
    this.message = message;
    this.status = statusCode;
    this.timestamp = new Date();
    this.data = data;
  }
  
export default Response;
  