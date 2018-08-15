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
                    spacing="vue-ads-w-1/5"
                    container-classes="vue-ads-p-2"
                    label-classes="vue-ads-font-bold"
                    input-classes=""
                >
                    <vue-ads-text
                        v-model="text"
                        name="name"
                    />
                    <vue-ads-password
                        v-model="password"
                        label="Password"
                        name="password"
                    />
                    <vue-ads-textarea
                        v-model="textarea"
                        label="Text"
                        name="name"
                    />
                    <vue-ads-checkbox
                        v-model="checkie"
                        name="checked"
                        label="Do you want to check this"
                    />
                    <vue-ads-select
                        :options="options"
                        v-model="select"
                        label="Title"
                        name="name"
                    />
                    <vue-ads-radio
                        :options="radioOptions"
                        v-model="radio"
                        label="Wat kies je"
                        name="radio"
                    />
                </vue-ads-form-group>
                <vue-ads-form-group
                    container-classes="vue-ads-p-2"
                >
                    <vue-ads-submit
                        :value="'Submit'"
                    />
                </vue-ads-form-group>
                <!--<hr class="vue-ads-mx-2 vue-ads-my-6">-->
                <!--<div class="vue-ads-flex vue-ads-py-3">-->
                <!--<label class="vue-ads-p-2 vue-ads-block vue-ads-w-1/3">-->
                <!--<div class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-mb-3">Company</div>-->
                <!--<input-->
                <!--class="vue-ads-p-2 vue-ads-border focus:vue-ads-shadow-form-focus vue-ads-outline-none vue-ads-rounded-sm vue-ads-text-grey-darkest vue-ads-text-sm vue-ads-w-full"-->
                <!--type="text"-->
                <!--&gt;-->
                <!--</label>-->
                <!--<label class="vue-ads-p-2 vue-ads-block vue-ads-w-2/3">-->
                <!--<div class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-mb-3">Address</div>-->
                <!--<input-->
                <!--class="vue-ads-p-2 vue-ads-border focus:vue-ads-shadow-form-focus vue-ads-outline-none vue-ads-rounded-sm vue-ads-text-grey-darkest vue-ads-text-sm vue-ads-w-full"-->
                <!--type="text"-->
                <!--&gt;-->
                <!--</label>-->
                <!--</div>-->
                <!--<div class="vue-ads-flex vue-ads-py-3">-->
                <!--<label class="vue-ads-p-2 vue-ads-block vue-ads-flex-1">-->
                <!--<div class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-mb-3">Country</div>-->
                <!--<select class="vue-ads-p-2 vue-ads-w-full vue-ads-outline-none vue-ads-rounded-sm vue-ads-text-grey-darkest vue-ads-text-sm vue-ads-border vue-ads-bg-white">-->
                <!--<option>Belgie</option>-->
                <!--<option>Nederland</option>-->
                <!--<option>Luxemburg</option>-->
                <!--</select>-->
                <!--</label>-->
                <!--<label class="vue-ads-p-2 vue-ads-block vue-ads-flex-1">-->
                <!--<div class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-mb-3">City</div>-->
                <!--<input-->
                <!--class="vue-ads-p-2 vue-ads-border focus:vue-ads-shadow-form-focus vue-ads-outline-none vue-ads-rounded-sm vue-ads-text-grey-darkest vue-ads-text-sm vue-ads-w-full"-->
                <!--type="text"-->
                <!--&gt;-->
                <!--</label>-->
                <!--<label class="vue-ads-p-2 vue-ads-block vue-ads-flex-1">-->
                <!--<div class="vue-ads-text-grey-dark vue-ads-text-sm vue-ads-mb-3">ZIP</div>-->
                <!--<input-->
                <!--class="vue-ads-p-2 vue-ads-border focus:vue-ads-shadow-form-focus vue-ads-outline-none vue-ads-rounded-sm vue-ads-text-grey-darkest vue-ads-text-sm vue-ads-w-full"-->
                <!--type="text"-->
                <!--&gt;-->
                <!--</label>-->
                <!--</div>-->
                <!--<hr class="vue-ads-border-t vue-ads-mx-2 vue-ads-my-6">-->
                <!--<div class="vue-ads-flex vue-ads-py-3">-->
                <!--<vue-ads-text-area/>-->
                <!--</div>-->
                <!--<hr class="vue-ads-border-t vue-ads-mx-2 vue-ads-my-6">-->
                <!--<div class="vue-ads-flex vue-ads-py-3">-->
                <!--<vue-ads-checkbox-->
                <!--title="I agree"-->
                <!--name="check"-->
                <!--/>-->
                <!--<vue-ads-checkbox-->
                <!--title="I don't agree"-->
                <!--name="check"-->
                <!--/>-->
                <!--</div>-->
                <!--<div class="vue-ads-flex vue-ads-py-3">-->
                <!--<input-->
                <!--type="button"-->
                <!--value="Bevestig"-->
                <!--class="vue-ads-m-2 vue-ads-py-3 vue-ads-px-12 vue-ads-rounded-sm vue-ads-bg-orange vue-ads-uppercase vue-ads-tracking-wide vue-ads-text-sm vue-ads-text-white vue-ads-font-bold vue-ads-cursor-pointer vue-ads-border-orange-dark vue-ads-outline-none"-->
                <!--&gt;-->
                <!--</div>-->
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
            select: 'b2',
            options: {
                'Group 1': {
                    a: 'arne',
                    b: 'hanne',
                    c: 'liese',
                },
                'Group 2': {
                    a2: 'bart',
                    b2: 'bert',
                    c2: 'blabla',
                },
            },
            radio: 'bla',
            radioOptions: {
                bla: 'test',
                blabla: 'testtest',
            },
        };
    },

    methods: {
        log ($event) {},
    },
};
</script>
