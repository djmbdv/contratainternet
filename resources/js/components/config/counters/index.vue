<template>
    <div class="d-flex flex-column mt-4">
        <div class="counters-container">
            <counter class="px-2 my-2 col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="(counter,k) in counters" :key="k" :counter="counter">
            </counter>
        </div>
    </div>
</template>

<script>
export default {
    props:["counters"],

    mounted(){
        console.log("contadores",this.counters)
    }
}
</script>