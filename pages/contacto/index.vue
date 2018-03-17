<template>
  <div class="column is-9">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="subtitle">¿Tienes alguna propuesta de trabajo?</p>
          <p>He colaborado con varias grupos y empresas, y siempre estoy interesado en participar en proyectos
            comerciales y open source. Si necesitas ayuda
            para iniciar o continuar un proyecto no dudes en contactarme llenando el siguiente formulario:</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column is-12">
        <div class="field">
          <label class="label">Nombre</label>
          <div class="control">
            <input class="input" type="text" v-model="name">
          </div>
        </div>
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="email" v-model="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Mensaje</label>
          <div class="control">
            <textarea class="textarea" v-model="message"></textarea>
          </div>
        </div>
        <button class="button is-dark is-fullwidth mar-top" @click="sendMail">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
  (function () {
    emailjs.init("user_nJMUeQm0rxTaZ2hQbIs6x");
  })();

  export default {
    name: "index",
    data() {
      return {
        name: '',
        email: '',
        message: '',
      }
    },
    layout: 'custom',
    methods: {
      sendMail() {
        if (!this.validateForm) {
          alert('Por favor llena todos los campos');
          return false;
        }
        emailjs.send("gmail", "contacto", {
          from_name: this.name.trim(),
          from_email: this.email.trim(),
          message: this.message.trim()
        })
          .then((response) => {
            //console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            if (response.text === "OK") {
              this.emailSent();
              this.clearForm();
            }
          }, (err) => {
            //console.log("FAILED. error=", err);
            this.emailError();
          });
      },
      validateForm() {
        return this.name.trim() !== '' && this.email.trim() !== '' && this.message.trim() !== '';
      },
      emailSent() {
        alert('Tu correo fue enviado exitosamente');
      },
      emailError() {
        alert('Ocurrió un problema al enviar tu correo, por favor intentalo de nuevo');
      },
      clearForm() {
        this.name = this.email = this.message = '';
      },
    }
  }
</script>

<style scoped>
  .mar-top {
    margin-top: 1em;
  }
</style>
