<template>
    <vue-ads-input-container
        :label="label"
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :label-classes="labelClasses"
    >
        <select
            :name="name"
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
                vue-ads-bg-white
            "
            @input="$emit('input', $event.target.value)"
        >
            <template v-if="optgroups">
                <optgroup
                    v-for="(optgroup, label) in options"
                    :key="label"
                    :label="label"
                >
                    <option
                        v-for="(option, value) in optgroup"
                        :value="value"
                        :key="value"
                    >
                        {{ option }}
                    </option>
                </optgroup>
            </template>
            <template v-else>
                <option
                    v-for="(option, value) in options"
                    :value="value"
                    :key="value"
                >
                    {{ option }}
                </option>
            </template>
        </select>
    </vue-ads-input-container>
</template>

<script>
import FormGroupOptionsInput from '../mixins/FormGroupOptionsInput';

export default {
    name: "VueAdsSelect",

    mixins: [FormGroupOptionsInput],
};
</script>
