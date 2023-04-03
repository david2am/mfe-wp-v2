<script>
import add from "remote/add";

export default {
    methods: {
      handlerClick() {
        console.log(add(2, 3))
      }
    }
}
</script>

<template>
    <div class="container">
        <div>Name: host</div>
        <div>Framework: vue2</div>
        <div>Language: JavaScript</div>
        <div>CSS: Empty CSS</div>
        <button @click="handlerClick">Click me!</button>
    </div>
</template>