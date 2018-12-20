import FormGroupInput from './FormGroupInput';

export default {
    mixins: [FormGroupInput],

    props: {
        options: {
            type: Array,
            required: false,
            default () {
                return [];
            },
        },
    },

    computed: {
        optgroups () {
            return this.options.length !== 0 && this.options[0].label !== undefined;
        },
    },
};
