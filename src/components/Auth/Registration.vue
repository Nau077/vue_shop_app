<template>
   <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue">
                <v-toolbar-title>Registration form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="email"
                  :rules="emailRules"
                  >
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  type="password"
                  :counter="6"
                  v-model="password"
                  :rules="passwordRules"
                  >
                  </v-text-field>
                  <v-text-field
                  prepend-icon="lock"
                  name="confirmPassword"
                  label="confirm password"
                  type="confirmPassword"
                  :counter="6"
                  v-model="confirmPassword"
                  :rules="confirmPasswordRules"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue"
                @click="onSubmit"
                :disabled="!valid"
                >Registration</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export default {
    data () {
        return {
            email: '',
            password: '',
            valid: false,
            confirmPassword: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => emailRegex.test(v) || 'E-mail must be valid'
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length >= 6) || 'Password must be equal or more than 6 characters'
            ],
            confirmPasswordRules: [
                v => !!v || 'To confirm password is required',
                v => v === this.password || 'You need to confirm the password!'
            ]
        };
    },
    methods: {
        onSubmit () {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                };

                console.log(user);
            }
        }
    }
};
</script>
