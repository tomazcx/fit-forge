import './bootstrap';
import {createApp} from "vue"
import CommerceHeader from "../components/organisms/CommerceHeader.vue"

const app = createApp()
app.component('commerce-header', CommerceHeader)

app.mount("#app")
