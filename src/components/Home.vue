<template>
  <div style="display: flex; justify-content: space-between; gap: 4rem">
    <Card>
      <template v-slot:header>
        <img src="../assets/spring.png" style="height: 150px; width: 300px" />
      </template>
      <template v-slot:title>
        <h1>Card Title</h1>
      </template>
      <template v-slot:body>
        <p>
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
      </template>
      <template v-slot:footer>
        <button>Go somewhere</button>
      </template>
    </Card>
    <Card>
      <template v-slot:header>
        <img src="../assets/spring.png" style="height: 150px; width: 300px" />
      </template>
      <template v-slot:title>
        <h1>Card Title</h1>
      </template>
      <template v-slot:body>
        <p>
          Some quick example text to build on the card title and make up the bulk of the
          card's content.
        </p>
      </template>
      <template v-slot:footer>
        <button>Go somewhere</button>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "home",
  components: {
    Card,
  },
};
</script>
