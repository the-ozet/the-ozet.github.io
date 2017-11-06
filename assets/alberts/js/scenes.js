(function(){
	
	var $lighting = $('#lighting'),
		$shared_space = $('#shared_space'),
		$bed3 = $('#bed3'),
		$bed5 = $('#bed5'),
		$apron = $('#apron'),
		$albert3 = $('#albert3'),
		$albert5 = $('#albert5');
	
	var $scenes = $('.scene');
	
	var scenes = {
		
		preshow: {
			lit: 'all',
			a3: 'cockpit',
			a5: 'cockpit'
		},
		
		lift_off: {
			lit: [$apron],
			a3: 'on_apron',
			a5: 'on_apron'
		},
		
		first_meal: {
			lit: [$shared_space],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		chess: {
			lit: [$shared_space],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		second_meal: {
			lit: [$shared_space],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		last_meal: {
			lit: [$shared_space],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		calesthenics: {
			lit: [$shared_space],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		monitoring: {
			lit: [$shared_space, $bed3, $bed5 ],
			a3: 'at_table',
			a5: 'at_table'
		},
		
		first_transmission: {
			lit: [$bed3],
			a3: 'in_bed',
			a5: 'cockpit'
		},
		
		second_transmission: {
			lit: [$shared_space],
			a3: 'cockpit',
			a5: 'at_table'
		},
		
		third_transmission: {
			lit: [$bed3],
			a5: 'cockpit',
			a3: 'in_bed'
		},
		
		fourth_transmission: {
			lit: [$shared_space],
			a3: 'cockpit',
			a5: 'at_table'
		},
		
		no_sleep: {
			lit: [$bed5, $bed3],
			a3: 'in_bed',
			a5: 'in_bed'
		}
	};
	
	function make_scene_list(){
		var $list = $('<ul id="scene_list"></ul>');
		$scenes.each(function(i){
			var $li = $('<li><a href="#' + $(this).attr('id') + '">' + $(this).attr('title') + '</a></li>');
			if(i == 0){
				$li.addClass('selected');
			}
			$list.append($li);
		});
		$('#scenes').before($list);
		$list.click(function(e){
			var $t = $(e.target);
			if($t.is('a')){
				$('li', $list).removeClass('selected');
				SCENARIO.to_scene($t.attr('href').replace('#', ''));
				$t.parents('li').addClass('selected');
				return false;
			}
		});
		SCENARIO.to_scene('preshow');
	}
	
	window['SCENARIO'] = {
		
		to_scene: function(name){
			var scene = scenes[name],
				$scene = $('#' + name);
			if(scene){
				$scene.parent().removeClass('all_scenes');
				$('.space').removeClass('lit');
				$('.albert').attr('class', 'albert');
				if(scene.lit == 'all'){
					$lighting.hide();
				}else{
					$lighting.show();
					for (var i = scene.lit.length - 1; i >= 0; i--){
						scene.lit[i].addClass('lit');
					};
				}
				$albert3.addClass(scene.a3);
				$albert5.addClass(scene.a5);
			}
			$scenes.hide();
			if(!$scene.children().length){
				SCENARIO.load_scene(name, $scene);
			}else{
				$scene.show();
			}
			return name;
		},
		
		load_scene: function(name, $scene){
			var url = name + '.html'; 
			if(window.location.search.indexOf('bust_cache=1') !=- 1){
				url = url + '?buster=' + Date.parse(new Date());
			}
			$scene.load(url, function(){
				$scene.prepend($('<h2>' + $scene.attr('title') + '</h2>'));
				$scene.show();
				$scene.append($('<p class="pagination"><a href="#" class="prev">PREV</a> | <a href="#" class="next">NEXT</a></p>'))
			});
		},
		
		all_scenes: function(){
			$('#scenes').addClass('all_scenes');
			$('#scene_list a').each(function(){
				var name = $(this).attr('href').replace('#', ''),
					$scene = $('#' + name);
					
				if(!$scene.children().length){
					SCENARIO.load_scene(name, $scene);
				}else{
					$scene.show();
				}
			});
			
		}
	};
	
	$(document).ready(function(){
		make_scene_list();
		$scenes.click(function(e){
			var $target = $(e.target),
				$scene_list = $('#scene_list');
				
			if($target.is('a.next')){
				$('li.selected', $scene_list).next('li').find('a').click();
				return false;
			}else if ($target.is('a.prev')){
				$('li.selected', $scene_list).prev('li').find('a').click();
				return false;
			}
		});
		if(window.location.search.indexOf('all_scenes=1') !=- 1){
			SCENARIO.all_scenes();
		}
	});
	
})();