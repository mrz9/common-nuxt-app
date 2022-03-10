import Vue from 'vue';
import i18n from '@/locales';

export default function({ app }) {
    app.i18n = i18n;
    Vue.config.productionTip = false;
}
