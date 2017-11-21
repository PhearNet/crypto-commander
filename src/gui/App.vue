<template>
    <div class="crypto-commander">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <md-tabs>
            <md-tab id="tab-dashboard" md-label="Dashboard" md-icon="home" to="/dashboard"></md-tab>
            <md-tab id="tab-coins" md-label="Coins" md-icon="pages" to="/coins"></md-tab>
            <md-tab id="tab-posts" md-label="Posts" md-icon="pages"></md-tab>
            <md-tab id="tab-favorites" md-label="Favorites" md-icon="favorite"></md-tab>
        </md-tabs>
        <router-view class="view"></router-view>
    </div>
</template>
<style lang="scss">
    @import "~vue-material/dist/theme/engine";

    @include md-register-theme("default", (
            primary: md-get-palette-color(black, A200),
            accent: md-get-palette-color(lightgreen, A200),
            theme: dark
    ));

    @import "~vue-material/dist/theme/all";
</style>