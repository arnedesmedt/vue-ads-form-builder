<template>
    <vue-ads-input-container
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :label="label"
        :label-classes="labelClasses"
        :container-label="false"
    >
        <div class="vue-ads-flex-grow">
            <label
                v-for="(option, key) in options"
                :key="key"
                :class="labelClasses"
                class="vue-ads-flex"
            >
                <input
                    :name="name"
                    :class="inputClasses"
                    :value="option.value"
                    :checked="value === option.value"
                    type="radio"
                    class="vue-ads-m-2"
                    @change="$emit('input', $event.target.value)"
                >
                <span
                    class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-flex vue-ads-flex-col vue-ads-justify-center vue-ads-font-normal"
                >
                    {{ option.name }}
                </span>
            </label>
        </div>
    </vue-ads-input-container>
</template>

<script>
import FormGroupOptionsInput from '../mixins/FormGroupOptionsInput';

export default {
    name: "VueAdsRadio",

    mixins: [FormGroupOptionsInput],
};
</script>
