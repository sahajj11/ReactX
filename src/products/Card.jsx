import React from "react";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img
            className={styles.cardImage} // Changed to camelCase
            src="https://i.insider.com/5898d0f58275e829008b4842?width=800&format=jpeg&auto=webp"
            alt="Switzerland"
          />
          <div className={styles.cardContent}> {/* Changed to use styles */}
            <h2 className={styles.title}>Switzerland</h2>
            <p className={styles.des}>
              A beautiful country known for its stunning landscapes, chocolates, and world-class skiing.
            </p>
            <button className={styles.btn}>Explore</button>
          </div>
        </div>
        
        <div className={styles.card}>
          <img
            className={styles.cardImage} // Changed to camelCase
            src="https://www.discover-the-world.com/app/uploads/2019/09/finland-snowmobile-aurora-safari-nangu-1800x0-c-default.jpg"
            alt="Finland"
          />
          <div className={styles.cardContent}> {/* Changed to use styles */}
            <h2 className={styles.title}>Finland</h2>
            <p className={styles.des}>
              A beautiful Nordic country known for its vast forests, stunning lakes, and the Northern Lights.
            </p>
            <button className={styles.btn}>Explore</button>
          </div>
        </div>
        
        <div className={styles.card}>
          <img
            className={styles.cardImage} // Changed to camelCase
            src="https://ychef.files.bbci.co.uk/1280x720/p0hmc6d7.jpg"
            alt="Netherlands"
          />
          <div className={styles.cardContent}> {/* Changed to use styles */}
            <h2 className={styles.title}>Netherlands</h2>
            <p className={styles.des}>
              A diverse and scenic country known for its canals, tulips, windmills, and innovative design.
            </p>
            <button className={styles.btn}>Explore</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
