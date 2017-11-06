$(document).ready(function(){
// Stores the value of percentage of track loaded
	
	
	var global_lp = 0,
		jplayer_ready = false;

	$('#scenes').click(function(e){
		var $t = $(e.target),
			$lyrics,
			$section = $(this);
		if($t.is('a.play')){
			$('a.play', $section).css('display', 'inline');
			$t.css('display', 'none');
			$t.parent('p').after($('#player_container').css('display', 'block'));
			if(jplayer_ready){
				$("#jquery_jplayer").jPlayer('setFile', $t.attr('href'));
				$("#jquery_jplayer").jPlayer('play');
			}
			return false;
		}
	});

	// ADAPTED FROM DEMO --------------------------

	$("#jquery_jplayer").jPlayer({
		ready: function () {
			jplayer_ready = true;
			// this.element.jPlayer("setFile", "http://ozet.us/media/ozet_protest_song.mp3");

			// Draw the control bar

			var jump_html = '',
				vol_html = '';
			
			for (i=0; i < 100; i++){
				jump_html = jump_html + "<a href='#' id='lb-"+i+"'></a>";
				vol_html = vol_html + "<a href='#' id='lv-"+i+"'></a>";
			}
			$('#player_progress_ctrl_bar').empty().append($(jump_html));
			$('#player_volume_bar').empty().append($(vol_html));
		},
		customCssIds: true,
		errorAlerts: true
	})
	.jPlayer("onProgressChange", function(lp,ppr,ppa,pt,tt) {
 		var lpInt = parseInt(lp);
 		var ppaInt = parseInt(ppa);

 		global_lp = lpInt;

		$('#player_progress_load_bar span.progress').width(lpInt + '%');

 		$('#player_progress_play_bar span.progress').width(ppaInt + '%');
	})
	.jPlayer("onSoundComplete", function() {
		// this.element.jPlayer("play");
	});

	$("#player_play").click( function() {
		$('#jquery_jplayer').jPlayer("play");
		return false;
	});

	$("#player_pause").click( function() {
		$('#jquery_jplayer').jPlayer("pause");
		return false;
	});

	$("#player_stop").click( function() {
		$('#jquery_jplayer').jPlayer("stop");
		return false;
	});

	$("#player_volume_min").click( function() {
		$('#jquery_jplayer').jPlayer("volume", 0);
		return false;
	});

	$("#player_volume_max").click( function() {
		$('#jquery_jplayer').jPlayer("volume", 100);
		return false;
	});

	$("#player_progress_ctrl_bar a").live( "click", function() {
		$("#jquery_jplayer").jPlayer("playHead", this.id.substring(3)*(100.0/global_lp));
		return false;
	});
	
	$("#player_volume_bar a").live( "click", function() {
		$("#jquery_jplayer").jPlayer("volume", this.id.substring(3));
		return false;
	});
});