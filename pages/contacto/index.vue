<template>
  <div class="column is-9">
    <div class="card">
      <div class="card-content">
        <div class="content">
          <p>Siempre estoy interesado en participar en proyectos comerciales y open source. Si requieres de colaboración
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
            <input class="input" type="text">
          </div>
        </div>
        <div class="field">
          <label class="label">Correo</label>
          <div class="control">
            <input class="input" type="email">
          </div>
        </div>
        <div class="field">
          <label class="label">Mensaje</label>
          <div class="control">
            <textarea class="textarea"></textarea>
          </div>
        </div>
        <button class="button is-dark is-fullwidth mar-top">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    layout: 'custom',
  }
</script>

<style scoped>
  .mar-top {
    margin-top: 1em;
  }
</style>
