<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <h3>Contact Us</h3>
        <p>Considering joining? Want to know more about the club?<br/>Drop us a message and we'll get back to you.</p>
      </b-col>
    </b-row>
    <div class="form-wrapper">
      <b-form @submit.prevent="submit">
        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Name:"
          for="name">
          <b-col :md="10">
            <b-input
              id="name"
              v-model="formData.name"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Email:"
          for="email">
          <b-col :md="10">
            <b-input
              id="text"
              v-model="formData.email"
              maxlength="255"
              required />
          </b-col>
        </b-form-group>

        <b-form-group
          :label-cols="2"
          breakpoint="md"
          horizontal
          label="Message:"
          for="message">
          <b-col :md="10">
            <b-form-textarea
              id="message"
              v-model="formData.message"
              maxlength="1000"
              rows="2"
              max-rows="8"
              required />
            <b-form-text id="message-help-block">
              Message can be up to 1000 characters.
            </b-form-text>
          </b-col>
        </b-form-group>

        <b-form-group>
          <vue-recaptcha
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
            size="invisible"
            sitekey="6LdYrr4UAAAAABHzauJMBHu5KTvjsitwDZ5zNd6l">
          </vue-recaptcha>
        </b-form-group>
        <br/>
        <b-col
          :md="2"
          offset="5">
          <b-button
            :disabled="status==='submitting'"
            type="submit"
            variant="info">Submit</b-button>
        </b-col>
      </b-form>
    </div>
    <b-modal
      ref="alertModal"
      :title="alertModalTitle"
      :ok-only="true"
      @ok="onAlertModalOkClick">
      <p class="my-4">{{ alertModalContent }}</p>
    </b-modal>
  </b-container>
</template>
<script>
import EnquiryService from '@/services/enquiry.service';
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: 'Contact',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
        recaptchaToken: ''
      },
      alertModalTitle: '',
      alertModalContent: '',
      isSuccessful: false,
      status: ''
    };
  },
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  methods: {
    submit() {
      this.status = 'submitting';
      this.$refs.recaptcha.execute();
    },
    onCaptchaVerified(recaptchaToken) {
      const self = this;
      self.status = 'submitting';
      self.formData.recaptchaToken = recaptchaToken;
      self.$refs.recaptcha.reset();
      this.createEnquiry();
    },
    createEnquiry() {
      EnquiryService.create(this.formData).then(() => {
        this.isSuccessful = true;
        this.alertModalTitle = 'Success';
        this.alertModalContent = 'Successfully sent enquiry';
        this.$refs.alertModal.show();

        this.formData = {
          name: '',
          email: '',
          message: '',
          recaptchaToken: ''
        };
      }).catch((error) => {
        this.isSuccessful = false;
        this.alertModalTitle = 'Error';
        if (error.response.data.status === 503) {
          this.alertModalContent = 'Successfully stored enquiry';
          this.$refs.alertModal.show();

          this.formData = {
            name: '',
            email: '',
            message: '',
            recaptchaToken: ''
          };
        } else {
          this.alertModalContent = 'Unable to send enquiry, please try again later';
          this.$refs.alertModal.show();
        }
      });
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    onAlertModalOkClick() {
      this.status = '';

      if (this.isSuccessful) {
        this.$router.push({ name: 'Contact' });
      }
    }
  }
};
</script>
<style>
.form-wrapper {
  margin-top: 20px;
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
}
</style>

