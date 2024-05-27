<template>
  <div id="Card">
    <div>
      <slot name="header"></slot>
    </div>
    <div class="content">
      <div class="titl">
        <slot name="title"></slot>
      </div>
      <div class="bdy">
        <slot name="body"></slot>
      </div>
      <div class="ftr">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style>
#Card {
  border: 1px solid rgb(165, 165, 165);
  border-radius: 4px;
  width: 17rem;
}

.content {
  margin-left: 1rem;
}

.titl {
  padding-top: 1rem;
  font-size: 20px;
  font-weight: 700px;
}

.bdy {
  padding-top: 0.5rem;
  padding-right: 1rem;
  font-size: 15px;
  font-weight: 700px;
}

.ftr {
  border: none;
  border-radius: 3px;
  max-width: 8rem;
  height: 1.7rem;
  text-align: center;
  padding-right: 0.5rem;
  padding-top: 0.1rem;
  font-size: 15px;
  font-weight: 700px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: #007bff;
  color: white;
}
</style>
