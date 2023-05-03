import UserList from "./data/UserList";

const Login = (data) => {
    let ret = false;
    UserList.map((value) => {
        if (value.email == data.email && value.password == data.password) {
            ret = true;
        }
    });
    console.log(ret);
}

const test = {Login};

export default test;