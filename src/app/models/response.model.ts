export interface ResponseModel<T> {
    success: boolean;
    message: String;
    data: T;
}