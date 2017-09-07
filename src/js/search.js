$('#pageTool').Paging({pagesize:10,count:100,callback:function(page,size,count){
	console.log(arguments)
	alert('当前第 ' +page +'页,每页 '+size+'条,总页数：'+count+'页')
}});