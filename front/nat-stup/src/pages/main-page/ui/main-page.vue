<script setup lang="ts">
import PersonForm from "@/widgets/person-form";
import {onMounted, ref} from "vue";
import InfoSearchForm from "@/entites/info-search-form";
import personMock from "../model";
import { columns } from "../config";
import ModalInfo from "@/entites/modal-info";

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
  direction: 'СТРОИТЕЛЬСТВО',
  applicantType: 'Индивидуальный предприниматель',
  regionOfProvision: 'Краснодарский край',
  specificTags: 'БЕТОН',
})

const dataSource = ref([
  {
    uuid: 1,
    site: "https://joyreactor.cc/new",
    title: "Поддержка пожилого бизнеса",
    description: "Будем подерживать стариков-ветеранов, желающих открыть свой бизнес завтра утром"
  },
  {
    uuid: 2,
    site: "https://habr.com/ru/feed/",
    title: "Поддержка краснодарского бизнеса",
    descreiption: "Будем поддерживать ветеранов СВО, которые решили открыть свой бизнес в Краснодаре",
    region: "Краснодарский край"
  }
])

const findSearch = ref<object[]>([])

const isMockUsers = ref<boolean>(true)
function checkPerson(numberPerson: number) {
  personFormValue.value = personMock(numberPerson)
}

async function search(searchValue: string) {
  console.log(searchValue)

  const settingSearchFetch = await fetch(`http://81.94.156.218/api/search`)
  const settingPerson = await settingSearchFetch.json()

  findSearch.value = settingPerson
}

onMounted(async () => {
  try {
    const settingPersonFetch = await fetch('http://81.94.156.218/api/get_filters')
    const settingPerson = await settingPersonFetch.json()

    // const infoFromPersonDataFetch = await fetch('http://81.94.156.218/api/get_neuron_text')
    // const infoFromPersonData = await infoFromPersonDataFetch.json()

    settingPersonOption.value = settingPerson
    // dataSource.value = infoFromPersonData
  } catch {

  }
})
</script>

<template>
  <div id="main-page">
    <div id="user-window">
      <a-checkbox v-model:checked="isMockUsers">Мок пользователи</a-checkbox>
      <div v-if="isMockUsers" id="users">
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
        <a-table
          :dataSource="dataSource"
          :columns="columns"
          :row-key="(record: any) => record.key"
          :scroll="{ x: 800, y: 300 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'site'">
              <a :href="record.site" target="_blank">
                Ссылка
              </a>
            </template>
            <template v-if="column.key === 'uuid'">
              <modal-info :id="record.uuid"/>
            </template>
          </template>
        </a-table>
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
  height: 500px;

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
