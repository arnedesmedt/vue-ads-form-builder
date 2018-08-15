import FormGroupInput from './FormGroupInput';

export default {
    mixins: [FormGroupInput],

    props: {
        placeholder: {
            type: String,
            required: false,
            default: '',
        },
    },
};
