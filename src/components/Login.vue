<template>
  <b-container>
    <b-row>
      <b-col md="6" sm="12">
        <div class="alert alert-info">
          <h4>To continue, please login.</h4>
        </div>
      </b-col>
      <b-col md="6" sm="12">
    <h2>Login</h2>
    <div class="alert alert-danger" v-show="showError">
      Login Failed!
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          type="text"
          v-model="username"
          name="username"
          class="form-control"
          :class="{ 'is-invalid': submitted && !username }"
        />
        <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          v-model="password"
          name="password"
          class="form-control"
          :class="{ 'is-invalid': submitted && !password }"
        />
        <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { AuthService } from '@/services/auth.service';
import { router } from '../router';

export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
      showError: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        AuthService.login(username, password).then(
          () => {
            this.$bus.$emit('logged', 'User logged in');
            this.showError = false;
            router.push('/admin');
          },
          () => {
            this.showError = true;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
.homeText {
  font-size: 35px;
  color: #345471;
  text-align: center;
  position: relative;
  top: 10px;
  text-shadow: 2px 2px 2px gray;
}
label {
  text-align: left;
}

</style>
