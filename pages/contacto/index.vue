<template>
  <div class="column is-9">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p class="subtitle">Interested on my services? | ¿Tienes alguna propuesta de trabajo?</p>
          <p>I have worked with some groups and companies so far. I am always interested to be part in commercial &
            open source projects. If you need help to start or continue with your project don't hesitate to reach me
            by filling the next form:</p>
          <hr>
          <p>He colaborado con varias grupos y empresas, y siempre estoy interesado en participar en proyectos
            comerciales y open source. Si necesitas ayuda para iniciar o continuar un proyecto no dudes en contactarme
            llenando el siguiente formulario:</p>
        </div>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column is-12">
        <form action="https://formsubmit.co/hiramg90@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New message from eichgi.com">
          <input type="text" name="_honey" style="display:none">
          <div class="field">
            <label class="label">Tu nombre / Your name</label>
            <div class="control">
              <input class="input" type="text" name="name" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Tu correo / Your email</label>
            <div class="control">
              <input class="input" type="email" name="email" required>
            </div>
          </div>
          <div class="field">
            <label class="label">Tu mensaje / Your message</label>
            <div class="control">
              <textarea class="textarea" name="message" required></textarea>
            </div>
          </div>
          <button class="button is-dark is-fullwidth mar-top">Enviar / Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        name: '',
        email: '',
        message: '',
        form_submit_alias: ``,
      }
    },
    layout: 'custom',
  }
</script>

<style scoped>
  .mar-top {
    margin-top: 1em;
  }
</style>
