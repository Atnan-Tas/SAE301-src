<script setup>
  // Import éléments de vue
  import { ref, onMounted } from 'vue';
  // Import éléments de routage
  import { useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

  
  // user connecté ? au départ faux
  let isConnected = ref(false)

  // Element de connexion
  let user = ref('')
  let psw = ref('')

  // User connecté
  let currentUser = ref(null)
  let avatar = ref(null)

// Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"lunette"})
}
</script>

<template>
    <header>
    <div class="logo">TAVUE</div>
    <nav>
      <RouterLink class="nav-btn" to="/">Accueil</RouterLink>
      <RouterLink class="nav-btn" to="/">Lunettes</RouterLink>
      <RouterLink class="nav-btn" to="/perso">Personnaliser</RouterLink>
      <RouterLink class="nav-btn" to="/connexion">Mon Compte</RouterLink>
      <div v-if="isConnected" class="user-info">
        <span class="user-name">{{ currentUser.name }}
</span>
    <img class="user-avatar" :src="avatar" alt="User Avatar" />
    
  </div>
    </nav>
    <RouterLink v-if="!isConnected" class="signup-btn" to="/connexion">S'inscrire</RouterLink>
    <button class="btn btn-dark" type="button" @click="deconnect">
                  </button>
  </header>
  </template>
  
  <style scoped>
  header {
  background-color: #ffffff;
  height: 85px; 
  width: 1440px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px; 
}

.logo {
  margin-left: 113px;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 600;
  line-height: 54px;
  text-transform: uppercase;
}

nav {
  display: flex;
  gap: 102px;
}

.nav-btn {
  background: none;
  border: none;
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
  text-decoration: none;
}

.signup-btn {
  margin-left: 50px;
  background-color: #3C7DDE;
  border: none;
  border-radius: 4px;
  width: 184px;
  height: 44px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;text-decoration: none;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  color: #000;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
}

.btn-dark {
  background-color: #3C7DDE;
  border: none;
  border-radius: 4px;
  width: 44px; /* supposons une dimension carrée pour un bouton d'icône */
  height: 44px;
  color: white;
  font-family: 'PT Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto; /* ml-auto pour pousser le bouton à droite */
  transition: background-color 0.3s ease;
  margin-left: -20px;
}

.btn-dark:hover {
  background-color: #2c5cab; /* une teinte plus foncée lors du survol */
}

  </style>
  