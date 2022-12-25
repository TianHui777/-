import service from "../../utils/request";

//查询课程
export function courseSearch(  ){
    return service({
        url:'/teachClass/all',
        method:'get',
    })
}