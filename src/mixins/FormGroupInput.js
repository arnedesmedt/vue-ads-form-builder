import VueAdsInputContainer from '../components/InputContainer';

export default {
    components: {
        VueAdsInputContainer,
    },

    props: {
        label: {
            type: [String, null],
            required: false,
            default: null,
        },

        name: {
            type: String,
            required: false,
            default: '',
        },

        value: {
            default: null,
        },
    },

    data () {
        return {
            wrap: 100,
            spacing: null,
            containerClasses: '',
            labelClasses: '',
            inputClasses: '',
        };
    },
};
