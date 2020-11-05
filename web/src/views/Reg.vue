<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name:'login'}">登入</router-link>
          </li>
          <li class="layui-this">注册</li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_email" class="layui-form-label">用户名</label>
                    <div class="layui-input-inline">
                      <input type="text" id="L_email" name="username" autocomplete="off"
                             class="layui-input" v-model="username" placeholder="请输入用户名"
                             v-validate="'required|email'">
                    </div>
                    <div class="layui-form-mid layui-word-aux">将会成为您唯一的登入名</div>
                  </div>
                  <div class>
                    <span style="color: #c00;">{{ errors.first('username') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L_username" name="name" autocomplete="off"
                           class="layui-input" v-model="name" placeholder="请输入昵称"
                           v-validate="'required|length:8'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{ errors.first('name') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <div class="layui-input-inline">
                      <input type="password" id="L_pass" name="password" ref="password" autocomplete="off"
                             class="layui-input" v-model="password" placeholder="请输入密码"
                             v-validate="'required|min:6|max:16'">
                    </div>
                    <div class="layui-form-mid layui-word-aux">6到16个字符</div>
                  </div>
                  <div>
                    <span style="color: #c00;">{{ errors.first('password') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_repass" class="layui-form-label">确认密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_repass" name="repass" autocomplete="off"
                           class="layui-input" v-model="repass" placeholder="请确认密码"
                           v-validate="'required|confirmed:password'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{ errors.first('repass') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input type="text" id="L_vercode" name="code" v-model="code"
                             placeholder="请输入验证码" autocomplete="off"
                             class="layui-input" v-validate="'required|length:4'">
                    </div>
                    <div>
                      <span class="svg" @click="getCaptcha" style="color: #c00;" v-html="svg"></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00;">{{ errors.first('code') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a href="" onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-qq"
                     title="QQ登入"></a>
                  <a href="" onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})" class="iconfont icon-weibo"
                     title="微博登入"></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getCode } from '@/api/login'

export default {
  name: 'Reg',
  data () {
    return {
      username: '',
      name: '',
      password: '',
      repass: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    /**
     * 请求验证码
     * @returns {Promise<void>}
     */
    async getCaptcha () {
      const res = await getCode()
      if (res.code === 200) {
        this.svg = res.msg.replace('width="150" height="50"', 'width="130" height="38"')
      }
    }
  }
}
</script>

<style scoped>
.svg {
  position: relative;
  top: -5px;
}
</style>
