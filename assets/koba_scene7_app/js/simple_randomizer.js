$(document).ready(function(){
	
	var initialized = false,
		$container = $('#main_container'),
		possible_speakers = ['actions', 'koba', 'bagrat'],
		last_speaker,
		spoken = [],
		originals = {},
		scenes_to_do = [],
		current_scene_length,
		lines_remaining_in_current_scene,
		current_scene_over = false,
		freeze = false;
	
	function init(){
		var i,
			args,
			k;
		// capture originals
		for (i = possible_speakers.length - 1; i >= 0; i--){
			originals[possible_speakers[i]] = $.merge([], window[possible_speakers[i]]);
		};
		
		// how many scenes to do?	
		args = document.location.search.replace('?', '').split('&');
		for(k=0;k<args.length;k++){
			if(args[k].indexOf('sc_len=') == 0){
				scenes_to_do.push(args[k].replace('sc_len=',''));
			}
		}
		// start
		if(scenes_to_do.length > 0){
			start_scene(scenes_to_do.shift());
		}else{
			start_scene();
		}
		initialized = true;
	}
	
	function start_scene(len){
		var i;
		current_scene_over = false;
		current_scene_length = len;
		lines_remaining_in_current_scene = len;
		for (i = possible_speakers.length - 1; i >= 0; i--){
			window[possible_speakers[i]] = $.merge([], originals[possible_speakers[i]]);
		};
		$container.css({
			'visibility': 'hidden',
			'display': 'block'
		});
		next_line();
		$container.css({
			'visibility': 'visible'
		});
	}
	
	function fade_it(){
		$container.fadeOut(2000, function(){
			freeze = false;
		});
	}
	
	function end_scene(){
		show_line(window['last_action'], 'actions');
		freeze = true;
		window.setTimeout(fade_it, 1500);
		current_scene_over = true;
	}
	
	function get_speaker(){
		var speaker,
			speakers_left = possible_speakers.length;
		if (speakers_left == 3){
			speaker = (Math.random() < 0.2) ? 'actions': ((last_speaker == 'koba') ? 'bagrat' : 'koba');
		}else if(speakers_left == 2){
			if(possible_speakers[0] != 'actions'){
				speaker = (last_speaker == 'koba') ? 'bagrat' : 'koba';
			}else{
				speaker = (Math.random() < 0.2) ? 'actions' : possible_speakers[1];
			}
		}else if(speakers_left == 1){
			speaker = possible_speakers[0];
		}else{
			speaker = null;
		}
		return speaker;
	}

	function next_line(){
		var next_speaker = get_speaker(),
			remaining_lines,
			line_index,
			this_line;
		if(current_scene_over){
			if(scenes_to_do.length > 0){
				start_scene(scenes_to_do.shift());
			}else{
				$('body').animate({ backgroundColor: "#000" }, 2000);
			}
			return;
		}
		if(!next_speaker || lines_remaining_in_current_scene == 0){
			end_scene();
			return;
		}
		remaining_lines = window[next_speaker].length;
		line_index = Math.floor(Math.random() * remaining_lines);
		this_line = window[next_speaker].splice(line_index, 1)[0];
		// monitor();
		
		spoken.push(this_line);
		show_line(this_line, next_speaker);
		if(remaining_lines == 1){
			possible_speakers.splice($.inArray(next_speaker, possible_speakers), 1);
		}
		if(next_speaker != 'actions'){
			last_speaker = next_speaker;
			lines_remaining_in_current_scene--;
		}
	}
	
	function monitor(){
		for (var i = possible_speakers.length - 1; i >= 0; i--){
			var speaker = window[possible_speakers[i]];
			var $ul = $('#' + possible_speakers[i]);
			$ul.empty();
			for(var j=0;j<speaker.length;j++){
				$ul.append('<li>' + speaker[j] + '</li>');
			}
		};
	}
	
	function show_line(line, speaker){
		if(line){
			$container.text(line);
		}
		$container.css({
			'margin-top': Math.round(($(window).height() - $container.height())/2)
		});
		if(speaker){
			$('body').attr('class', speaker);
		}
	}
	
	$(document).keydown(function(e){
		if(e.keyCode == 32 && !freeze) {
			if(!initialized){
				init();
			}else{
				next_line();
			}
		};
	});
	
	show_line(null, 'title');

});