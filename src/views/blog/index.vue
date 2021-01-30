<template lang="">
    <div class="jumbotron">
            <h1 class="display-3">Hello, world!</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>    
    </div>
    <div class="row" v-if="posts.length">
        <div class="col-md-6" v-for=" post in posts " :key='post.id'>
            <h1> <router-link :to="{name:'post-show' , params:{id: post.id , slug:post.slug}}">{{post.title}}</router-link> </h1>
            <p class="lead"> {{ post.content }} </p>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
           posts : [

           ]
        }
    },
    mounted() {
        fetch('http://localhost:5000/posts')
        .then( res => res.json() )
        .then( data => this.posts = data )
        .catch( err => console.log(err) )
    },
    
}
</script>
<style lang="">
    
</style>