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

        multiple: {
            type: Boolean,
            default: false,
        },
    },

    data () {
        return {
            flattenedOptions: [],
        };
    },

    watch: {
        options: {
            handler: 'optionsChanged',
            immediate: true,
        },
    },

    methods: {
        optionsChanged (options) {
            this.flattenedOptions = options
                .reduce((carry, option) => {
                    if (option.label) {
                        carry.push({
                            name: option.label,
                            optgroup: option.label,
                        });

                        option.options.forEach(childOption => {
                            carry.push({
                                ...childOption,
                                optgroup: option.label,
                                selected: this.multiple ?
                                    this.value.includes(childOption.value) :
                                    this.value === childOption.value,
                                hover: true,
                            });
                        });

                        return carry;
                    }

                    carry.push({
                        ...option,
                        selected: this.multiple ?
                            this.value.includes(option.value) :
                            this.value === option.value,
                        hover: false,
                    });

                    return carry;
                }, []);
        },
    },
};
