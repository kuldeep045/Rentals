class ApiError extends Error {
    constructor(
        status,
        message,
        error = [],
        success = false, 
        data = {}, 
    ) {
            super(message)
            this.status = status
            this.message = message
            this.error = error
        }
}
export default ApiError
