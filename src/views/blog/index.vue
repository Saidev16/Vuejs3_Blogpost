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
    <div class="row">
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
                {
                    id : '1',
                    title : 'Learn Angular',
                    slug : 'Learn-angular',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
                {
                    id : '2',
                    title : 'Learn React',
                    slug : 'Learn-React',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
                {
                    id : '3',
                    title : 'Learn Vuejs3',
                    slug : 'Learn-Vuejs3',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
                {
                    id : '4',
                    title : 'Learn Laravel',
                    slug : 'Learn-Laravel',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
                {
                    id : '5',
                    title : 'Learn Javascript',
                    slug : 'Learn-Javascript',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
                {
                    id : '6',
                    title : 'Learn Php',
                    slug : 'Learn-php',
                    content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a.'
                },
            ]
        }
    },
    
}
</script>
<style lang="">
    
</style>