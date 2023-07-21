<template>
    <div class="form-container">
      <h1>Formulario de Usuarios</h1>
      <form @submit.prevent="saveUsers()" class="user-form"> 
        <label>Nombre</label>
        <input type="text" placeholder="Ingresa tu Nombre" required v-model="user.nombre">
  
        <label>Apellido</label>
        <input type="text" placeholder="Ingresa tu Apellido" required v-model="user.apellido">
  
        <label>Dirección</label>
        <input type="text" placeholder="Ingresa tu Dirección" required v-model="user.direccion">
  
        <label>Correo</label>
        <input type="text" placeholder="Ingresa tu Correo" required v-model="user.correo">
  
        <button>Guardar</button>       
      </form>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import { user } from "@/interfaces/user";
  import { createUsers } from "@/services/user";
  export default defineComponent({
    data() {
      return {
        user: {} as user, 
      };
    },
    methods: {
      async saveUsers() {
        const res = await createUsers(this.user);
        console.log(res);
      },
    },
  });
  </script>
  <style>
  body {
    background-color: rgb(2, 20, 20);
  }
  h1 {
    color: #f1f1f1;
    padding: 5px;
  }
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    padding: 10px;
  }
  .user-form {
    width: 300px;
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  label {
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>
  