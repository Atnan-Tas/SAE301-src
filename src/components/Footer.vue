<script setup>

</script>

<template>
    <footer class="footer">
  <div class="footer-container">
    <div class="title-column">
      <h1 class="footer-title">TAVUE</h1>
    </div>
    <div class="icon-column">
        <img src="@/components/icons/fb_icon.svg" alt="Facebook Icon" class="icon" />
        <img src="@/components/icons/insta_icon.svg" alt="Instagram Icon" class="icon" />
        <img src="@/components/icons/X_icon.svg" alt="Close Icon" class="icon" />
      </div>
  </div>
  <hr class="hrfooter">
  <div class="liste-about">
    <div class="about-section">
        <h5 class="about-title">A propos</h5>
        <a class="about-link">Contact</a>
        <a class="about-link">A propos de nous</a>
        <a class="about-link">Mentions légales</a>
    </div>
    <div class="lunette-section"> 
            <h5 class="about-title">Lunette</h5>
            <a class="about-link">Personnaliser</a>
    </div>
    <div class="newsletter-container">
            <h3 class="titre-nl">S'abonner à la Newsletter</h3>
            <div class="newsletter-input-group">
                <input type="email" placeholder="Votre Mail" />
                <button>OK</button>
            </div>
        </div>
  </div>
</footer>

</template>

<style scoped>
.footer {
  width: 1440px;
  justify-content: center;
}

.footer-container {
  display: flex;
  width: 1500px;
  padding: 40px 0px;
  align-items: center;  /* Changement ici pour aligner horizontalement */
  flex-shrink: 0;
  gap: 740px;
}

.title-column {
  display: flex;
  width: 236px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 113px;
}

.footer-title {
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-size: 45px;
  font-style: italic;
  font-weight: 600;
  line-height: 54px;
  text-transform: uppercase;
}


.icon {
  /* Vous pouvez ajouter des styles supplémentaires pour les icônes ici si nécessaire */
  margin-bottom: 10px; /* Pour espacer les icônes */
}

.icon-column {
  display: flex;
  width: 236px;
  align-items: center;
  gap: 10px; /* Pour espacer les icônes */
}

.hrfooter {
  width: 1057px;
  height: 1px;
  background: #E6E6E6;
}

.about-section {
  display: flex;
  width: 148px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  margin-left: 120px;
  margin-top: 50px;
  flex-shrink: 0;
}

.about-title {
  color: var(--text-color, #252B42);
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 150% */
  letter-spacing: 0.1px;
}

.about-link {
  color: var(--second-text-color, #737373);
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.2px;
  text-decoration: none;
}

.lunette-section {
        display: flex;
        width: 148px;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
        margin-left: 20px; /* Espace entre les deux colonnes */
        flex-shrink: 0;
    }
    
    .liste-about  {
      display: flex;
      justify-items: center;
      align-items: center;
    }

    .newsletter-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
}

.newsletter-input-group {
    display: flex;
    align-items: center;
    gap: 10px;
}

.newsletter-input-group input {
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    background-color: #e3e2e2;
}

.newsletter-input-group button {
    background-color: #007BFF; /* Bleu */
    color: #FFF;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.titre-nl {
    color: var(--text-color, #252B42);
    font-family: 'Montserrat', sans-serif;
    font-size: 19px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    letter-spacing: 0.1px;
    margin-bottom: 10px;
}
    </style>
