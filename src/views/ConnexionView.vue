<script setup>
    import { ref } from 'vue';
    import PocketBase from 'pocketbase';
    const pb = new PocketBase("http://127.0.0.1:8090");
  
    let user = ref('');
    let psw = ref('');
  
    const connect = async () => {
      try {
        const authData = await pb.collection('users').authWithPassword(user.value, psw.value);
        // Redirigez l'utilisateur vers la page d'accueil ou tout autre page souhaitée.
      } catch (error) {
        alert("Erreur d'identification : mauvais login et/ou mot de passe");
        user.value = "";
        psw.value = "";
      }
    };
  </script>

 <template>
    <div class="login-page">
      <div class="login-box">
        <h2 class="login-title">Se connecter</h2>
  
        <div class="input-group">
          <input type="email" placeholder="Adresse e-mail" v-model="user" class="login-input" />
        </div>
  
        <div class="input-group">
          <input type="password" placeholder="Mot de passe" v-model="psw" class="login-input" />
        </div>
  
        <button @click.prevent="connect" class="login-btn">Se connecter</button>
        <p class="login-text">Vous n'avez pas encore de compte? <a href="#" class="login-link">S'inscrire</a></p>
      </div>
    </div>
  </template>
  
  
  <style scoped>  
    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }
  
    .login-box {
      font-family: 'Montserrat', sans-serif;
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 300px;
    }
  
    .login-title {
      font-weight: 700;
    }
  
    .input-group {
      margin-bottom: 15px;
    }
  
    .login-input {
      font-weight: 400;
      padding: 8px;
      border-radius: 4px;
      width: 100%;
    }
  
    .login-btn {
      font-weight: 500;
      width: 100%;
      background-color: #007bff;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
  
    .login-btn:hover {
      background-color: #0056b3;
    }
  
    .login-text, .login-link {
      font-weight: 400;
    }
  
    .login-link:hover {
      text-decoration: underline;
    }
  </style>
  