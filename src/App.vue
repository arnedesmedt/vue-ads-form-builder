<template>
    <div
        id="app"
        class="vue-ads-bg-grey-lighter vue-ads-w-full vue-ads-p-8"
    >
        <div class="vue-ads-bg-white vue-ads-rounded-sm vue-ads-shadow vue-ads-py-2 vue-ads-px-3">
            <vue-ads-form
                action="/arne"
                @submit.native.prevent="log"
            >
                <vue-ads-form-group
                    :wrap="wrap"
                    container-classes="vue-ads-p-2"
                    label-classes="vue-ads-font-bold"
                    input-classes=""
                >
                    <vue-ads-text
                        v-model="text"
                        name="name"
                        placeholder="test"
                    />
                    <!--<vue-ads-password-->
                        <!--v-model="password"-->
                        <!--label="Password"-->
                        <!--name="password"-->
                    <!--/>-->
                    <!--<vue-ads-textarea-->
                        <!--v-model="textarea"-->
                        <!--label="Text"-->
                        <!--name="name"-->
                    <!--/>-->
                    <!--<vue-ads-text-->
                        <!--v-model="text"-->
                        <!--name="name"-->
                        <!--placeholder="test"-->
                    <!--/>-->
                    <!--<vue-ads-password-->
                        <!--v-model="password"-->
                        <!--label="Password"-->
                        <!--name="password"-->
                    <!--/>-->
                    <!--<vue-ads-textarea-->
                        <!--v-model="textarea"-->
                        <!--label="Text"-->
                        <!--name="name"-->
                    <!--/>-->
                    <!--<vue-ads-checkbox-->
                        <!--v-model="checkie"-->
                        <!--name="checked"-->
                        <!--label="Do you want to check this"-->
                    <!--/>-->
                    <vue-ads-select
                        :options="options"
                        v-model="selectMultiple"
                        label="Title"
                        name="select"
                        :multiple="true"
                    />
                    <vue-ads-select
                        :options="options"
                        v-model="select"
                        label="Title"
                        name="select"
                        :multiple="false"
                    />
                </vue-ads-form-group>
                <vue-ads-form-group
                    container-classes="vue-ads-p-2"
                >
                    <vue-ads-submit
                        :value="'Submit'"
                    />
                </vue-ads-form-group>
            </vue-ads-form>
        </div>
    </div>
</template>

<script>
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './assets/css/tailwind.css';

import VueAdsText from "./components/Text";
import VueAdsPassword from "./components/Password";
import VueAdsCheckbox from "./components/Checkbox";
import VueAdsTextarea from "./components/Textarea";
import VueAdsForm from "./components/Form";
import VueAdsFormGroup from "./components/FormGroup";
import VueAdsSelect from "./components/Select";
import VueAdsRadio from "./components/Radio";
import VueAdsSubmit from "./components/Submit";

export default {
    name: 'App',
    components: {VueAdsTextarea, VueAdsCheckbox, VueAdsText, VueAdsForm, VueAdsFormGroup, VueAdsSelect, VueAdsRadio, VueAdsPassword, VueAdsSubmit},
    data () {
        return {
            wrap: 1,
            spacing: '50px',
            text: '',
            password: 'test',
            textarea: 'test',
            checkie: true,
            select: 'a',
            selectMultiple: ['a', 'b', 'c', 'a2', 'd2','b2', 'c2'],
            options: [
                {
                    label: 'Group 1',
                    options: [
                        {
                            value: 'a',
                            name: 'arne de smedt',
                        },
                        {
                            value: 'b',
                            name: 'hanne vandenhenden',
                        },
                        {
                            value: 'c',
                            name: 'liese de smedt',
                        },
                    ],
                },
                {
                    label: 'Group 2',
                    options: [
                        {
                            value: 'a2',
                            name: 'bart van de watere',
                        },
                        {
                            value: 'b2',
                            name: 'bert plysonier',
                        },
                        {
                            value: 'c2',
                            name: 'stefaan devriendt',
                        },
                        {
                            value: 'd2',
                            name: 'bart van de watere',
                        },
                        {
                            value: 'e2',
                            name: 'bert plysonier',
                        },
                        {
                            value: 'f2',
                            name: 'stefaan devriendt',
                        },
                    ],
                },
            ],
            radio: 'bla',
            radioOptions: [
                {
                    value: 'bla',
                    name: 'test',
                },
                {
                    value: 'blabla',
                    name: 'testtest',
                },
            ],
        };
    },

    methods: {
        log ($event) {
            let result = new FormData($event.target);
            console.log(result, $event.target, result.get('select'));
        },
    },
};
</script>
