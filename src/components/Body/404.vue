<template>
  <div id="container">

    <h1 style="font-size:80px">404 </h1>
    <h1>The page you are looking for was not found.</h1>
    <a href="/">Back to home</a>
    <!-- <v-form v-model='valid' ref='form'> -->
       <v-card ref="form">
                <v-card-text>
      <v-text-field
        label="E-mail"
        v-model="email"
        :rules="this.emailRules"
        :error-messages="errorMessages"
        required
      >
      </v-text-field>
      </v-card-text>
       </v-card>
    <!-- </v-form> -->
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      email: '',
      emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
    }
  } 
}
</script>

<style scoped>
  #container{
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;

  }
</style>
