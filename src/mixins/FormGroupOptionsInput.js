import FormGroupInput from './FormGroupInput';

export default {
    mixins: [FormGroupInput],

    props: {
        options: {
            type: Object,
            required: false,
            default () {
                return {};
            },
        },
    },

    computed: {
        optgroups () {
            let keys = Object.keys(this.options);

            if (keys.length === 0) {
                return false;
            }

            return this.options[keys[0]] instanceof Object;
        },
    },
};
