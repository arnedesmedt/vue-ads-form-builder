<template>
    <vue-ads-input-container
        :label="label"
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :label-classes="labelClasses"
    >
        <label
            class="vue-ads-p-2 vue-ads-block vue-ads-flex-1 vue-ads-flex vue-ads-cursor-pointer"
            @click="toggleChecked"
        />
        <input
            :name="name"
            :value="value"
            type="checkbox"
            class="vue-ads-hidden"
            @click.stop
        >
        <div
            :class="containerClasses"
            class="vue-ads-border vue-ads-p-1 vue-ads-mr-2 vue-ads-rounded-sm"
        >
            <i
                :class="iconClasses"
                class="fa fa-check vue-ads-text-white"
            />
        </div>
        <span
            v-if="title"
            class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-leading-loose"
        >
            {{ title }}
        </span>
    </vue-ads-input-container>
</template>

<script>
import FormGroupInput from "../mixins/FormGroupInput";

export default {
    name: "VueAdsStyledCheckbox",
    mixins: [FormGroupInput],
    props: {
        title: {
            type: String,
            required: false,
            default: '',
        },

        name: {
            type: String,
            required: false,
            default: '',
        },

        checked: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    data () {
        return {
            currentChecked: null,
        };
    },

    computed: {
        containerClasses () {
            return {
                'vue-ads-bg-orange': this.currentChecked,
                'vue-ads-border-orange-dark': this.currentChecked,
            };
        },

        iconClasses () {
            return {
                'vue-ads-invisible': !this.currentChecked,
            };
        },
    },

    watch: {
        checked: {
            handler: 'checkedChange',
            immediate: true,
        },
    },

    methods: {
        checkedChange (checked) {
            this.currentChecked = checked;
        },

        toggleChecked () {
            this.currentChecked = !this.currentChecked;
        },
    },
};
</script>

<style scoped>

</style>
