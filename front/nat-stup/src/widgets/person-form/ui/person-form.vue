<script setup lang="ts">

// const props = defineProps<Props>()

import {ref} from "vue";

const formRef = ref();

const direction = defineModel('direction')
const applicantType = defineModel('applicantType')
const regionOfProvision = defineModel('regionOfProvision')
const specificTags = defineModel('specificTags')
</script>

<template>
  <a-form
    layout="horizontal"
    ref="formRef"
    style="width: 420px"
  >
    <a-form-item label="Направление бизнеса">
      <a-input v-model:value="direction" />
    </a-form-item>
    <a-form-item label="Тип заявителя">
      <a-select v-model:value="applicantType">
        <a-select-option value="demo">Индивидуальный предприниматель</a-select-option>
        <a-select-option value="demo">Физическое лицо</a-select-option>
        <a-select-option value="demo">Юридическое лицо</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Регион предоставления">
      <a-select v-model:value="regionOfProvision">
        <a-select-option value="demo">Индивидуальный предприниматель</a-select-option>
        <a-select-option value="demo">Физическое лицо</a-select-option>
        <a-select-option value="demo">Юридическое лицо</a-select-option>
      </a-select>
    </a-form-item>
<!--    <a-form-item label="Даты проведения">-->
<!--      <a-range-picker />-->
<!--    </a-form-item>-->
<!--    <a-form-item label="Сколько в числах">-->
<!--      <a-input-number />-->
<!--    </a-form-item>-->
    <a-form-item label="Специфичные теги">
      <a-textarea v-model:value="specificTags" :rows="4" />
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>
