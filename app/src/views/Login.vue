<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li>
            <router-link :to="{name:'reg'}">注册</router-link>
          </li>
        </ul>
        <div class="layui-form layui-tab-content" id="LAY_ucm" style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L-username" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input type="text" id="L-username" name="username" placeholder="请输入用户名" autocomplete="off"
                           class="layui-input" v-model="username" v-validate="'required|email'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.first('username') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input type="password" id="L_pass" name="password" placeholder="请输入密码" autocomplete="off"
                           class="layui-input" v-model="password" v-validate="'required|min:6'">
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.first('password') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label for="L_vercode" class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input type="text" id="L_vercode" name="code" v-model="code"
                             v-validate="'required|length:4'"
                             placeholder="请输入验证码" autocomplete="off" class="layui-input">
                    </div>
                    <div class="layui-form-mid">
                      <span class="svg" style="color: #c00;" v-html="svg" @click="_getCode"></span>
                    </div>
                  </div>
                  <div>
                    <span style="color: #c00">{{ errors.first('code') }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即登录</button>
                  <span style="padding-left:20px;">
                  <router-link :to="{name:'forget'}">忘记密码？</router-link>
                </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
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
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this._getCode()
  },
  methods: {
    async _getCode () {
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
  top: -10px;
}
</style>
