import axiosIntance from "@/lib/axios.config";
import { GenericResponse } from "@/models/responses/GenericResponse.model";
import { KeyValue } from "@/models/responses/KeyValue.model";
import { CreateUserDto, UserDto, usersById } from "@/models/users/userDTO";

export enum EnumEndpoints {
  Users = "User",
}

export const getAllUsers = async (): Promise<UserDto[]> => {
  try {
    const response = await axiosIntance.get<GenericResponse<UserDto[]>>(
      `${EnumEndpoints.Users}`
    );
    return response.data.data;
  } catch (err) {
    throw "error in getAllUsers";
  }
};

export const getUsersById = async (id: number): Promise<usersById> => {
  try {
    const { data } = await axiosIntance.get<GenericResponse<usersById>>(
      `${EnumEndpoints.Users}/${id}`
    );

    return data.data;
  } catch (err) {
    throw "error in GetUsersById";
  }
};

export const createUser = async (
  payload: CreateUserDto
): Promise<GenericResponse<any>> => {
  try {
    const { data } = await axiosIntance.post<GenericResponse<any>>(
      `${EnumEndpoints.Users}`,
      payload
    );

    return data;
  } catch (err) {
    throw "error in createUser";
  }
};

export const updateUser = async (
  payload: CreateUserDto,
  id: string
): Promise<KeyValue> => {
  try {
    const response = await axiosIntance.post<KeyValue>(
      `${EnumEndpoints.Users}?id=${id}`,
      payload
    );

    return response.data;
  } catch (err) {
    throw "error in createUser";
  }
};
