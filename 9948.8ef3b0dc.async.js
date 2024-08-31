"use strict";(self.webpackChunk_totalizer_xform=self.webpackChunk_totalizer_xform||[]).push([[9948],{44359:function(t,n,e){e.r(n);var _={organizationName:{c:"TextField",xs:12,label:"Organization Name"},member:{c:"ArrayList",xs:12,label:"Member",schema:{name:{c:"TextField",xs:6,label:"Name"},sex:{c:"Select",xs:6,label:"Sex",options:["male","female"]}}}};n.default=_},50708:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(44359);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},1405:function(t,n,e){e.r(n);var _={member:{c:"ArrayList",xs:12,label:"Member",schema:{type:{c:"Select",xs:6,label:"Language",options:["en","zh"]},name:{c:"TextField",xs:6,label:"Name",rule:function(o,m){var l=m.get,d=m.prefixPath,s=l("".concat(d,".type"),"value");return s==="en"&&!/^[A-Za-z]+$/.test(o)?"Please input in English.":s==="zh"&&!/^[\u4e00-\u9fa5]+$/.test(o)?"Please input in Chinese.":""}}}}};n.default=_},61214:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(1405);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},58730:function(t,n,e){e.r(n);var _={_title:{c:"Enh.FormTitle",xs:12,title:"Adventure starts here \u{1F680}",secondary:"Make your app management easy and fun!"},title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10},_rest:{c:"Enh.FormButton",xs:6,text:"Reset",size:"large",variant:"outlined",onClick:function(o){var m=o.reset;m()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",size:"large",onClick:function(o){var m=o.getFormValues,l=o.validate;l()?console.log(m()):console.log("VERIFICATION FAILED")}}};n.default=_},17127:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(58730);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},1650:function(t,n,e){e.r(n);var _={title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10}};n.default=_},42001:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(1650);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),d()(this,"visible",!1),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"openDrawer",value:function(){this.visible=!0}},{key:"closeDrawer",value:function(){this.visible=!1}},{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},79713:function(t,n,e){e.r(n);var _={title:{c:"TextField",xs:8,label:"Title"},type:{c:"Select",xs:4,label:"Select",options:[1,2,3]}};n.default=_},94019:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(79713);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},32476:function(t,n,e){e.r(n);var _={remember:{c:"Checked",xs:6,title:"Remember me"},_link:{c:"Enh.Link",xs:6,alignItems:"center",justifyContent:"end",title:"Forget Password?",href:"/"}};n.default=_},14195:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(32476);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},80788:function(t,n,e){e.r(n);var _={_rest:{c:"Enh.FormButton",xs:6,text:"Reset",alignItems:"center",justifyContent:"end",width:100,variant:"outlined",onClick:function(o){var m=o.reset;m()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",alignItems:"center",justifyContent:"start",width:100,onClick:function(o){var m=o.getFormValues,l=o.validate;l()?console.log(m()):console.log("VERIFICATION FAILED")}}};n.default=_},82972:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(80788);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},17969:function(t,n,e){e.r(n);var _={type:{c:"Select",xs:12,label:"\u662F\u5426\u5C55\u793A\u6807\u9898",default:2,options:[{value:1,label:"\u5C55\u793A\u6807\u9898"},{value:2,label:"\u9690\u85CF\u6807\u9898"}],onChange:function(o,m){var l=m.set;o===1&&l("title","visible",!0),o===2&&l("title","visible",!1)}},title:{c:"TextField",xs:12,label:"\u6807\u9898"}};n.default=_},87607:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(17969);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},75586:function(t,n,e){e.r(n);var _={information:{c:"ObjectBlock",xs:12,label:"Information",schema:{name:{c:"TextField",xs:6,label:"Name"},sex:{c:"Select",xs:6,label:"Sex",options:["male","female"]}}},contact:{c:"ObjectBlock",xs:12,label:"Contact",schema:{email:{c:"TextField",xs:12,label:"Email"},phone:{c:"TextField",xs:12,label:"Phone Number"}}}};n.default=_},99587:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(75586);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},60147:function(t,n,e){e.r(n);var _={title:{c:"TextField",xs:6,label:"Title"},type:{c:"Select",xs:6,label:"Type",options:[1,2,3]},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10}};n.default=_},75612:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(60147);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},59315:function(t,n,e){e.r(n);var _={_title:{c:"Enh.FormTitle",xs:12,title:"Adventure starts here \u{1F680}",secondary:"Make your app management easy and fun!"},title:{c:"TextField",xs:6,label:"Title",required:!0},type:{c:"Select",xs:6,label:"Type",options:[1,2,3],required:!0},des:{c:"TextField",xs:12,label:"Description",multiline:!0,minRows:5,maxRows:10},_rest:{c:"Enh.FormButton",xs:6,text:"Reset",size:"large",variant:"outlined",onClick:function(o){var m=o.reset;m()}},_submit:{c:"Enh.FormButton",xs:6,text:"Submit",size:"large",onClick:function(o){var m=o.getFormValues,l=o.validate;l()?console.log(m()):console.log("VERIFICATION FAILED")}}};n.default=_},32889:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(59315);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},20764:function(t,n,e){e.r(n);var _={username:{c:"TextField",xs:12,label:"Username",required:!0},password:{c:"TextField",xs:12,label:"Password",type:"password",placeholder:"Set the login password",helperText:"Passwords must be at least 6 characters.",required:!0,rule:function(o){return o.length<6?"Passwords must be at least 6 characters.":""}},confirmPassword:{c:"TextField",xs:12,label:"Confirm Password",type:"password",placeholder:"Enter the login password again",required:!0,rule:function(o,m){var l=m.get,d=l("password","value");return o!==d?"The two passwords do not match. Please enter them again!":""}}};n.default=_},26171:function(t,n,e){e.r(n);var _=e(12444),i=e.n(_),o=e(72004),m=e.n(o),l=e(9783),d=e.n(l),s=e(80202),u=e(68949),h=e(20764);(0,u.configure)({enforceActions:"never"});var b=function(){function r(){i()(this,r),d()(this,"myFormData",(0,s.$$merge)(h.default,{})),(0,u.makeAutoObservable)(this)}return m()(r,[{key:"$$set",value:function(a,f){(0,s.$$set)(this,a,f)}},{key:"$$get",value:function(a){return(0,s.$$get)(this,a)}}]),r}();n.default=new b},51324:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    path="myFormData"
    store={store}
    schema={schema}
    debug
  />
));
`},55834:function(t,n){n.Z=`const schema = {
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
`},534:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},44541:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    path="myFormData"
    store={store}
    schema={schema}
    debug
  />
));
`},69975:function(t,n){n.Z=`const schema = {
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
`},28263:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},86428:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
    debug
  />
));
`},81935:function(t,n){n.Z=`const schema = {
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
`},11457:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},18772:function(t,n){n.Z=`import { Button } from '@mui/material';
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
`},41085:function(t,n){n.Z=`const schema = {
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
`},54088:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},34890:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
  />
));
`},15728:function(t,n){n.Z=`const schema = {
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
`},50979:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},81578:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
  />
));
`},72010:function(t,n){n.Z=`const schema = {
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
`},51433:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},21175:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
  />
));
`},94803:function(t,n){n.Z=`const schema = {
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
`},71120:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},46696:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    path="myFormData"
    store={store}
    schema={schema}
    debug
  />
));
`},94183:function(t,n){n.Z=`const schema = {
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
`},52798:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},96995:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    path="myFormData"
    store={store}
    schema={schema}
    debug
  />
));
`},3391:function(t,n){n.Z=`const schema = {
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
`},5483:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},16870:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm
        store={store}
        path="myFormData"
        schema={schema}
      />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
});
`},59069:function(t,n){n.Z=`const schema = {
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
`},56591:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},96586:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm
        store={store}
        path="myFormData"
        schema={schema}
      />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
});
`},98075:function(t,n){n.Z=`const schema = {
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
`},77698:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
`},37026:function(t,n){n.Z=`import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <XBaseForm
    store={store}
    path="myFormData"
    schema={schema}
    debug
  />
));
`},76015:function(t,n){n.Z=`const schema = {
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
`},61189:function(t,n){n.Z=`import { $$get, $$merge, $$set } from '@totalizer/xform';
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
