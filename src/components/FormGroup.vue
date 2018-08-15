<template>
    <div class="vue-ads-flex vue-ads-flex-wrap">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "VueAdsFormGroup",

    props: {
        wrap: {
            type: Number,
            default: 0,
            validator: (wrap) => {
                return wrap >= 0;
            },
        },

        spacing: {
            type: [String, null],
            default: null,
        },

        containerClasses: {
            type: String,
            required: false,
            default: '',
        },

        labelClasses: {
            type: String,
            required: false,
            default: '',
        },

        inputClasses: {
            type: String,
            required: false,
            default: '',
        },
    },

    watch: {
        wrap: {
            handler: 'wrapChanged',
        },

        spacing: {
            handler: 'spacingChanged',
        },

        containerClasses: {
            handler: 'containerClassesChanged',
        },

        labelClasses: {
            handler: 'labelClassesChanged',
        },

        inputClasses: {
            handler: 'inputClassesChanged',
        },
    },

    mounted () {
        this.wrapChanged(this.wrap);
        this.spacingChanged(this.spacing);
        this.containerClassesChanged(this.containerClasses);
        this.labelClassesChanged(this.labelClasses);
        this.inputClassesChanged(this.inputClasses);
    },

    methods: {
        wrapChanged (wrap) {
            this.$children.forEach(child => {
                child.$data.wrap = 100 / wrap;
            });
        },

        spacingChanged (spacing) {
            this.$children.forEach(child => {
                child.$data.spacing = spacing;
            });
        },

        containerClassesChanged (containerClasses) {
            this.$children.forEach(child => {
                child.$data.containerClasses = containerClasses;
            });
        },

        labelClassesChanged (labelClasses) {
            this.$children.forEach(child => {
                child.$data.labelClasses = labelClasses;
            });
        },

        inputClassesChanged (inputClasses) {
            this.$children.forEach(child => {
                child.$data.inputClasses = inputClasses;
            });
        },
    },
};
</script>
