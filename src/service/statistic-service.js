import MUtil from '../util/mm.js';
const _mm=new MUtil();
class Statistic{
    getHomeCount(){
        //home page data
        return _mm.request({
            url:'/manage/statistic/base_count.do'
        });
    }
   
    
}

export default Statistic;