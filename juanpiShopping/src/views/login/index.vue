<template>
  <div class="container">
    <van-nav-bar
      title="登录"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs @click="onClick">
      <van-tab title="卷皮账户登录">
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            placeholder="手机号/邮箱/用户名"
            @click-right-icon="$toast('question')"
            :error-message="usernameState"
            :right-icon="usernameIcon"
          />
          <van-field
            v-model="password"
            type="password"
            clearable
            placeholder="密码"
            @click-right-icon="$toast('question')"
            :error-message="passwordState"
            :right-icon="passwordIcon"
          />
        </van-cell-group>
        <van-button type="info" size="normal" :block="true" @click="login1" :disabled="flag" :loading="flag" loading-text="登录中，请稍等...">登录</van-button>
      </van-tab>
      <van-tab title="手机快捷登录">
        <van-cell-group>
          <van-field
            v-model="username"
            clearable
            placeholder="请输入手机号码"
            @click-right-icon="$toast('question')"
            :error-message="usernameState"
            :right-icon="usernameIcon"
          />
          <van-field
            v-model="sms"
            clearable
            placeholder="请输入验证码"
            @click-right-icon="$toast('question')"
          >
            <van-button slot="button" size="small" type="info" @click="sendCode" v-show="show">获取验证码</van-button>
            <van-button slot="button" size="small" type="info"  v-show="!show" class="count" >{{ count }}s后重新发送</van-button>
          </van-field>
        </van-cell-group>
         <van-button type="info" size="normal" :block="true" @click="login2" :disabled="flag" :loading="flag" loading-text="登录中，请稍等...">登录</van-button>
      </van-tab>
    </van-tabs>
    <div class="otherLogin">
      <p>第三方账号快速登录</p>
      <div class="way">
        <i class="iconfont icon-QQ" @click="way1"></i>
        <i class="iconfont icon-taobao" @click="way2"></i>
        <i class="iconfont icon-weibo7" @click="way3"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Tab, Tabs, Toast, Field, Cell, CellGroup, Button, Icon, Notify, Dialog } from 'vant'
import { setInterval, clearInterval } from 'timers'
import * as types from '@/mutation-types'

Vue.use(NavBar)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Notify)
export default {
  data () {
    return {
      username: '',
      password: '',
      flag: false,
      sms: '',
      code: '',
      show: true,
      count: '',
      timer: null
    }
  },
  computed: {
    usernameState () {
      if (this.username === '') {
        return ''
      } else if (!(/^1[3456789]\d{9}$/.test(this.username))) {
        Notify('手机号只能为11位数字以1开头，第二位为3到9')
        return '手机号格式错误'
      } else {
        return ''
      }
    },
    usernameIcon () {
      if (this.username === '') {
        return ''
      } else if ((/^1[3456789]\d{9}$/.test(this.username))) {
        return 'passed'
      } else {
        return ''
      }
    },
    passwordState () {
      if (this.password === '') {
        return ''
      } else if (!(/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(this.password))) {
        Notify('密码只能为5-20个以字母开头、可带数字和.的字串')
        return '密码格式错误'
      } else {
        return ''
      }
    },
    passwordIcon () {
      if (this.password === '') {
        return ''
      } else if ((/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/.test(this.password))) {
        return 'passed'
      } else {
        return ''
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onClickRight () {
      this.$router.replace('/register')
    },
    onClick (name, title) {
      this.$toast(title)
    },
    way1 () {
      window.location.href = 'https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=204004&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&client_id=204004&redirect_uri=https%3A%2F%2Fuser.juanpi.com%2F%3Fm%3Doauth%26a%3Dcallback%26type%3Dqq&response_type=code&scope=get_user_info%2Cadd_share%2Cadd_pic_t%2Cadd_t&state=d522fb75e06197d11f958e15e45e35a3&view=wap'
    },
    way2 () {
      window.location.href = 'https://oauth.m.taobao.com/authorize?client_id=12248833&redirect_uri=https%3A%2F%2Fuser.juanpi.com%2F%3Fm%3Doauth%26a%3Dcallback%26type%3Dtaobao&response_type=code&state=b1c0f91bba13fc71f58305f8f5874d8a&view=wap'
    },
    way3 () {
      window.location.href = 'https://api.weibo.com/oauth2/authorize?client_id=1797114747&redirect_uri=https%3A%2F%2Fuser.juanpi.com%2F%3Fm%3Doauth%26a%3Dcallback%26type%3Dsina&response_type=code&state=71606f13d922697d088f44d06358e87c&view=wap'
    },
    login1 () {
      if (this.usernameIcon !== 'passed') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'passed') {
        Toast('密码格式错误')
        return null
      }
      this.flag = true
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        this.flag = false
        if (data === 1) {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok')
          localStorage.setItem('username', this.username)
          localStorage.setItem('password', this.password)
          this.$store.commit({
            type: types.CHANGE_LOGIN_STATE,
            result: 'ok'
          })
          this.$router.back()
        } else if (data === 2) {
          // Toast('该用户名已注册')
          Dialog.confirm({
            title: '提示',
            message: '该用户名未注册，是否直接去注册'
          }).then(() => {
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === -1) {
          Toast('密码错误')
        } else {
          Toast('登录失败')
        }
      })
    },
    sendCode () {
      // 验证码发送倒计时
      const TimeCount = 60
      if (!this.timer) {
        this.count = TimeCount
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TimeCount) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
      // 验证码非空校验
      // if (this.code === '') {
      //   return ''
      // }
      // 请求校验数据
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.username).then(res => res.json()).then(data => {
        console.log(data)
        if (data === 1) {
          // console.log('手机号已经注册')
          // Toast('手机号已经注册')
          this.code = 32578
        } else if (data === 0) {
          // console.log('手机号验证码获取失败')
          Toast('手机号验证码获取失败')
        } else {
          this.code = data.code
        }
      })
    },
    login2 () {
      if (this.usernameIcon !== 'passed') {
        Toast('手机号格式错误')
        return null
      }
      if (this.sms !== this.code) {
        Toast('验证码输入错误')
        return null
      }
      this.flag = true
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        this.flag = false
        if (data === 1) {
          Toast('登录成功')
          localStorage.setItem('isLogin', 'ok')
          localStorage.setItem('username', this.username)
          localStorage.setItem('sms', this.sms)
          this.$store.commit({
            type: types.CHANGE_LOGIN_STATE,
            result: 'ok'
          })
          console.log(this.$store.state.loginState)
          this.$router.back()
        } else if (data === 2) {
          Dialog.confirm({
            title: '提示',
            message: '该用户名未注册，是否直接去注册'
          }).then(() => {
            this.$router.push('/register')
          }).catch(() => {
            // on cancel
          })
        } else if (data === -1) {
          Toast('验证码输入错误')
        } else {
          Toast('登录失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.otherLogin {
  width: 100%;
  height: 1.5rem;
  // background-color: red;
  margin-top: 0.85rem;
  p {
    text-align: center;
    color: #ccc;
    font-size: 13px;
  }
  .way {
    width: 100%;
    height: 0.8rem;
    margin-top: 0.3rem;
    i {
      width: 25%;
      height: 0.5rem;
      margin-left: 12%;
      margin-right: 7%;
      font-size: 40px;
      &:nth-child(1) {
        color: #51cdfa;
      }
      &:nth-child(2) {
        color: #ff7f50;
      }
      &:nth-child(3) {
        color: #fe7678;
      }
    }
  }
}
</style>
