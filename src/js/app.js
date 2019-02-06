import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';
import '../scss/style.scss';
import hello from './hello';

console.log('webpack');
hello();
