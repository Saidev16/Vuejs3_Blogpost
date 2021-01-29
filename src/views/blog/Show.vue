<template lang="">
    <div>
        <h1> Show Post </h1>
        <h1> {{ id }} - {{ slug }}</h1>
        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla numquam deserunt non veniam doloremque ea sed error nostrum quae aliquid! </p>
    </div>
    
</template>
<script>
export default {
    props : ['id','slug'],
    data() {
        return {
            id : this.$route.params.id ,
        }
    },
    
}
</script>
<style lang="">
    
</style>