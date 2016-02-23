 




// Переключатель видов товаров

$('#block_ithem_grid').show();
$('#block_ithem_list').hide();


$('#grid_icon').click(function() {
	$('#block_ithem_grid').show();
	$('#block_ithem_list').hide();


	//изменение иконки	
	$('#grid_ic').attr("src","../images/home/grid_active.png");
	$('#list_ic').attr("src","../images/home/list.png");

	$.cookie('select_style','grid');

});



$('#list_icon').click(function() {
	$('#block_ithem_grid').hide();
	$('#block_ithem_list').show();


	$('#list_ic').attr("src","../images/home/list_active.png");
	$('#grid_ic').attr("src","../images/home/grid.png");

	$.cookie('select_style','list');



});





  	///А тут куки в отличии от MAIN.JS работают
  	if ($.cookie('select_style') == 'grid' ) {
  		$('#block_ithem_grid').show();
  		$('#block_ithem_list').hide();

  		$('#grid_ic').attr("src","../images/home/grid_active.png");
  		$('#list_ic').attr("src","../images/home/list.png");
  	}
  	else {
  		$('#block_ithem_grid').hide();
  		$('#block_ithem_list').show();


  		$('#list_ic').attr("src","../images/home/list_active.png");
  		$('#grid_ic').attr("src","../images/home/grid.png");

  	} 












//Сортировка по разным свойсвам

$('#select_sort, #sorting_list').mouseover(function() {

	$('#sorting_list').slideDown(200);
	
});
$('#sorting_list').mouseleave(function() {

	$('#sorting_list').slideUp(200);
	
});

