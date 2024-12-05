<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { onMounted, ref } from 'vue';

const toDos = ref<any[]>([]);

onMounted(() => {
  fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then((data) => {
    toDos.value = [...data.todos]
  });
});

let newTodo = ref({
  todo: '',
  completed: false,
});

function addToDo() {
  toDos.value.push({...newTodo.value});
}

</script>

<template>
  <main class="section columns">
    <section class="column">
      <div  v-for="toDo in toDos" :key="toDo.todo" class="card">
        <div class="card-content">
          <div class="content" :class="{ completed: toDo.completed }">
            {{ toDo.todo }}
          </div>
        </div>
      </div>
    </section>
  </main>

  <div class="box" >
  <div class="field">
    <label class="label">Todo</label>
    <div class="control">
      <input class="input" type="text" v-model="newTodo.todo"/>
    </div>
  </div>
  <div>
    <label class="checkbox">
      <input type="checkbox" v-model="newTodo.completed"/>
      Completed
    </label>
  </div>
  <button class="button is-primary" @click="addToDo">Save todo</button>
</div>

<VueQueryDevtools />
</template>

<style>
.column {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.completed {
  text-decoration-line: line-through;
}

.box {
  width: 500px;
}

.checkbox {
  margin-bottom: 10px;
}
</style>
