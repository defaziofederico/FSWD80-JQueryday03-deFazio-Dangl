$(document).ready(function(){

	var productType = ["tablet", "phone"];
	var productName = ["Super Tablet", "Shift Phone"];
	var price = [750, 499];

	for(var i = 0; i < 2; i++) {
		$(".container").append(`
			<div class="col-xs-12 col-md-6">
				<!-- First product box start here-->
				<div class="prod-info-main prod-wrap clearfix ${productType[i]}">
					<div class="row">
						<div class="col-md-5 col-sm-12 col-xs-12">
							<div class="product-image"> 
								<img src="tablet_samsung.png" alt="194x228" class="img-responsive"> 
								<span class="tag2 sale">
									SALE
								</span> 
							</div>
						</div>
						<div class="col-md-7 col-sm-12 col-xs-12">
							<div class="product-deatil">
								<h5 class="name">
									<a href="#">
										${productName[i]} <span>Product Category</span>
									</a>
								</h5>
								<p class="price-container">
									<span>$${price[i]}</span>
								</p>
								<span class="tag1"></span> 
							</div>
							<div class="description">
								<p>A Short product description here </p>
							</div>
							<div class="product-info smart-form">
								<div class="row">
									<div class="col-md-12"> 
										<a href="javascript:void(0);" class="btn btn-danger">Add to cart</a>
										<a href="javascript:void(0);" class="btn btn-info">More info</a>
									</div>
									<div class="col-md-12">
										<div class="rating">Rating:
											<label for="stars-rating-5"><i class="fa fa-star text-danger"></i></label>
											<label for="stars-rating-4"><i class="fa fa-star text-danger"></i></label>
											<label for="stars-rating-3"><i class="fa fa-star text-danger"></i></label>
											<label for="stars-rating-2"><i class="fa fa-star text-warning"></i></label>
											<label for="stars-rating-1"><i class="fa fa-star text-warning"></i></label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- end product -->

			</div>
		`);}

	$(".notebook").css("background-color", "red");
	$(".tablet").css("background-color", "blue");
	$(".phone").css("background-color", "green");

$("#info").on("change", function(){




	var select=$("#info").val();
			$(".notebook,.tablet,.phone").hide();
				if (select=="all") {
					$(".notebook,.tablet,.phone").show(); 
			} else { 
					$(`.${select}`).show();
	}
})



})














 




 
