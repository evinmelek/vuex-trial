<template>
    <div>
        <button @click="updateCounter(+1)">İncrease+</button>
        <button @click="updateCounter(-2)">Dercrease-</button>
    <br><br>  
        <button @click="increment(1)">increment+</button>
        <button @click="increment(-1)">decrement-</button>
        <button @click="multiply">Multiply*</button>
    <br><br>  
        <button @click="incrementAsync">Async Multiply*</button>
    </div>
</template>

<script> 
import { mapMutations } from 'vuex'
export default {
    methods: { 
        ...mapMutations([
            "mutliplyCounter",
            "updateCounter"
        ]),
        increment(){
            this.$store.dispatch("increment")
        },
        incrementAsync(){
            this.$store.dispatch("incAsync")
        },
        mutliplyCounter() {
            this.$store.dispatch("multiply")
        }
    }
}
</script>

<style scoped> 
button{
    height: 60px;
    width: 40%;
    border-radius: 5px;
    color: white;
    background-color: darkslategray; 
    font-size: large;
    padding: 1%;
    margin-left: 1%;
    margin-right: 1%;
} 
</style>