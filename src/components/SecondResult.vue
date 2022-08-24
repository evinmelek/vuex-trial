<template>
    <div>
        <p>Result 3: {{double}}</p>
        <p>Clicking time: {{string}}</p>
        <button @click="getOrder">get order</button> <p> {{orderno}}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {  
    computed: {
        ...mapGetters({
        double: "getDoubleCounter",
        string: "stringCounter"
        }),
        orderno() {
        return this.$store.state.orderno
        },
    },
    methods: {
        getOrder() {
          this.$store.dispatch("getOrder")
        }
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