fetch('http://jsonplaceholder.typicode.com/users/1/posts')
  .then(response => {
	try {
    if (response.ok) {
    response.text().then(function(text) {
	var myObj = JSON.parse(text);
	myObj.map(game=>{
		Mpost.innerHTML +="<div class='w-100 MpostM'>	<div class='float-left postid'>"+game.id+"</div>	<div class='col-11 col-sm-6 col-xl-7 float-left posttitle'>	"+game.title+"</div> <div class='col-12 col-sm-5 col-xl-4 float-right' ><button type='button' class='btn btn-warning float-right btnP btnP3'>SİL</button>		<button id='"+game.id+"' type='button' class='btn btn-success float-right btnP btnP2'>DÜZENLE</button>		<button id='"+game.id+"' type='button' class='btn btn-primary float-right btnP btnP1'>DETAY</button> 	</div>		<div class='editM'>		<div class='w-100 MtopH'>			<div class='w-50 float-left MtopT'>			Düzenle			</div>			<img src='assest/clos.jpg' class='float-right closebtn'>		</div>		<form action='' style='width: 94%; margin: 0px auto; margin-top: 2vw;'>    <div class='form-group'>      <label for=''>Title</label>      <input type='' class='form-control MtitleM' id='' placeholder='' name='text' value=''>    </div>    <div class='form-group'>      <label for='pwd'>Body</label>      <textarea class='form-control MbodyM' id='pwd' placeholder='' name='text' value=''></textarea>    </div>    <button type='submit' class='btn btn-primary' style='background: #11CDEF; border: 0px;'>GÜNCELLE</button>   </form>	</div>	  </div> <div class='Delete1'><form class='modal-content' action=''>      <h2>Are you sure?</h2>      <div class='clearfix'>        <button  type='button' class='btn btn-warning cancelbtn'>Cancel</button>        <button type='submit' class='btn btn-danger deletebtn'>Delete</button>     </div>  </form></div>"
  		})
					$(".btnP2").click(function() {
						 var P2btnid = $(this).attr("id");
						var item = myObj.find(item => item.id == P2btnid);
						$(".MtitleM").attr("value", item.title);
						$(".MbodyM").val(item.body);
						$(".editM").fadeIn();
					});
					$(".closebtn").click(function() {
						$(".editM").fadeOut();
					});
					  $(".btnP3").click(function() {
						$(".Delete1").fadeIn();
					});
					  $(".cancelbtn").click(function() {
						$(".Delete1").fadeOut();
					});
					 $(".btnP1").click(function() {
						var btnid = $(this).attr("id");
						location.href = "post.html?id="	+  btnid;
					});	 
	
		
			});
    } else {
		Mpost.textContent = "There is no data"
	}
		
		}
catch(err) {
  Mpost.textContent = err.message;
}
  })
  