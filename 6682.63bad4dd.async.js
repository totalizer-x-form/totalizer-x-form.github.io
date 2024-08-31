"use strict";(self.webpackChunk_totalizer_xform=self.webpackChunk_totalizer_xform||[]).push([[6682],{55032:function(t,n,e){e.r(n);var s={organizationName:{c:"TextField",xs:12,label:"Organization Name"},member:{c:"ArrayList",xs:12,label:"Member",schema:{name:{c:"TextField",xs:6,label:"Name"},sex:{c:"Select",xs:6,label:"Sex",options:["male","female"]}}}};n.default=s},30981:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(55032);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},83525:function(t,n,e){e.r(n);var s={member:{c:"ArrayList",xs:12,label:"Member",schema:{type:{c:"Select",xs:6,label:"Language",options:["en","zh"]},name:{c:"TextField",xs:6,label:"Name",rule:function(o,l){var m=l.get,d=l.prefixPath,_=m("".concat(d,".type"),"value");return _==="en"&&!/^[A-Za-z]+$/.test(o)?"Please input in English.":_==="zh"&&!/^[\u4e00-\u9fa5]+$/.test(o)?"Please input in Chinese.":""}}}}};n.default=s},76843:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(83525);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},89482:function(t,n,e){e.r(n);var s={_title:{c:"Enh.FormTitle",xs:12,title:"Adventure starts here \u{1F680}",secondary:"Make your app management easy and fun!"},title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10},_rest:{c:"Enh.FormButton",xs:6,text:"Reset",size:"large",variant:"outlined",onClick:function(o){var l=o.reset;l()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",size:"large",onClick:function(o){var l=o.getFormValues,m=o.validate;m()?console.log(l()):console.log("VERIFICATION FAILED")}}};n.default=s},67877:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(89482);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},86058:function(t,n,e){e.r(n);var s={title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10}};n.default=s},89300:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(86058);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),d()(this,"visible",!1),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"openDrawer",value:function(){this.visible=!0}},{key:"closeDrawer",value:function(){this.visible=!1}},{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},70328:function(t,n,e){e.r(n);var s={title:{c:"TextField",xs:8,label:"Title"},type:{c:"Select",xs:4,label:"Select",options:[1,2,3]}};n.default=s},33627:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(70328);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},40738:function(t,n,e){e.r(n);var s={remember:{c:"Checked",xs:6,title:"Remember me"},_link:{c:"Enh.Link",xs:6,alignItems:"center",justifyContent:"end",title:"Forget Password?",href:"/"}};n.default=s},95301:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(40738);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},80876:function(t,n,e){e.r(n);var s={_rest:{c:"Enh.FormButton",xs:6,text:"Reset",alignItems:"center",justifyContent:"end",width:100,variant:"outlined",onClick:function(o){var l=o.reset;l()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",alignItems:"center",justifyContent:"start",width:100,onClick:function(o){var l=o.getFormValues,m=o.validate;m()?console.log(l()):console.log("VERIFICATION FAILED")}}};n.default=s},87283:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(80876);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},62568:function(t,n,e){e.r(n);var s={type:{c:"Select",xs:12,label:"\u662F\u5426\u5C55\u793A\u6807\u9898",default:2,options:[{value:1,label:"\u5C55\u793A\u6807\u9898"},{value:2,label:"\u9690\u85CF\u6807\u9898"}],onChange:function(o,l){var m=l.set;o===1&&m("title","visible",!0),o===2&&m("title","visible",!1)}},title:{c:"TextField",xs:12,label:"\u6807\u9898"}};n.default=s},79619:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(62568);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},40412:function(t,n,e){e.r(n);var s={information:{c:"ObjectBlock",xs:12,label:"Information",schema:{name:{c:"TextField",xs:6,label:"Name"},sex:{c:"Select",xs:6,label:"Sex",options:["male","female"]}}},contact:{c:"ObjectBlock",xs:12,label:"Contact",schema:{email:{c:"TextField",xs:12,label:"Email"},phone:{c:"TextField",xs:12,label:"Phone Number"}}}};n.default=s},72691:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(40412);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},88211:function(t,n,e){e.r(n);var s={title:{c:"TextField",xs:6,label:"Title"},type:{c:"Select",xs:6,label:"Type",options:[1,2,3]},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10}};n.default=s},57871:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(88211);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},85650:function(t,n,e){e.r(n);var s={_title:{c:"Enh.FormTitle",xs:12,title:"Adventure starts here \u{1F680}",secondary:"Make your app management easy and fun!"},title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10},_rest:{c:"Enh.FormButton",xs:6,text:"Reset",size:"large",variant:"outlined",onClick:function(o){var l=o.reset;l()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",size:"large",onClick:function(o){var l=o.getFormValues,m=o.validate;m()?console.log(l()):console.log("VERIFICATION FAILED")}}};n.default=s},5165:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(85650);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},26610:function(t,n,e){e.r(n);var s={username:{c:"TextField",xs:12,label:"Username",required:!0},password:{c:"TextField",xs:12,label:"Password",type:"password",placeholder:"Set the login password",helperText:"Passwords must be at least 6 characters.",required:!0,rule:function(o){return o.length<6?"Passwords must be at least 6 characters.":""}},confirmPassword:{c:"TextField",xs:12,label:"Confirm Password",type:"password",placeholder:"Enter the login password again",required:!0,rule:function(o,l){var m=l.get,d=m("password","value");return o!==d?"The two passwords do not match. Please enter them again!":""}}};n.default=s},86578:function(t,n,e){e.r(n);var s=e(72589),i=e.n(s),o=e(82644),l=e.n(o),m=e(60183),d=e.n(m),_=e(59012),u=e(86148),h=e(26610);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,_.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return l()(r,[{key:"$$set",value:function(a,f){(0,_.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,_.$$get)(this,a)}}]),r}();n.default=new b},96350:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
`},21726:function(t,n){n.Z=`const schema = {
  organizationName: {
    c: 'TextField',
    xs: 12,
    label: 'Organization Name',
  },
  member: {
    c: 'ArrayList',
    xs: 12,
    label: 'Member',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: 'Sex',
        options: ['male', 'female'],
      },
    },
  },
};
export default schema;
`},17955:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},1897:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
`},23958:function(t,n){n.Z=`const schema = {
  member: {
    c: 'ArrayList',
    xs: 12,
    label: 'Member',
    schema: {
      type: {
        c: 'Select',
        xs: 6,
        label: 'Language',
        options: ['en', 'zh'],
      },
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
        rule: (value, { get, prefixPath }) => {
          const type = get(\`\${prefixPath}.type\`, 'value');
          if (type === 'en' && !/^[A-Za-z]+$/.test(value)) {
            return 'Please input in English.';
          }
          if (type === 'zh' && !/^[\\u4e00-\\u9fa5]+$/.test(value)) {
            return 'Please input in Chinese.';
          }
          return '';
        },
      },
    },
  },
};
export default schema;
`},57746:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},28572:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} debug />
));
`},34812:function(t,n){n.Z=`const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Adventure starts here \u{1F680}',
    secondary: 'Make your app management easy and fun!',
  },
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
    required: true,
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
    required: true,
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    size: 'large',
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _submit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Submit',
    size: 'large',
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
    },
  },
};
export default schema;
`},27575:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},84993:function(t,n){n.Z=`import { Button } from '@mui/material';
import { XDrawerForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import schema from './schema';
import store from './store';

export default observer(() => {
  const { visible } = store;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          store.openDrawer();
        }}
      >
        Open Form
      </Button>
      <XDrawerForm
        path="myFormData"
        store={store}
        schema={schema}
        open={visible}
        title="Drawer Form"
        onSave={() => {
          console.log(store.myFormData);
        }}
        onClose={() => {
          store.closeDrawer();
        }}
        debug
      />
    </>
  );
});
`},27980:function(t,n){n.Z=`const schema = {
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
    required: true,
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
    required: true,
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;
`},21453:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  visible = false;

  constructor() {
    makeAutoObservable(this);
  }

  openDrawer() {
    this.visible = true;
  }

  closeDrawer() {
    this.visible = false;
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},48760:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} />
));
`},15316:function(t,n){n.Z=`const schema = {
  title: {
    c: 'TextField',
    xs: 8,
    label: 'Title',
  },
  type: {
    c: 'Select',
    xs: 4,
    label: 'Select',
    options: [1, 2, 3],
  },
};
export default schema;
`},47793:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},21888:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} />
));
`},13228:function(t,n){n.Z=`const schema = {
  remember: {
    c: 'Checked',
    xs: 6,
    title: 'Remember me',
  },
  _link: {
    c: 'Enh.Link',
    xs: 6,
    alignItems: 'center',
    justifyContent: 'end',
    title: 'Forget Password?',
    href: '/',
  },
};
export default schema;
`},61044:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},83609:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} />
));
`},62044:function(t,n){n.Z=`const schema = {
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    alignItems: 'center',
    justifyContent: 'end',
    width: 100,
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _submit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Submit',
    alignItems: 'center',
    justifyContent: 'start',
    width: 100,
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
    },
  },
};
export default schema;
`},13857:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},4999:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
`},33421:function(t,n){n.Z=`const schema = {
  type: {
    c: 'Select',
    xs: 12,
    label: '\u662F\u5426\u5C55\u793A\u6807\u9898',
    default: 2,
    options: [
      { value: 1, label: '\u5C55\u793A\u6807\u9898' },
      { value: 2, label: '\u9690\u85CF\u6807\u9898' },
    ],
    onChange: (value, { set }) => {
      if (value === 1) {
        set('title', 'visible', true);
      }
      if (value === 2) {
        set('title', 'visible', false);
      }
    },
  },
  title: {
    c: 'TextField',
    xs: 12,
    label: '\u6807\u9898',
  },
};
export default schema;
`},43610:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},89354:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
`},8482:function(t,n){n.Z=`const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Information',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: 'Sex',
        options: ['male', 'female'],
      },
    },
  },
  contact: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Contact',
    schema: {
      email: {
        c: 'TextField',
        xs: 12,
        label: 'Email',
      },
      phone: {
        c: 'TextField',
        xs: 12,
        label: 'Phone Number',
      },
    },
  },
};
export default schema;
`},73820:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},68466:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm store={store} path="myFormData" schema={schema} />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
});
`},84946:function(t,n){n.Z=`const schema = {
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;
`},47936:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},91129:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm store={store} path="myFormData" schema={schema} />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
});
`},25268:function(t,n){n.Z=`const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Adventure starts here \u{1F680}',
    secondary: 'Make your app management easy and fun!',
  },
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
    required: true,
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
    required: true,
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    size: 'large',
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _submit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Submit',
    size: 'large',
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
    },
  },
};
export default schema;
`},15491:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`},63281:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} debug />
));
`},61012:function(t,n){n.Z=`const schema = {
  username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
    required: true,
  },
  password: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    type: 'password',
    placeholder: 'Set the login password',
    helperText: 'Passwords must be at least 6 characters.',
    required: true,
    rule: (value) => {
      if (value.length < 6) return 'Passwords must be at least 6 characters.';
      return '';
    },
  },
  confirmPassword: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Enter the login password again',
    required: true,
    rule: (value, { get }) => {
      const password = get('password', 'value');
      if (value !== password) return 'The two passwords do not match. Please enter them again!';
      return '';
    },
  },
};
export default schema;
`},60546:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
import { configure, makeAutoObservable } from 'mobx';
import schema from './schema';

configure({
  enforceActions: 'never',
});

class Store {
  /**
   * \u5B9A\u4E49 myFormData \u7528\u4E8E\u5B58\u50A8\u8868\u5355\u6570\u636E
   * $$merge \u65B9\u6CD5\u80FD\u591F\u786E\u4FDD\u4F20\u5165\u7684\u6570\u636E\u4E0Eschema\u4FDD\u6301\u4E00\u81F4
   */
  myFormData = $$merge(schema, {});

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * \u4F60\u9700\u8981\u5C06 $$set, $$get \u8FD9\u4E24\u4E2A\u65B9\u6CD5\u6309\u7167\u4EE5\u4E0B\u793A\u4F8B\u7F6E\u4E8E\u4F60\u7684 store \u4E2D
   * \u4EE5\u4FBF\u8868\u5355\u7EC4\u4EF6\u4E0E store \u8FDB\u884C\u6570\u636E\u901A\u4FE1
   */
  $$set(path, value) {
    $$set(this, path, value);
  }

  $$get(path) {
    return $$get(this, path);
  }
}

export default new Store();
`}}]);
