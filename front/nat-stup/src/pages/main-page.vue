<script setup lang="ts">
import PersonForm from "@/widgets/person-form";

function checkPerson(numberPerson: number){
  console.log(numberPerson)
}

</script>

<template>
  <div id="main-page">
    <div>
      <div id="users">
        <div
          class="user-info"
          @click="checkPerson(1)"
        >
          <img alt="Vue logo" class="logo" src="../../../public/title-1.jpg" width="100" height="100" />
          Юзер-1
        </div>
        <div
          class="user-info"
          @click="checkPerson(2)"
        >
          <img alt="Vue logo" class="logo" src="../../../public/title-2.jpg" width="100" height="100" />
          Юзер-2
        </div>
        <div
          class="user-info"
          @click="checkPerson(3)"
        >
          <img alt="Vue logo" class="logo" src="../../../public/title-3.jpg" width="100" height="100" />
          Юзер-3
        </div>
      </div>
      <person-form/>
    </div>
    <div class="stick-vertical"/>
    <div id="info-form">
      <div class="search-form">
        <h3>
          Поиск по интересующим тезисам
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
#users{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding-bottom: 20px;
}
.user-info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  cursor: pointer;
}
#info-form{
  padding-left: 20px;
}
.search-form{
  height: 300px;

  display: flex;
  align-items: center;
  flex-direction: column;
}
.stick-vertical{
  width: 1px;
  height: 500px;
  padding-top: 20px;
  background: #9dc3d0;
  margin-left: 20px;
}
h3{
  padding: 20px;
}
</style>
