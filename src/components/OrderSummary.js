import React from "react";
import styles from "./OrderSummary.module.css";
import Image from "../images/illustration-hero.svg";
import MusicIcon from "../images/icon-music.svg";

function OrderSummary(props) {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img src={Image} alt="image" />
			</div>
			<div className={styles.detailsContainer}>
				<div className={styles.detailsText}>
					<h2>Order Summary</h2>
					<p>
						You can now listen to millions of songs, audiobooks, and podcasts on
						any device anywhere you like!
					</p>
				</div>
				<div className={styles.detailsPlan}>
					<div className={styles.planDetails}>
						<img src={MusicIcon} alt="music-icon" />
						<div className={styles.planDetailsText}>
							<p className={styles.planName}>Annual plan</p>
							<p className={styles.planPrice}>$59.99/year</p>
						</div>
					</div>
					<button>Change</button>
				</div>
				<div className={styles.buttonContainer}>
					<button className={styles.proceedButton}>Proceed to Payment</button>
					<button className={styles.cancelButton}>Cancel Order</button>
				</div>
			</div>
		</div>
	);
}

export default OrderSummary;
