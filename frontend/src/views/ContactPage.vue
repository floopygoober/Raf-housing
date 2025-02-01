<template>
    <div class="contact-page">
        <h1>Contact us</h1>
        <p>
            Please enter your details in the form bellow. 
        </p>
        <FormComponent />
    </div>
</template>

<script>

import FormComponent from '../components/FormComponent.vue';
    export default {
        name: 'ContactPage',
        components: {
            FormComponent
        }
    }
</script>

<style scoped>
    .contact-page {
        text-align: center;
        margin-top: 20px;
    }
</style>