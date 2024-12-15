export type GenericResponse<T> = {
    success: boolean;
    message: string;
    statusCode: number;
    data: T;
}