<template>
    <div>
        <ResultComponent></ResultComponent>
        <SecondResult></SecondResult>
        <CounterComponent></CounterComponent>
    </div>
</template>

<script>
import CounterComponent from './CounterComponent.vue'; 
import ResultComponent from './ResultComponent.vue' 
import SecondResult from './SecondResult.vue';

export default {
  name: 'App',
  components: {
    CounterComponent,
    ResultComponent, 
    SecondResult,
}
}
</script>

<style>
div{
    height: 50%;
    width: 60%; 
}
</style>
