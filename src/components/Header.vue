<script setup lang="ts">
</script>

<template>
     <header>
    <div class="logo">TAVUE</div>
    <nav>
      <RouterLink class="nav-btn" to="/">Accueil</RouterLink>
      <RouterLink class="nav-btn" to="/">Lunettes</RouterLink>
      <RouterLink class="nav-btn" to="/perso">Personnaliser</RouterLink>
      <RouterLink class="nav-btn" to="/">Mon Compte</RouterLink>
    </nav>
    <button class="signup-btn">S'inscrire</button>
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
  margin-right: 141px;
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
}

  </style>
  