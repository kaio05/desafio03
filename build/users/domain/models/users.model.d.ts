export interface UserModel {
    id: string;
    fullName: string;
    email: string;
    password: string;
    created_at: Date;
    deleted_at?: Date | null;
}
