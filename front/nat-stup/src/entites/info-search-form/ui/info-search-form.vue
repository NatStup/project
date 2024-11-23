<script setup lang="ts">
import {ref} from "vue";

type Props = {
  findSearchValue: string[]
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
      <div
        v-for="searchInfo in findSearchValue"
        :key="searchInfo"
        class="search-info-value"
      >
        <p>
          {{searchInfo}}
        </p>
      </div>
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
.search-info-value{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 5px;
}
</style>
