export interface UserInterface {
    id: string;
    username: string;
    email: string;
    password: string;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    refreshToken: string;
    resetPasswordToken: string;
}