/**
 * Created by æ…√Œ on 2017/3/19.
 */
for(var i=0;i<5;i++){
   setTimeout((function(i){
       console.log(i);
   })(i),i*1000);
}