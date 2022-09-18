import{_ as t,o as d,c as e,a as r}from"./app.54807345.js";const o={},a=r('<h2 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h2><h5 id="form-attributes" tabindex="-1"><a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a> Form Attributes</h5><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model/modelValue</td><td>\u53CC\u5411\u7ED1\u5B9A\u7684\u8868\u5355\u6570\u636E, \u540C el-form \u7684 model</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>formItems</td><td>\u8868\u5355 item \u914D\u7F6E\u9879\uFF0C\u5177\u4F53\u914D\u7F6E\u770B\u4E0B\u65B9 form-item attributes</td><td>array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>colLayout</td><td>el-form-item \u7684\u5E03\u5C40\u914D\u7F6E\uFF0C\u5177\u4F53\u914D\u7F6E\u67E5\u770B el-col</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>defaultFormItemProps</td><td>el-form-item \u7684\u9ED8\u8BA4 props \uFF0C\u4F1A\u88AB formItems \u4E2D\u7684\u914D\u7F6E\u8986\u76D6</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>rowAttrs</td><td>el-row \u7684 props</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>defaultInputAttrs</td><td>el-form-item \u4E0B\u7684 \u6240\u6709input select \u7B49\u8868\u5355\u5143\u7D20\u7684\u516C\u5171 props</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>selectOptionMap</td><td>el-select \u7684 options \u914D\u7F6E \u901A\u8FC7formItem \u4F20\u5165\u76F8\u5E94 key \u53D6\u503C\uFF0C\u901A\u5E38\u662F\u5F53 select \u7684\u503C\u662F\u5F02\u6B65\u83B7\u53D6\u65F6\u4F7F\u7528\uFF0C</td><td>object</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><p><strong>\u5176\u4F59 attrs \u90FD\u4F1A\u5F53\u4F5C props \u4F20\u7ED9 el-form</strong></p><h5 id="form-methods" tabindex="-1"><a class="header-anchor" href="#form-methods" aria-hidden="true">#</a> Form methods</h5><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>validate</td><td>\u540C el-form</td><td>\u2014</td></tr><tr><td>validateField</td><td>\u540C el-form</td><td>\u2014</td></tr><tr><td>scrollToField</td><td>\u540C el-form</td><td>\u2014</td></tr><tr><td>resetFields</td><td>\u540C el-form</td><td>\u2014</td></tr><tr><td>clearValidate</td><td>\u540C el-form</td><td>\u2014</td></tr></tbody></table><p>\u5176\u4F59 el-form \u65B9\u6CD5\u90FD\u53EF\u4EE5\u901A\u8FC7\u7EC4\u4EF6\u5F15\u7528\u8C03\u53D6</p><h5 id="form-item-attributes" tabindex="-1"><a class="header-anchor" href="#form-item-attributes" aria-hidden="true">#</a> Form Item Attributes</h5><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>-</td><td>el-form-item \u7684 props</td><td>-</td><td>\u2014</td><td>\u2014</td></tr><tr><td>renderLabel</td><td>el-form-item \u4E2D label \u503C\uFF0C\u5982\u679C\u8BE5\u503C\u662F string \u65F6\uFF0C\u5C06\u4F5C\u4E3A\u63D2\u69FD\u540D</td><td>function string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>isHidden</td><td>\u662F\u5426\u9690\u85CF\u8BE5\u9879</td><td>boolean</td><td>\u2014</td><td>\u2014</td></tr><tr><td>layout</td><td>\u8BE5\u9879\u7684 el-col props</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inputAttrs</td><td>el-form-item \u7BA1\u7406\u4E0B\u7684\u8868\u5355\u5143\u7D20 props</td><td></td><td></td><td></td></tr><tr><td>type</td><td>el-form-item \u7BA1\u7406\u4E0B\u7684\u8868\u5355\u5143\u7D20\u7C7B\u578B\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u8DDFvue \u7EC4\u4EF6\uFF0C\u5982\u679C\u662F\u5B57\u7B26\u4E32\uFF0C\u4F1A\u5148\u5339\u914D select,input \u4F7F\u7528el-select el-input,\u6CA1\u6709\u5339\u914D\u4E0A\u518D\u7528 resolveComponent \u5339\u914D\u5168\u5C40\u6CE8\u518C\u7684\u7EC4\u4EF6</td><td>select,input</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inputChildrenComponent</td><td>\u4E3A el-select \u8FD9\u79CD\u8FD8\u6709\u5B50\u5143\u7D20\u7684\u8868\u5355\u7EC4\u4EF6\u51C6\u5907\uFF0Coptions \u4F1A\u6839\u636E\u8BE5\u9879\u521B\u5EFA</td><td>vueComponent</td><td>\u2014</td><td>\u2014</td></tr><tr><td>options</td><td>\u4E3A el-select \u8FD9\u79CD\u8FD8\u6709\u5B50\u5143\u7D20\u7684\u8868\u5355\u7EC4\u4EF6\u51C6\u5907\uFF0C\u4F1A\u6839\u636E\u8BE5\u9879\u521B\u5EFA\u5B50\u5143\u7D20</td><td>Array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>slotName</td><td>el-form-item \u4E0B\u8868\u5355\u5143\u7D20\u7684\u63D2\u69FD\u540D</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>inputOptions</td><td>el-form-item \u4E0B\u8868\u5355\u5143\u7D20\u7684\u914D\u7F6E\u9879</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>el-form-item \u4E0B\u8868\u5355\u5143\u7D20\u7684 placeholder</td><td>string</td><td>\u2014</td><td>\u2014</td></tr></tbody></table><h5 id="useform-\u8FD4\u56DE\u503C" tabindex="-1"><a class="header-anchor" href="#useform-\u8FD4\u56DE\u503C" aria-hidden="true">#</a> useForm \u8FD4\u56DE\u503C</h5><p>\u63A5\u6536\u4E00\u4E2A from \u521D\u59CB\u503C\u7684\u914D\u7F6E\u5BF9\u8C61 \u8FD4\u56DE</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>formData</td><td>\u54CD\u5E94\u5F0Fform data\u5BF9\u8C61</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>formRef</td><td>\u7EC4\u4EF6\u5F15\u7528\uFF0C\u9700\u6302\u8F7D\u5230\u7EC4\u4EF6 ref</td><td>object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validate</td><td>\u540C el-form</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>validateField</td><td>\u540C el-form</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>scrollToField</td><td>\u540C el-form</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>clearValidate</td><td>\u540C el-form</td><td>function</td><td>\u2014</td><td>\u2014</td></tr><tr><td>resetFields</td><td>\u540C el-form</td><td>function</td><td>\u2014</td><td>\u2014se</td></tr></tbody></table>',12),l=[a];function i(h,m){return d(),e("div",null,l)}var n=t(o,[["render",i],["__file","form.html.vue"]]);export{n as default};