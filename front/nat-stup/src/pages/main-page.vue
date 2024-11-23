<script setup lang="ts">
import PersonForm from "@/widgets/person-form";
import {onMounted, ref} from "vue";

type PersonForm = {
  direction: string;
  applicantType: string;
  regionOfProvision: string;
  specificTags: string;
}

const inputValue = ref<PersonForm>({
  direction: 'Гладить кота',
  applicantType: 'Индивидуальный предприниматель',
  regionOfProvision: 'ЮФО',
  specificTags: 'шерсть',
})

function checkPerson(numberPerson: number){
  console.log(numberPerson)
  if (numberPerson === 1) {
    inputValue.value = {
      direction: 'Гладить кота',
      applicantType: 'Индивидуальный предприниматель',
      regionOfProvision: 'ЮФО',
      specificTags: 'шерсть',
    }
  } else if (numberPerson === 2) {
    inputValue.value = {
      direction: 'Чесать гуся',
      applicantType: 'Физическое лицо',
      regionOfProvision: 'Москва',
      specificTags: 'перо',
    }
  } else {
    inputValue.value = {
      direction: 'Смотреть на стадо коров',
      applicantType: 'Юридическое лицо',
      regionOfProvision: 'Ростовская область',
      specificTags: 'молоко',
    }
  }
  console.log(inputValue.value)
}

onMounted(async () => {
  const settingPerson = fetch('/settings/')
  console.log(settingPerson)
})
</script>

<template>
  <div id="main-page">
    <div>
      <div id="users">
        <div
          class="user-info"
          @click="checkPerson(1)"
        >
          <img alt="Пользователь 1" class="logo" src="@/shared/assets/title-1.jpg" width="100" height="100" />
          Юзер-1
        </div>
        <div
          class="user-info"
          @click="checkPerson(2)"
        >
          <img alt="Пользователь 2" class="logo" src="@/shared/assets/title-2.jpg" width="100" height="100" />
          Юзер-2
        </div>
        <div
          class="user-info"
          @click="checkPerson(3)"
        >
          <img alt="Пользователь 3" class="logo" src="@/shared/assets/title-3.jpg" width="100" height="100" />
          Юзер-3
        </div>
      </div>
      <person-form
        v-model:direction="inputValue.direction"
        v-model:applicant-type="inputValue.applicantType"
        v-model:region-of-provision="inputValue.regionOfProvision"
        v-model:specific-tags="inputValue.specificTags"
      />
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
