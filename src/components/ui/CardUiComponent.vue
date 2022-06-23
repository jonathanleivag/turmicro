<script setup lang="ts">
interface IProspCard {
  title: string
}

defineProps<IProspCard>()
</script>

<template>
  <div class="card">
    <div class="card__header">
      <h3 class="card__title">{{ title }}</h3>
    </div>
    <div class="card__body">
      <slot />
    </div>
  </div>
</template>
