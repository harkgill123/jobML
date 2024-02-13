import { FunctionComponent } from "react";
import Category2 from "./Category2";
import Category1 from "./Category1";
import styles from "./Category.module.css";

const Category: FunctionComponent = () => {
  return (
    <section className={styles.category}>
      <div className={styles.heading}>
        <h1 className={styles.popularCategories}>Popular categories</h1>
        <button className={styles.button}>
          <div className={styles.primary}>View All</div>
          <img
            className={styles.fiarrowRightIcon}
            alt=""
            src="/fiarrowright3.svg"
          />
        </button>
      </div>
      <div className={styles.megaphoneIconGroup}>
        <Category2
          megaphoneSimpleDuotone1="/megaphonesimpleduotone-1.svg"
          digitalMarketing="Digital Marketing"
          openPosition="297 Open position"
        />
        <Category1
          penNibDuotone1="/pennibduotone-1@2x.png"
          graphicsDesign={`Graphics & Design`}
          openPosition="357 Open position"
        />
        <Category2
          megaphoneSimpleDuotone1="/codeduotone-1.svg"
          digitalMarketing={`Code & Programing`}
          openPosition="312 Open position"
        />
        <Category1
          penNibDuotone1="/monitorplayduotone-1.svg"
          graphicsDesign={`Video & Animation`}
          openPosition="247 Open position"
          propTextAlign="left"
          propTextAlign1="left"
        />
        <Category2
          megaphoneSimpleDuotone1="/musicnotesduotone-1.svg"
          digitalMarketing={`Music & Audio`}
          openPosition="204 Open position"
        />
        <Category2
          megaphoneSimpleDuotone1="/chartbarhorizontalduotone-1@2x.png"
          digitalMarketing={`Account & Finance`}
          openPosition="167 Open position"
        />
        <Category1
          penNibDuotone1="/firstaidkitduotone-1.svg"
          graphicsDesign={`Health & Care`}
          openPosition="125 Open position"
          propTextAlign="justify"
          propTextAlign1="justify"
        />
        <Category2
          megaphoneSimpleDuotone1="/megaphonesimpleduotone-1.svg"
          digitalMarketing="Science"
          openPosition="297 Open position"
        />
      </div>
    </section>
  );
};

export default Category;
