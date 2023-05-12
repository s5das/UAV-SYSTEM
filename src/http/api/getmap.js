import axios from "axios"

export default () => {
return axios({
    method:'GET',
    url:'https://geo.datav.aliyun.com/areas_v3/bound/610000_full.json'
})
}