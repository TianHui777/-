import service from '../index'

// 登录接口所需要的数据
interface loginData {
    username: string
    password: string
    tokenTpye:string
    clientId:string
    realm:string
    captchaId:string
    captchaCode:string
}
export class LoginData{
    ruleForm:LoginData={
        userName: "",
        password: ""
    }
}

//登录接口
export function login(data: loginData) {
    return service({
        url: "/pub/auth/auth-token",
        method: "POST",
        data
    })
}