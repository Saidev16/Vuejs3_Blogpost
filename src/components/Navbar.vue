<template lang="">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
                <router-link class="nav-link" :to="{name : 'Home'}">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name : 'About'}">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{name : 'Blog'}">Blog</router-link>
            </li>
            </ul>

        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>