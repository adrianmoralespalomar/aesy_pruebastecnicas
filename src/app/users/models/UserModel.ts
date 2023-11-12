export interface GitUserModel {
    total_count:number,
    incomplete_results:boolean,
    items:UserModel[]
}
export interface UserModel {
    login:string,
    id:number,
    type:string,
    avatar_url:string,
    html_url:string
}
