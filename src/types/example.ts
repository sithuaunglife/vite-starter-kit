export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export type Status = "active" | "inactive" | "pending";

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
