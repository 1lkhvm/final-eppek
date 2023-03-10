import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../contexts/Main'
import Navbar from '../../Layouts/Navbar'
import './style.scss'
function OrderPage() {



	const { increase, decrease, remove, basket } = useContext(MainContext)


	return (
		<>
			<Navbar />

			<section className='AdminPanelProducts'>
				<div className='AdminPanelProductsMain'>


					{
						basket.length == 0 &&
						<div>
							<p className="text"> Please, add item to basket before purchasing  </p>
							<Link to='/products/pasta' >
								Maybe pasta
							</Link>
							<Link to='/products/farm' >
								Maybe farm
							</Link>
						</div>
					}
					{
						basket.map((i, j) => {
							return (
								<div className='AdminProduct'>
									<img src={i.img} alt='foto' />
									<div id='AdminProductsTexts'>
										<h3 id='AdminProductH3'> {i.title} </h3>
										<h4 id='AdminProductH4'> {i.description} </h4>
										<h6 id='AdminProductH6'> Price of one :  $ {i.price} </h6>
									</div>
									<div class="center container">
										<div class="button col col-1">
											<button id="minus-btn" onClick={() => decrease(i)}  >-</button>
										</div>
										<div class="number col col-2">
											<h1 id="count"> {i.count} </h1>
										</div>
										<div class="button col col-1">
											<button id="plus-btn" onClick={() => increase(i)} > + </button>
										</div>
									</div>
									<button onClick={() => remove(i)}  >X</button>
								</div>
							)

						})
					}
					<div className='total'>
						{
							(() => {
								let sum = 0
								for (let x of basket) {
									sum = x.count * x.price
								}
								return <div style={{ marginTop: "20px" }} >
									<p  >  	 {sum.toFixed(2)} $ +  {(sum * 0.05).toFixed(2)} KDV  </p>
									<p  >  	Total: {(1.35 * sum).toFixed(2)}   </p>
									<button className='	button'>Add order</button>
								</div>
							})()

						}
					</div>

				</div>
			</section>
		</>
	)
}

export default OrderPage