import service from '../index'

// 登录接口所需要的数据
interface loginData {
    userName: string
    password: string
}

//登录接口
export function login(data: loginData) {
    return service({
        url: "/login",
        method: "POST",
        data
    })
}
