<template>
    <div>
        <p>Result 1: {{counter}}</p>
        <p>Result 2: {{multiply}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {  
     computed: {
        ...mapGetters({
          multiply: "multiplyCounter",
          counter: "getCounter"
        }), 
    },
    methods: { 
    }
}
</script>

<style scoped>
div{
    float: center; 
}
p{
    border: 1px solid grey; 
    width: 76%;
    margin-left: 10%;
    background-color: bisque;
    padding: 2%;
    font-size: 160%;
}
</style>