class UserRegistry {
    constructor() {
        if (UserRegistry.instance) {
            return UserRegistry.instance;
        }

        this.users = [];
        UserRegistry.instance = this;
    }

    addUser(user) {
        this.users.push(user);
    }

    getUsers() {
        return this.users;
    }
}

module.exports = UserRegistry;
