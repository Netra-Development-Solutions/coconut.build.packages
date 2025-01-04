class ResponseHandler {
    static success(data = {}, message = "Request successful", statusCode = 200, meta = {}) {
        return {
            status: "success",
            statusCode,
            message,
            data,
            meta, // Include metadata for context (e.g., pagination)
        };
    }

    static error(
        message = "An error occurred",
        statusCode = 500,
        errors = [],
        errorCode = "INTERNAL_ERROR"
    ) {
        return {
            status: "error",
            statusCode,
            message,
            errorCode, // Custom error code for easier debugging
            errors: Array.isArray(errors) ? errors : [errors], // Support multiple errors
        };
    }

    static validationError(
        errors = [],
        message = "Validation failed",
        statusCode = 400,
        errorCode = "VALIDATION_ERROR"
    ) {
        return {
            status: "fail",
            statusCode,
            message,
            errorCode,
            errors: Array.isArray(errors) ? errors : [errors], // Standardized error array
        };
    }

    static notFound(message = "Resource not found", statusCode = 404, meta = {}) {
        return {
            status: "error",
            statusCode,
            message,
            meta, // Add metadata for missing resources (e.g., searched ID)
        };
    }

    // Centralized logger for errors (Optional)
    static logError(errorResponse) {
        console.error("Error logged:", errorResponse);
    }
}

module.exports = ResponseHandler;