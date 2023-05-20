import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../image/1.jpg'
import img2 from '../image/2.jpg'
import img3 from '../image/3.jpg'
import './Review.css'
function Reviews() {
  return (
    <div>



<div class="container-xl">
	<div class="row">
		<div class="col-lg-8 mx-auto">
			<h2 className='review'>Client's Review
      </h2>
			<div id="myCarousel" class="carousel slide" data-ride="carousel">

				<ol class="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
					<li data-target="#myCarousel" data-slide-to="1"></li>
					<li data-target="#myCarousel" data-slide-to="2"></li>
				</ol>   

				<div class="carousel-inner active">
					<div class="carousel-item active">
						<div class="img-box"><img src={img1} alt=""/></div>
						<p class="testimonial" style={{}}>"I recently purchased a Sofa set from this Furniture Website, And I have to say I am beyond impressed with the quality of the furniture. the sofa set is not only stylish,but also incredibly comfortable.the delievery was prompt and the customer service team was very helpful through the process."</p>
						<p class="overview"><b>Aishwarya Rai</b>, 5 Months Ago.</p>
					</div>
					<div class="carousel-item">
						<div class="img-box"><img src={img2} alt=""/></div>
						<p class="testimonial">"I was hesitant about buying furniture online, but this company exceeded my expectations. The item I ordered arrived earlier than expected, and it was exactly as described. The customer support was also helpful in answering my questions. Overall, a positive experience."</p>
						<p class="overview"><b>Salman Khan</b>, 10 Months Ago.</p>
					</div>
					<div class="carousel-item">
						<div class="img-box"><img src={img3} alt=""/></div>
						<p class="testimonial">"I recently purchased a dining table from this furniture Website, and I am extremely satisfied with my purchase. The quality of the table is fantastic, and it was delivered on time without any issues. I would definitely shop here again."</p>
						<p class="overview"><b>Aryan Khan</b>, 1 Year Ago.</p>
					</div>
				</div>
				
				<a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
					<i class="fa fa-angle-left"></i>
				</a>
				<a class="carousel-control-next" href="#myCarousel" data-slide="next">
					<i class="fa fa-angle-right"></i>
				</a>
			</div>
		</div>
	</div>
</div>


{/* 




<div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="rounded-circle shadow-1-strong mb-4"
        src={bed} alt="avatar"
        style={{width: "150px"}} />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Maria Kate</h5>
          <p>Photographer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src={table} alt="avatar"
        style={{width: "150px"}} />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">John Doe</h5>
          <p>Web Developer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div class="carousel-item">
      <img class="rounded-circle shadow-1-strong mb-4"
        src={bed} alt="avatar" style={{width: "150px"}} />
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Anna Deynah</h5>
          <p>UX Designer</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
            doloremque.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}


    </div>
  )
}

export default Reviews