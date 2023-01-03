export class CreateUserDto {
    email: string;
    username: string;
    password: string;

    constructor(email: string, username: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}
