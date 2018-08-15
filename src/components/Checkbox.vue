<template>
    <vue-ads-input-container
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :container-label="false"
    >
        <div class="vue-ads-flex">
            <input
                :name="name"
                :class="inputClasses"
                :checked="value"
                type="checkbox"
                class="vue-ads-m-2"
                @change="$emit('input', $event.target.checked)"
            >
            <span
                v-if="label"
                :class="labelClasses"
                class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-leading-loose"
            >
                {{ label }}
            </span>
        </div>
    </vue-ads-input-container>
</template>

<script>
import FormGroupInput from '../mixins/FormGroupInput';

export default {
    name: "VueAdsCheckbox",

    mixins: [FormGroupInput],
};
</script>
