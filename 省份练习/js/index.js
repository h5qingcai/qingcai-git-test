require(["config"],function(){
      require(["jquery"],function($){
$(function(){
    
    //加载省份
    function loadProvince(){
    	const url1 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=1",
    	url2 = "http://route.showapi.com/1149-1?showapi_appid=29550&showapi_sign=1b9802a551774e3480cb844e18f0ceef&level=1&page=2";
      //读取两页的数
      $.when($.ajax(url1,{dataType:"json"}),$.ajax(url2,{dataType:"json"}))
      .then(function(data1,data2){
      	let html = "<option value='-1'>请选择省份</option>"
        data1[0].showapi_res_body.data.concat(data2[0].showapi_res_body.data)
        .forEach(function(curr){
          html += `<option value="${curr.id}">${curr.areaName}</option>`;
        });


        $("#Province").html(html);

     console.log("sss")





        })
        }
    loadProvince();
        })

      });
});