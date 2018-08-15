<template>
    <vue-ads-input-container
        :wrap="wrap"
        :class="containerClasses"
        :container-label="false"
    >
        <div>
            <input
                :value="value"
                :class="inputClasses"
                type="submit"
                class="vue-ads-bg-orange vue-ads-text-white vue-ads-rounded-sm vue-ads-p-2 vue-ads-font-bold vue-ads-cursor-pointer vue-ads-border-orange-dark vue-ads-outline-none"
            >
        </div>
    </vue-ads-input-container>
</template>

<script>
import FormGroupInput from '../mixins/FormGroupInput';

export default {
    name: "VueAdsSubmit",

    mixins: [FormGroupInput],
};
</script>
