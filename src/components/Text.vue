<template>
    <vue-ads-input-container
        :label="label"
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :label-classes="labelClasses"
    >
        <input
            :name="name"
            :placeholder="placeholder"
            :class="inputClasses"
            :value="value"
            class="
                vue-ads-p-2
                vue-ads-border
                focus:vue-ads-shadow-form-focus
                vue-ads-outline-none
                vue-ads-rounded-sm
                vue-ads-text-grey-darkest
                vue-ads-text-sm
                vue-ads-flex-grow
            "
            type="text"
            @input="$emit('input', $event.target.value)"
        >
    </vue-ads-input-container>
</template>

<script>
import FormGroupTextInput from '../mixins/FormGroupTextInput';

export default {
    name: "VueAdsText",

    mixins: [FormGroupTextInput],
};
</script>
