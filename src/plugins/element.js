import Vue from 'vue'
import {
  Button,
  Container,
  CheckboxGroup,
  Checkbox,
  Scrollbar,
  Menu,
  MenuItem,
  Submenu,
  Card,
  Row,
  Tree,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Col,
  MessageBox,
  Message,
  Input
} from 'element-ui'

Vue.use(Row)
Vue.use(Button)
Vue.use(Container)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(Scrollbar)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Card)
Vue.use(Tree)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
