<script setup>
import { ref } from 'vue';

const inputType = ref("password")

const buttonText = ref("Show Password")

const showPassword = () => {
    if (inputType.value == "password") {
        inputType.value = "text"
        buttonText.value = "Hide Password"
    } else {
        inputType.value = "password"
        buttonText.value = "Show Password"
    }
}
</script>

<template>
    <div class="container text-center input-password">
        <h1 class="my-3">Exercise Input Password</h1>
        <input :type="inputType" name="" id="password" class="form-control">
        <div class="d-block">
            <span id="show-password" class="mt-2 btn btn-primary" @click="showPassword()">{{ buttonText }}</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
    #show-password:hover {
        cursor: pointer;
        user-select: none;
    }
</style>