import type { BaseModel } from "./base.mode";
import type { Role } from "./role.modell";

export interface User extends BaseModel {
    name: string,
    role: Role
}