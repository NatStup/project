<script setup lang="ts">
import { ref } from "vue";
import { columns } from "@/pages/main-page/config";
import ModalInfo from "@/entites/modal-info";

type Props = {
  findSearchValue: object[]
}
type Emits = {
  (_e: 'search', _searchValue: string): void;
}
const emits = defineEmits<Emits>()

defineProps<Props>()

const searchValue = ref<string>('')

function search() {
  return emits('search', searchValue.value)
}

</script>

<template>
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
      <a-table
        :dataSource="findSearchValue"
        :columns="columns"
        :row-key="(record: any) => record.key"
        :scroll="{ x: 800, y: 270 }"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'url'">
            <a :href="record.url" target="_blank">
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
</template>

<style>
#search-value{
  width: 80%;

  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.finding-search{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
</style>
