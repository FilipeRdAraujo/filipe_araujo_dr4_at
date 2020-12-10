<template>
  <div>
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="Não compartilhe seu email com ninguém!"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Insira seu email"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Insire seu nome:"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        label="Insira seu feedback:"
        label-for="input-3"
      >
        <b-form-textarea
          id="input-3"
          v-model="form.feedback"
          required
        ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        email: "",
        name: "",
        feedback: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit() {
      alert("Enviado!");
    },
  },
};
</script>

<style>
</style>