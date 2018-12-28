<template>
    <vue-ads-input-container
        :label="label"
        :wrap="wrap"
        :spacing="spacing"
        :class="containerClasses"
        :label-classes="labelClasses"
    >
        <div
            class="
                vue-ads-flex
                vue-ads-flex-col
                vue-ads-flex-grow
            "
        >
            <input
                v-if="name"
                :name="name"
                v-model="value"
                type="hidden"
            >
            <div
                ref="select"
                :tabindex="tabIndex"
                :style="inputStyle"
                class="
                    vue-ads-w-full
                    vue-ads-border
                    vue-ads-rounded-sm
                    vue-ads-px-1
                    vue-ads-text-grey-darkest
                    vue-ads-text-sm
                    focus:vue-ads-shadow-form-focus
                    vue-ads-flex
                "
                @mousedown.prevent.stop="toggleActive"
                @focusin.prevent.stop="activate"
                @focusout.prevent.stop="deactivate"
            >
                <div class="vue-ads-flex-grow vue-ads-flex">
                    <div class="vue-ads-flex vue-ads-flex-wrap vue-ads-pb-1">
                        <div
                            v-if="!multiple && selectedOptions"
                            class="vue-ads-p-1
                                vue-ads-mt-1
                                vue-ads-mr-1
                            "
                        >
                            {{ selectedOptions.name }}
                        </div>
                        <template
                            v-for="(option, key) in selectedOptions"
                            v-else>
                            <div
                                v-if="multiple"
                                :key="key"
                                class="vue-ads-justify-center
                                vue-ads-rounded-sm
                                vue-ads-bg-orange
                                vue-ads-text-white
                                vue-ads-flex
                                vue-ads-mt-1
                                vue-ads-mr-1
                            ">
                                <div class="vue-ads-p-1">{{ option.name }}</div>
                                <div
                                    class="vue-ads-p-1 vue-ads-cursor-pointer hover:vue-ads-bg-orange-dark vue-ads-rounded-sm"
                                    @mousedown.prevent="selectOption(option)"
                                >
                                    x
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="vue-ads-flex vue-ads-flex-col vue-ads-justify-center vue-ads-px-1">
                    <i class="fa fa-caret-down vue-ads-text-grey-darkest"/>
                </div>
            </div>
            <div
                class="
                    vue-ads-relative
                    vue-ads-z-50
                "
            >
                <div
                    v-if="activated"
                    :style="optionBoxStyle"
                    class="
                        vue-ads-rounded-sm
                        vue-ads-border
                        vue-ads-text-grey-darkest
                        vue-ads-absolute
                        vue-ads-bg-white
                        vue-ads-w-full
                        vue-ads-text-sm
                        vue-ads-overflow-hidden
                    "
                >
                    <div
                        v-if="searchable"
                    >
                        <input
                            ref="search"
                            v-model="search"
                            type="text"
                            tabindex="-1"
                            class="
                                    vue-ads-search
                                    vue-ads-w-full
                                    vue-ads-p-2
                                    focus:vue-ads-outline-none
                                "
                            placeholder="search..."
                            @focusout.prevent.stop="deactivate"
                        >
                    </div>
                    <vue-perfect-scrollbar
                        :style="scrollStyle"
                    >
                        <div
                            v-for="(option, key) in filteredOptions"
                            :key="key"
                            :class="optionClasses(option)"
                            class="
                                vue-ads-py-2
                                vue-ads-px-3
                            "
                            @mousedown.prevent.stop="selectOption(option)"
                        >
                            {{ option.name }}
                        </div>
                    </vue-perfect-scrollbar>
                </div>
            </div>
        </div>
    </vue-ads-input-container>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import FormGroupOptionsInput from '../mixins/FormGroupOptionsInput';

// todo up and down with arrow keys => look for direction
// todo deactivate non searchable selects on blur

export default {
    name: "VueAdsSelect",

    components: {
        VuePerfectScrollbar,
    },

    mixins: [FormGroupOptionsInput],

    props: {
        searchable: {
            type: Boolean,
            default: true,
        },

        maxOptionBoxHeight: {
            type: String,
            default: '300px',
        },
    },

    data () {
        return {
            activated: false,
            showTop: false,
            search: '',
            selectHeight: 0,
            hoverOption: -1,
        };
    },

    computed: {
        tabIndex () {
            return this.activated ? -1 : 0;
        },

        inputStyle () {
            return {
                'min-height': '34px',
            };
        },

        filteredOptions () {
            let regex = new RegExp(this.search, 'i');

            let filteredOptions = this.flattenedOptions
                .filter(
                    option => {
                        return !option.value || regex.test(option.name);
                    }
                );

            return filteredOptions
                .filter(
                    option => {
                        return option.value ||
                            filteredOptions.filter(
                                checkOption => checkOption.optgroup === option.optgroup
                            ).length > 1;
                    }
                );
        },

        selectedOptions () {
            let selectedOptions = this.flattenedOptions.filter(option => option.selected);

            if (!this.multiple) {
                return selectedOptions.length > 0 ? selectedOptions[0] : null;
            }

            return selectedOptions;
        },

        optionBoxStyle () {
            let styles = {};

            if (this.showTop) {
                styles.bottom = `${this.selectHeight}px`;
                styles['margin-bottom'] = '2px';
            } else {
                styles['margin-top'] = '2px';
            }

            return styles;
        },

        scrollStyle () {
            return {
                'max-height': this.maxOptionBoxHeight,
            };
        },
    },

    watch: {
        activated: {
            handler: 'activatedChanged',
        },
    },

    mounted () {
        this.updateSelectHeight();
    },

    methods: {
        async toggleActive ($event) {
            console.log('toggle', $event.type, $event.target);
            this.activated = !this.activated;
        },

        activate ($event) {
            console.log('activate');
            console.log($event.type);
            console.log($event.target);
            this.activated = true;
        },

        deactivate ($event) {
            if(
                (this.searchable && $event.target.tagName === 'INPUT') ||
                (!this.searchable && $event.target.tagName === 'DIV')
            ) {
                console.log('deactivate');
                console.log($event.type);
                this.activated = false;
            }
        },

        activatedChanged (activated) {
            if (activated) {
                let windowHeight = window.document.documentElement.clientHeight;
                let elementTop = this.$el.getBoundingClientRect().top;

                this.showTop = elementTop > (windowHeight / 2);

                this.$nextTick(() => {
                    this.$el.querySelector('.ps__scrollbar-y-rail').children[0].setAttribute('tabindex', -1);

                    if (this.searchable) {
                        this.$refs.search.focus();
                    }
                });
            }
        },

        selectOption (option) {
            if (!option.value) {
                return;
            }

            if (!this.multiple) {
                this.flattenedOptions.forEach(option => option.selected = false);
                this.activated = false;
            }

            option.selected = !option.selected;

            if (!this.multiple) {
                this.$emit('input', this.selectedOptions.value);
            } else {
                this.$emit('input', this.selectedOptions.map(option => option.value));
            }

            this.$nextTick(() => {
                this.updateSelectHeight();
            });
        },

        updateSelectHeight () {
            this.selectHeight = this.$refs.select.getBoundingClientRect().height;
        },

        optionClasses (option) {
            return {
                'vue-ads-font-bold': !option.value && option.optgroup,
                'vue-ads-pl-6': option.value && option.optgroup,
                'vue-ads-bg-grey-lightest': !option.value && option.optgroup,
                'hover:vue-ads-bg-orange-lighter': option.value,
                'vue-ads-cursor-pointer': option.value,
                'vue-ads-bg-orange-lightest': option.selected,
            };
        },

        up () {
            this.hoverOption--;
        },

        down () {
            this.hoverOption++;
        },
    },
};
</script>

<style>
.ps__scrollbar-y-rail {
    background-color: transparent !important;
}
</style>
