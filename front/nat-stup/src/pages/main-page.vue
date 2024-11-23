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
const searchValue = ref<string>('')

const findSearch = ref([
  'Первый вариант ответа',
  'Второй вариант ответа незнаю что тут нужно',
  'Третий вариант ответа Н+1',
  'Четвертый вариант ответа принятие',
  'Пятый вариант ответа нужно понять как конфигурировать текст',
])

function checkPerson(numberPerson: number){
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

function search() {
  console.log(searchValue.value)
}

onMounted(async () => {
  const settingPerson = fetch('/api/settings/')
  console.log(settingPerson)
})
</script>

<template>
  <div id="main-page">
    <div id="user-window">
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
      <h3>Юзер</h3>
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
        <div id="search-value">
          <a-input class="mb-2" v-model:value="searchValue"/>
          <a-button
            class="mb-2"
            type="primary"
            @click="search"
          >
            Поиск
          </a-button>
        </div>
        <div class="finding-search">
          <h4>Найденные результаты</h4>
          <div
            v-for="searchInfo in findSearch"
            class="search-info-value"
          >
            <p>
              {{searchInfo}}
            </p>
          </div>
        </div>
      </div>
      <div class="search-form">
        <h3>
          Приходящая информация формируемая из данных о пользователе
        </h3>
        <div
          v-for="searchInfo in findSearch"
          class="search-info-value"
        >
          <p>
            {{searchInfo}}
          </p>
        </div>
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
#user-window{
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
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

  padding: 10px;

  cursor: pointer;
}
#info-form{
  padding-left: 20px;
}
#search-value{
  width: 80%;

  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
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
.search-info-value{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 5px;
}
.finding-search{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
</style>
