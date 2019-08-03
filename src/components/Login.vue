<template>
  <div>
    <div class="alert alert-info">
      Username: test
      <br />Password: test
    </div>
    <h2>Login</h2>
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
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service';
import { router } from '../router';

export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false
    };
  },
  methods: {
    handleSubmit() {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        AuthService.login(username, password).then(
          () => {
            router.push('/');
          },
          () => {}
        );
      }
    }
  }
};
</script>
