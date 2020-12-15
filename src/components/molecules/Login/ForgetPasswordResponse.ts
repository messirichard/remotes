export default class ForgetPasswordResponse {
    public title: string
    public status: boolean
    public visibility: boolean
    public message: string

    constructor(title: string, message: string, status: boolean, visibility: boolean) {
        this.title = title
        this.status = status
        this.visibility = visibility
        this.message = message
    }
}