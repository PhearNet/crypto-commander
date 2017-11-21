<template>
    <div class="coin-search">
        <md-toolbar class="md-primary" md-elevation="1">
            <h3 class="md-title" style="flex: 1">Coins</h3>

            <div class="md-toolbar-section-end">
                <md-field>
                <md-input
                        placeholder="Search by Coin, Algo, Proof..."
                        v-model="search"
                        @change="searchOnTable"
                />
                </md-field>
                <md-button class="md-primary">Create</md-button>
                <md-button class="md-primary" @click="newUser">Submit New Coin</md-button>
            </div>
        </md-toolbar>
        <md-progress-bar class="loading-bar" v-if="$pouch.loading.coins" md-mode="indeterminate"></md-progress-bar>
        <md-table v-model="searched" md-sort="Name" md-sort-order="asc" md-fixed-header>
            <md-table-empty-state
                    md-label="Refine your search"
                    :md-description="`Try a different search term.`">
                <md-button class="md-primary md-raised" @click="newUser">Submit New Coin</md-button>
            </md-table-empty-state>

            <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell>
                    <md-avatar>
                        <img v-if="item.ImageUrl" v-bind:src="item.meta.BaseImageUrl+item.ImageUrl">
                        <img v-else
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Cryptocompare_logo.png/128px-Cryptocompare_logo.png"/>
                    </md-avatar>
                </md-table-cell>
                <md-table-cell md-label="Symbol" md-sort-by="_id">{{ item._id }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="Name">{{ item.CoinName }}</md-table-cell>
                <md-table-cell md-label="Algorithm" md-sort-by="Algorithm">{{ item.Algorithm }}</md-table-cell>
                <md-table-cell md-label="Proof Type" md-sort-by="ProofType">{{ item.ProofType }}</md-table-cell>
            </md-table-row>
        </md-table>

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
<style>
    .md-table{
        overflow:hidden;
    }
    .loading-bar{
        left: 0;
        bottom: 0;
        width: 100%;
        height: 5vh !important;
        position: fixed !important;
    }
</style>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    };

    const searchByName = (items, term) => {
        if (term) {
            return items.filter(item =>
                toLower(item.CoinName).includes(toLower(term)) ||
                toLower(item.Algorithm).includes(toLower(term)) ||
                toLower(item.ProofType).includes(toLower(term))
            )
        } else items = [];

        return items
    };
    export default {
        name: 'Coins',
        data: () => ({
            search: null,
            searched: [],
            resultsPerPage: 25,
            currentPage: 1
        }),
        pouch: {
            coins: {}
        },
        created: function () {
            this.$pouch.sync('coins', 'http://localhost:5984/coins');
        },
        methods: {
            newUser () {
                window.alert('Noop')
            },
            searchOnTable () {
                this.searched = searchByName(this.coins, this.search);
            }
        }
    }
</script>