<template>
  <div class="container">
    <van-nav-bar
      title="注册"
      left-text="返回"
      right-text="登录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="point">
      <p>请确保你的手机畅通，用于接收验证码短信</p>
    </div>
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
        v-model="password"
        clearable
        type="password"
        placeholder="请输入密码"
        @click-right-icon="$toast('question')"
        :error-message="passwordState"
        :right-icon="passwordIcon"
      />

      <van-field
        v-model="mescode"
        clearable
        placeholder="请输入验证码"
        @click-right-icon="$toast('question')"
      >
        <van-button slot="button" size="small" type="info" @click="sendCode" v-show="show">获取验证码</van-button>
        <van-button slot="button" size="small" type="info"  v-show="!show" class="count" >{{ count }}s后重新发送</van-button>
      </van-field>
    </van-cell-group>
    <van-button type="info" size="normal" @click="register" :block="true">注册</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, Cell, CellGroup, Button, Notify, Icon, Toast, Dialog } from 'vant'
import { setInterval, clearInterval } from 'timers'

Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)
Vue.use(Notify)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Dialog)
export default {
  data () {
    return {
      username: '',
      password: '',
      mescode: '',
      code: '',
      show: true,
      count: '',
      timer: null
    }
  },
  // 计算属性，计算状态和图标的变化
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
      this.$router.replace('/login')
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
          Toast('手机号已经注册')
        } else if (data === 0) {
          // console.log('手机号验证码获取失败')
          Toast('手机号验证码获取失败')
        } else {
          this.code = data.code
        }
      })
    },
    register () {
      if (this.usernameIcon !== 'passed') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordIcon !== 'passed') {
        Toast('密码格式错误')
        return null
      }
      if (this.mescode !== this.code) {
        Toast('验证码输入错误')
        return null
      }
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'username=' + this.username + '&password=' + this.password
      }).then(res => res.json()).then(data => {
        if (data === 1) {
          // console.log('注册成功')
          Toast('注册成功')
          this.$router.push('/login')
        } else if (data === 2) {
          // console.log('用户名已经注册')
          Dialog.confirm({
            title: '提示',
            message: '该用户名已经注册，是否直接去登录'
          }).then(() => {
            this.$router.push('/login')
          }).catch(() => {
            // on cancel
          })
        } else {
          // console.log('注册失败')
          Toast('注册失败')
        }
      })
    }
  }
}
</script>

<style lang="scss">
.point {
  width: 100%;
  height: 0.5rem;
  // background-color: red;
  // border-bottom: 1px solid #ccc;
  p {
    text-align: center;
    font-size: 12px;
    color: #ccc;
    margin-top: 0.2rem;
  }
}
</style>
