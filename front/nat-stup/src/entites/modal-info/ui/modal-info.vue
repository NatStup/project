<script setup lang="ts">
import { ref } from 'vue';
import { Modal } from 'ant-design-vue';
import { h } from 'vue';
type Props = {
  id: number | string
}

const props = defineProps<Props>()

const open = ref<boolean>(false);

const info = async (id: number | string) => {
  console.log(id)
  let orgInfoText
  try {
    const orgInfo = await fetch(`http://81.94.156.218/api/get_neuron_text?uuid=${id}`)
    orgInfoText = await orgInfo.json()
  } catch {}
  finally {
    const blockText = orgInfoText ?? 'Ошибка запроса'

    Modal.info({
      title: 'Расширенная информация',
      content: h('div', {}, [
        h('p', blockText),
      ]),
      onOk() {},
      closable: true,
      maskClosable: true,
      mask: true,
      width: 800,
    });
  }
};
</script>

<template>
  <div>
    <a-button @click="info(id)">Инфо</a-button>
  </div>
</template>

<style scoped>

</style>
