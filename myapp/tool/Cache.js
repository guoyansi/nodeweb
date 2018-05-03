var CacheValue=null;
function Cache(value) {
    if(CacheValue==null&&value){
        CacheValue=value
    }
    this.getCache=function () {
        return CacheValue;
    }
}
module.exports=Cache;