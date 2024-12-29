<template>
  <div class="login">
    <div class="login-frame">
      <div class="header">
        <div class="header-frame">
          <div class="header-frame1"></div>
          <div class="header-frame2">ChainCleanser</div>
        </div>
        <div class="nav">
          <div class="nav-frame">
            <div v-for="(item, index) in navItems"
                 :key="index"
                 :class="{'clicked': isClicked==index}"
                 @click="selectItem(index)"
                 class="nav-item">
              {{ item }}</div>
            </div>
        </div>
      </div>
      <div class="main">
        <div class="main-title">欢迎来到ChainCleanser</div>
        <div class="main-subtitle">登陆你的账户</div>
        <div>
          <form @submit.prevent="login">
          <div class="user-password">用户名</div>
          <input type="text" id="username" v-model="username" class="custom-input" placeholder="请输入账户名" required>
          <div class="user-password">密码</div>
          <input type="password" id="password" v-model="password" class="custom-input" placeholder="请输入密码" required>
          <p v-if="logFailed" style="color:red;">登录失败，请检查你的用户名和密码。</p>
          <button class="custom-button" type="submit">登陆</button>
          </form>
        </div>
        <div class="login-forget-password">忘记密码?</div>
        <div class="newer-register">新用户注册</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  color: #000;
  justify-content: center;
}
.login-frame {
  background-color: #fff;
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .login-frame {
    max-width: 100%;
  }
}
.header {
  justify-content: space-between;
  border-color: rgba(229, 232, 235, 1);
  border-style: solid;
  border-width: 0 0 1px 0;
  display: flex;
  gap: 0px;
  padding: 12px 40px;
}
@media (max-width: 991px) {
  .header {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.header-frame {
  display: flex;
  gap: 16px;
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: -0.27px;
  margin: auto 0;
}
@media (max-width: 991px) {
  .header-frame {
    white-space: initial;
  }
}
.header-frame1 {
  width: 10px;
  height: 10px;
  margin: auto 0;
}
.header-frame2 {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
}

.nav {
  justify-content: end;
  display: flex;
  padding-left: 80px;
  gap: 20px;
  font-size: 14px;
  line-height: 150%;
}
@media (max-width: 991px) {
  .nav {
    flex-wrap: wrap;
  }
}
.nav-frame {
  display: flex;
  gap: 20px;
  font-weight: 500;
  justify-content: space-between;
  padding: 10px 0;
}
.nav-item {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  justify-content: center;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  white-space: nowrap;
  letter-spacing: 0.21px;
  padding: 10px 16px;
}
@media (max-width: 991px) {
  .nav-item {
    white-space: initial;
    padding: 0 20px;
  }
}
.main {
  align-self: center;
  display: flex;
  margin-top: 20px;
  width: 512px;
  max-width: 100%;
  flex-direction: column;
  font-size: 16px;
  font-weight: 400;
  padding: 20px 16px;
}
.main-title {
  text-align: center;
  font-feature-settings: "dlig" on;
  letter-spacing: -0.27px;
  align-self: center;
  font: 700 18px Work Sans, sans-serif;
}
.main-subtitle {
  text-align: center;
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  line-height: 150%;
  align-self: center;
  margin-top: 12px;
}
.user-password {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  font-weight: 500;
  line-height: 150%;
  margin-top: 24px;
}
@media (max-width: 991px) {
  .user-password {
    max-width: 100%;
  }
}
.custom-input {
  font-feature-settings: "dlig" on;
  font-family: Work Sans, sans-serif;
  justify-content: center;
  align-items: start;
  border-radius: 12px;
  border-color: rgba(222, 222, 222, 1);
  border-style: solid;
  border-width: 2px;
  background-color: #fff;
  margin-top: 8px;
  white-space: nowrap;
  line-height: 150%;
  padding: 15px;
  width:100%;
  box-sizing: border-box;
  outline:none;
}
@media (max-width: 991px) {
  .custom-input {
    max-width: 100%;
    padding-right: 20px;
    white-space: initial;
  }
}
.custom-input:hover,.custom-input:focus {
  border-color: #000 !important;
}

.custom-button {
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #000;
  display: flex;
  margin-top: 24px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0.21px;
  line-height: 150%;
  padding: 10px 16px;
  font-family: Work Sans, sans-serif;
  font-feature-settings: "dlig" on;
  width:100%;
}
@media (max-width: 991px) {
  .custom-button {
    max-width: 100%;
    padding: 0 20px;
  }
}
.login-forget-password {
  color: #6b6b6b;
  text-align: center;
  font-feature-settings: "dlig" on;
  align-self: center;
  margin-top: 16px;
  font: 14px/150% Work Sans, sans-serif;
}
.newer-register {
  color: #6b6b6b;
  text-align: center;
  font-feature-settings: "dlig" on;
  align-self: center;
  margin: 16px 0 110px;
  font: 14px/150% Work Sans, sans-serif;
}
@media (max-width: 991px) {
  .newer-register {
    margin-bottom: 40px;
  }
}
</style>

<script>
export default {
  name:"LoginPage",
  data() {
    return {
      username: '',
      password: '',
      message:'',
      isClicked: false,
      logFailed: false,
      navItems: ['About', 'Contact Us', 'Help'],
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:8080/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        if (response.ok) {
          this.$router.push('/tablePreview')
        } else {
          this.message = await response.json();
          this.logFailed = true;
        }
      } catch (error) {
        this.logFailed = true;
        if (error.response) {
          this.message = error.response.data.message || '登录失败';
        } else {
          this.message = '无法连接到服务器，请稍后再试。';
        }
      }
    },
    selectItem(index) {
      this.isClicked = index;
    },
  }
};
</script>