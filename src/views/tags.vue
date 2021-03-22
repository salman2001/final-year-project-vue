<template>
    <h1>
        this is a tags page
    </h1>

    <div>
        Below you will find all the tags and their description
    </div>
    <ul>
        <li><router-link color="black" v-bind:to="{ name: 'div' }"> DIV</router-link>:  tag is used to divide sentences</li>
        <li><router-link color="black" v-bind:to="{ name: 'headertag' }">Header</router-link>:  tag is used to head sentences</li>

    </ul>
</template>
<script>


export default ({
    setup() {
        
    },
})
</script>

<style scoped>

</style>