<script setup lang="ts">
import PersonForm from "@/widgets/person-form";
</script>

<template>
  <div id="main-page">
    <div>
      <img alt="Vue logo" class="logo" src="../../../public/title-3.jpg" width="100" height="100" />
      Пользователь
      <person-form/>
    </div>
    <div class="stick-vertical"/>
    <div id="info-form">
      <div class="search-form">
        <h3>

        </h3>
        <a-form-item label="Поиск">
          <a-input />
        </a-form-item>
      </div>
      <div class="search-form">
        <h3>
          Приходящая информация формируемая из данных о пользователе
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
#main-page{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
#info-form{
  padding-left: 20px;
}
.search-form{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 300px;
}
.stick-vertical{
  width: 1px;
  height: 500px;
  padding-top: 20px;
  background: #9dc3d0;
  margin-left: 20px;
}
</style>
