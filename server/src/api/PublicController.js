import svgCaptcha from 'svg-captcha';

class PublicController {
    constructor() {
    }

    async demo(ctx) {
        ctx.body = {
            msg: 'body message'
        }
    }

    /**
     * 获取验证码
     * @param ctx
     * @returns {Promise<void>}
     */
    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({
            size:4,//显示几个验证码
            ignoreChars: '0o1il',//忽略容易混淆的字符
            color:true,//显示颜色
            noise:Math.floor(Math.random()*5),//干扰线的数量
            width:150,
            height:50
        });
        let data = newCaptcha.data;
        ctx.body = {
            code: 200,
            msg: data
        }
    }
}

export default new PublicController();
