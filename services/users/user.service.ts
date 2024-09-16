import axiosIntance from "@/lib/axios.config";
import { KeyValue } from "@/models/responses/KeyValue.model";
import { CreateUserDto, UserDto, usersById } from "@/models/users/userDTO";

export enum EnumEndpoints {
  GetAllUsers = "Users/GetAllUsers",
  GetUsersById = "Users/GetUsersById",
  CreateUser = "Users/CreateUser",
  UpdateUser = "Users/UpdateUser",
}

export const getAllUsers = async (): Promise<UserDto[]> => {
  try {
    const response = await axiosIntance.get<UserDto[]>(
      `${EnumEndpoints.GetAllUsers}`,
    );

    return response.data;
  } catch (err) {
    throw "error in getAllUsers";
  }
};

export const getUsersById = async (id: string): Promise<usersById> => {
  try {
    const response = await axiosIntance.get<usersById>(
      `${EnumEndpoints.GetUsersById}?id=${id}`,
    );

    return response.data;
  } catch (err) {
    throw "error in GetUsersById";
  }
};

export const createUser = async (payload: CreateUserDto): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.UpdateUser}`,
      payload,
    );

    return response.data;
  } catch (err) {
    throw "error in createUser";
  }
};

export const updateUser = async (
  payload: CreateUserDto,
  id: string,
): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.CreateUser}?id=${id}`,
      payload,
    );

    return response.data;
  } catch (err) {
    throw "error in createUser";
  }
};
