<script setup>
import MapOSM from '../components/MapOSM.vue';
import Product from '../components/Product.vue';
</script>

<template>
  <Product />

  <div class="tab-section">
    <div class="tab-item">
      <span>Description</span>
    </div>
    <div class="tab-item">
      <span>Informations Complémentaires</span>
    </div>
    <div class="tab-item">
      <span>Avis</span>
    </div>
  </div>

  <div class="tavue-section">
    <img class="about-image" src="@/components/icons/Lunettes-accueil-2.jpg" alt="TaVue Glasses">
    
    <div class="tavue-details">
      <h2 class="tavue-title">Qu’est-ce que TaVue ?</h2>
      
      <p class="tavue-description">
        TaVue redéfinit l'art de la vision avec une touche unique qui n'appartient qu'à vous. Découvrez nos lunettes personnalisables, où chaque détail reflète votre style et votre personnalité. Choisissez parmi une palette de couleurs variées pour le cadre, ajustez la forme à votre convenance et laissez "TaVue" transformer votre vision du monde tout en affirmant votre style. Avec "TaVue", voyez le monde à travers vos propres nuances.
      </p>
    </div>
  </div>
  <p class="where">Où nous retrouver ?</p>
  <MapOSM />
</template>

<style scoped>


.tab-section {
    display: flex;
    justify-content: space-between;
    margin: 20px 248px;
    padding: 10px 0;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    padding: 0 24px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: #737373;
    cursor: pointer;
    transition: background-color 0.3s;
    font-weight: bold;
  }

  .about-image {
    width: 20%;
    margin-top: 50px;
    border-radius: 15px;
  }


  .tavue-section {
    display: flex;
    align-items: center;
    padding: 20px;
    margin: 20px 195px;
  }

  .tavue-image {
    max-width: 455px;
    max-height: 365px;
  }

  .tavue-details {
    flex: 1;
    padding-left: 50px;
    max-width: 60%; /* Limite la largeur pour compresser le texte */
  }

  .tavue-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: #252B42;
    margin-bottom: 20px;
  }

  .tavue-description {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    margin-top: 20px;
    color: #737373;
  }

.where {
    color: #000;
font-family: 'Montserrat', sans-serif;
font-size: 40px;
font-style: italic;
font-weight: 600;
line-height: 120%; /* 48px */
text-transform: uppercase;
margin-left: 100px;
}
</style>

