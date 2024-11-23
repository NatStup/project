<script setup lang="ts">
import PersonForm from "@/widgets/person-form";
import {onMounted, ref} from "vue";
import InfoSearchForm from "@/entites/info-search-form";
import personMock from "../model";
import { columns } from "../config";

type OptionValue = {
  id: number;
  name: string;
}

export type SettingPersonOption = {
  applicant_types: OptionValue[];
  directions: OptionValue[];
  venues: OptionValue[];
}

type PersonForm = {
  direction: string;
  applicantType: string;
  regionOfProvision: string;
  specificTags: string;
}

const settingPersonOption = ref<SettingPersonOption>({
  applicant_types: [],
  directions: [],
  venues: [],
})

const personFormValue = ref<PersonForm>({
  direction: 'Гладить кота',
  applicantType: 'Индивидуальный предприниматель',
  regionOfProvision: 'ЮФО',
  specificTags: 'шерсть',
})

const findSearch = ref([
  'Первый вариант ответа',
  'Второй вариант ответа незнаю что тут нужно',
  'Третий вариант ответа Н+1',
  'Четвертый вариант ответа принятие',
  'Пятый вариант ответа нужно понять как конфигурировать текст',
])

function checkPerson(numberPerson: number) {
  personFormValue.value = personMock(numberPerson)
}

function search(searchValue: string) {
  console.log(searchValue)
}

onMounted(async () => {
  const settingPersonFetch = await fetch('http://81.94.156.218/api/get_filters')
  const settingPerson = await settingPersonFetch.json()

  settingPersonOption.value = settingPerson
  console.log(settingPerson)
})

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]
</script>

<template>
  <div id="main-page">
    <div id="user-window">
      <div id="users">
        <div
          class="user-info"
          @click="checkPerson(1)"
        >
          <img alt="Пользователь 1" class="logo" src="../../../shared/assets/title-1.jpg" width="100" height="100" />
          Юзер-1
        </div>
        <div
          class="user-info"
          @click="checkPerson(2)"
        >
          <img alt="Пользователь 2" class="logo" src="../../../shared/assets/title-2.jpg" width="100" height="100" />
          Юзер-2
        </div>
        <div
          class="user-info"
          @click="checkPerson(3)"
        >
          <img alt="Пользователь 3" class="logo" src="../../../shared/assets/title-3.jpg" width="100" height="100" />
          Юзер-3
        </div>
      </div>
      <h3>Юзер</h3>
      <person-form
        v-model:direction="personFormValue.direction"
        v-model:applicant-type="personFormValue.applicantType"
        v-model:region-of-provision="personFormValue.regionOfProvision"
        v-model:specific-tags="personFormValue.specificTags"

        :setting-person-option = "settingPersonOption"
      />
    </div>
    <div class="stick-vertical"/>
    <div id="info-form">
      <info-search-form
        :find-search-value="findSearch"

        @search="search"
      />
      <div class="search-form">
        <h3>
          Приходящая информация формируемая из данных о пользователе
        </h3>
        <div
          v-for="searchInfo in findSearch"
          :key="searchInfo"
          class="search-info-value"
        >
          <p>
            {{searchInfo}}
          </p>
        </div>
        <a-table
          :dataSource="dataSource"
          :columns="columns"
          :scroll="{ x: 800, y: 400 }"
        />
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
</style>
