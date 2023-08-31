<template>
  <div>
    <h1>User Details</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>ID: {{ user.id }}</p>
      <p>Name: {{ user.firstName }} {{ user.lastName }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const userId = route.params.id;

const loading = ref(true);
const user = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://dummyapi.io/data/v1/user/${userId}`, {
      headers: {
        'app-id': '64ef8bdaba44d5734fe97bb5'
      }
    });

    user.value = response.data;
    loading.value = false;
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
});
</script>
