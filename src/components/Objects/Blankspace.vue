<template>
    <div class="p-5">
        <span class="blankspace p-5">
            &nbsp;
        </span>
    </div>
</template>
<style lang="scss" scoped>
@use 'bootstrap/dist/css/bootstrap.min.css' as *;

.blankspace {
    display: block;
    height: 10rem;
    @media (max-width: 768px) {
        height: 30px;
    }
}
</style>