<script>
export default {
    name: "VueAdsInputContainer",

    props: {
        wrap: {
            type: Number,
            required: true,
        },

        label: {
            type: [String, null],
            default: null,
        },

        spacing: {
            type: [String, null],
            default: null,
        },

        labelClasses: {
            type: String,
            default: '',
        },

        containerLabel: {
            type: Boolean,
            default: true,
        },
    },

    computed: {
        containerClasses () {
            return {
                'vue-ads-flex-row': this.spacing !== null,
                'vue-ads-flex-col': this.spacing === null,
                'vue-ads-flex vue-ads-flex-grow vue-ads-flex-no-shrink': true,
            };
        },

        containerStyles () {
            return {
                'flex-basis': this.wrap + '%',
            };
        },
    },

    render (createElement) {
        let childElements = [this.$slots.default];

        if (this.label !== null || this.spacing !== null) {
            childElements.unshift(createElement(
                'div',
                {
                    class: {
                        'vue-ads-text-grey-dark': true,
                        'vue-ads-text-sm': true,
                        'vue-ads-py-2': true,
                        [this.labelClasses]: true,
                        [this.spacing]: true,
                    },
                },
                this.label
            ));
        }

        return createElement(
            this.containerLabel ? 'label' : 'div',
            {
                class: this.containerClasses,
                style: this.containerStyles,
            },
            childElements
        );
    },
};
</script>
