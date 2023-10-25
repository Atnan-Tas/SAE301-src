<script setup>
</script>
<template>
    <p class="acc-lun">Accueil > Lunettes</p>
<div class="product-section">
    <img class="product-image" src="@/components/icons/Lunettes_accueil.png" alt="FlexFrame Glasses">
    
    <div class="product-details">
      <h2 class="product-title">FlexFrame</h2>
      
      <div class="product-price">
        <span class="discounted-price">279€ </span>
        <span class="original-price">300€</span>
      </div>
      
      <p class="availability">Disponibilité : <span class="in-stock">En Stock</span></p>
      
      <p class="product-description">
        Les lunettes Tavue combinent design élégant et personnalisation unique. Optez pour un cadre qui épouse parfaitement la forme de votre visage, puis choisissez la couleur du cadran et du bracelet pour créer une pièce qui est véritablement la vôtre. Avec Tavue, chaque détail est une expression de votre style.
      </p>
      
      <button class="customize-button">Personnaliser</button>
    </div>
  </div>
  </template>

  <style scoped>
.acc-lun {
    color: var(--text-color, #252B42);
    margin-left: 200px;
    padding: 10px;

/* link */
font-family: 'Montserrat', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 171.429% */
letter-spacing: 0.2px;
}

.lun-acc {
    height: 365px;
    width: 455px;

}

.col-md {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;}

.titre-item {
    color: var(--text-color, #252B42);

/* h4 */
font-family: 'Montserrat', sans-serif;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
letter-spacing: 0.2px; 
}

.product-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin: 20px 195px;
}

.product-image {
  max-width: 455px;
  max-height: 365px;
}

.product-details {
  flex: 1;
  padding-left: 50px;
}

.product-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
  color: #252B42;
  margin-bottom: 20px;
}

.product-price .discounted-price {
  font-size: 40px;
  font-weight: bold;
  color: #FF5733;
  font-family: 'Montserrat', sans-serif;

}

.product-price .original-price {
  font-size: 25px;
  text-decoration: line-through;
  color: #737373;
  margin-left: 10px;
  font-family: 'Montserrat', sans-serif;

}

.availability {
  font-size: 16px;
  margin-top: 20px;
  font-family: 'Montserrat', sans-serif;
}

.in-stock {
  color: green;
}

.product-description {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  margin-top: 20px;
  color: #737373;
}

.customize-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #23A6F0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 700;
}

.customize-button:hover {
  background-color: #FF5733;
}
</style>