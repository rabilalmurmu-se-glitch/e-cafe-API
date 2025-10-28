"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponsePayload = void 0;
const ResponsePayload = (props) => {
    const resp = {
        success: props.success,
        error: props.error,
        data: props.data,
        message: props.message,
        details: props.details,
    };
    return resp;
};
exports.ResponsePayload = ResponsePayload;
//# sourceMappingURL=response.js.map