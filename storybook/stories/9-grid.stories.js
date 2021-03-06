import { html } from './utils/editor';
import { withKnobs } from '@storybook/addon-knobs';
import { paddingDecorator } from './utils/decorators';

export default {
  title: 'vs-grid',
  decorators: [withKnobs, paddingDecorator]
};

export const allPropsInteractive = () => ({
  props: {},
  methods: {},
  template: html`
    <vs-row>
      <vs-col md="4">a</vs-col>
      <vs-col md="4">a</vs-col>
      <vs-col md="4">a</vs-col>
    </vs-row>
  `
});
