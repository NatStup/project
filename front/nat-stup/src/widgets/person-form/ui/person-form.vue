<script setup lang="ts">

type PersonForm = {

}

const props = defineProps<Props>()

const inputValue = defineModel()
</script>

<template>
  <a-form
    layout="horizontal"
    style="max-width: 600px"
  >
    <a-form-item label="Направление">
      <a-input />
    </a-form-item>
    <a-form-item label="Тип заявителя">
      <a-select>
        <a-select-option value="demo">Индивидуальный предприниматель</a-select-option>
        <a-select-option value="demo">Физическое лицо</a-select-option>
        <a-select-option value="demo">Юридическое лицо</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Регион предоставления">
      <a-select>
        <a-select-option value="demo">Индивидуальный предприниматель</a-select-option>
        <a-select-option value="demo">Физическое лицо</a-select-option>
        <a-select-option value="demo">Юридическое лицо</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Даты проведения">
      <a-range-picker />
    </a-form-item>
    <a-form-item label="Сколько в числах">
      <a-input-number />
    </a-form-item>
    <a-form-item label="Специфичные теги">
      <a-textarea :rows="4" />
    </a-form-item>
  </a-form>
</template>

<style scoped>

</style>
