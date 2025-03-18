import React from 'react'
import styles from './Menu.module.css'
import omeletteImage from '../assets/images/image-omelette.jpeg'
const Menu = () => {
  return (
    <div className={styles.menu_container}>
        <div className={styles.menu_item}>
            <img className={styles.menu_img} src={omeletteImage} alt="omelette" />
            <h2 className={styles.menu_title}> Simple Omelette Recipe</h2>
            <p className={styles.menu_description}>
                 An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
                cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
            </p>

            <div className={styles.menu_time}>
                <h3>Preparation Time</h3>
                <ul className={styles.menu_time_list}>
                    <li><span style={{ fontWeight: '600' }}>Total:</span> Approximately 10 minutes</li>
                    <li><span style={{ fontWeight: '600' }}>Preparation:</span> 5 minutes</li>
                    <li><span style={{ fontWeight: '600' }}>Cooking:</span> 5 minutes</li>
                </ul>
            </div>

            <div className={styles.menu_ingredents}>
                <h2>Ingredients</h2>
                <ul>
                    <li>2-3 large eggs</li>
                    <li>Salt. to taste</li>
                    <li>Pepper, to taste</li>
                    <li>1 tablespoon of butter or oil</li>
                    <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                </ul>
            </div>
            <hr className={styles.menu_line}/>
            <div className={styles.menu_instructions}>
                <h2>Instructions</h2>
                <ol>
                    <li><span style={{ fontWeight: '600' }}>Beat the eggs</span>: In a bowl, beat the eggs with a pinch of salt and pepper
                    until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>

                    <li><span style={{ fontWeight: '600' }}>Heat the pan</span>: Place a non-stick frying pan over medium heat and add butter or oil.</li>
                    
                    <li><span style={{ fontWeight: '600' }}>Cook the omelette</span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the
                    pan to ensure the eggs evenly coat the surface.</li>
                    
                    <li><span style={{ fontWeight: '600' }}>Add fillings (optional)</span>: When the eggs begin to set at the edges but are still slightly
                    runny in the middle, sprinkle your chosen fillings over one half of the omelette.</li>
                    
                    <li><span style={{ fontWeight: '600' }}>Fold and serve</span>: As the omelette continues to cook, carefully lift one edge and fold it over the
                    filling. Let it cook for another minute, then slide it onto a plate.</li>
                    
                    <li><span style={{ fontWeight: '600' }}>Enjoy</span>: Serve hot, with additional salt and pepper if needed.</li>
                </ol>
            </div>
            <hr className={styles.menu_line}/>
            <div className={styles.menu_nutrition}>
                <h2>Nutrition</h2>
                <p>The table below shows nuteitional values per serving without the additional fillings.</p>

                <div className={styles.menu_nutrition_table}>
                    <div className={styles.menu_nutrition_table_row}>
                        <p>Calories</p>
                        <p className={styles.menu_nutrition_table_weight1}>227kcal</p>
                    </div>
                    <hr className={styles.menu_nutrition_line}/>
                    <div className={styles.menu_nutrition_table_row}>
                        <p>Carbs</p>
                        <p className={styles.menu_nutrition_table_weight2}>0g</p>
                    </div>
                    <hr className={styles.menu_nutrition_line}/>
                    <div className={styles.menu_nutrition_table_row}>
                        <p>Protein</p>
                        <p className={styles.menu_nutrition_table_weight3}>20g</p>
                    </div>
                    <hr className={styles.menu_nutrition_line}/>
                    <div className={styles.menu_nutrition_table_row}>
                        <p>Fat</p>
                        <p className={styles.menu_nutrition_table_weight4}>22g</p>
                    </div>


                </div>
            </div>

        </div>
    </div>
  )
}

export default Menu