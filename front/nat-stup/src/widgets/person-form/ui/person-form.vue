<script setup lang="ts">

import type {SettingPersonOption} from "@/pages/main-page/ui/main-page.vue";
import {ref} from "vue";

type Props = {
  settingPersonOption: SettingPersonOption
}

defineProps<Props>()

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
      <a-select v-model:value="direction">
        <a-select-option
          v-for="direction in settingPersonOption.directions"
          :key="direction.id"
          :value="direction.name"
        >
          {{ direction.name }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Тип заявителя">
      <a-select v-model:value="applicantType">
        <a-select-option
          v-for="applicantType in settingPersonOption.applicant_types"
          :key="applicantType.id"
          :value="applicantType.name"
        >
          {{ applicantType.name }}
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Регион предоставления">
      <a-select v-model:value="regionOfProvision">
        <a-select-option
          v-for="regionOfProvision in settingPersonOption.venues"
          :key="regionOfProvision.id"
          :value="regionOfProvision.name"
        >
          {{ regionOfProvision.name }}
        </a-select-option>
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
